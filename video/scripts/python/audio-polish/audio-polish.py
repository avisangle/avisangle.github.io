#!/usr/bin/env python3
"""
Audio polish for VO MP3s.

Lifts ElevenLabs-generated speech to broadcast-grade loudness:
  - Integrated LUFS normalization to a configurable target (default -16 LUFS,
    which lands near -14 LUFS final after a music bed is mixed in)
  - Light bus compression for consistency across the read
  - Gentle high-pass at 80 Hz to remove sub-vocal rumble
  - True-peak limiter at -1 dBTP to guarantee no clipping

Usage:
    uv run audio-polish.py INPUT OUTPUT [--target-lufs N] [--bitrate KBPS]

Designed to run via uv; deps live in pyproject.toml.
"""
from __future__ import annotations

import argparse
import sys

import numpy as np
import pyloudnorm as pyln
from pedalboard import Compressor, HighpassFilter, Limiter, Pedalboard
from pedalboard.io import AudioFile


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("input", help="Input audio file (MP3, WAV, etc.)")
    parser.add_argument("output", help="Output MP3")
    parser.add_argument(
        "--target-lufs",
        type=float,
        default=-16.0,
        help=(
            "Target integrated loudness in LUFS. -16 is right for speech-only; "
            "expect ~-14 final once a music bed is mixed in. Default: -16."
        ),
    )
    parser.add_argument(
        "--bitrate",
        type=int,
        default=192,
        help="Output MP3 bitrate in kbps. Default: 192.",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()

    # ---- Load ---------------------------------------------------------------
    with AudioFile(args.input) as f:
        samplerate = f.samplerate
        audio = f.read(f.frames)  # shape: (channels, samples) or (samples,)

    n_channels = 1 if audio.ndim == 1 else audio.shape[0]
    print(f"Loaded: {args.input}")
    print(f"  Sample rate: {samplerate} Hz")
    print(f"  Channels:    {n_channels}")

    # ---- Measure input LUFS -------------------------------------------------
    meter = pyln.Meter(samplerate)
    audio_for_meter = audio if audio.ndim == 1 else audio.T
    input_lufs = meter.integrated_loudness(audio_for_meter)
    print(f"  Input LUFS:  {input_lufs:.2f}")

    # Long silence stretches can yield -inf / nan on integrated LUFS.
    if not np.isfinite(input_lufs):
        print(f"WARN: input LUFS not finite ({input_lufs}); skipping gain stage.")
        normalized = audio
    else:
        gain_db = args.target_lufs - input_lufs
        gain_linear = 10.0 ** (gain_db / 20.0)
        normalized = (audio * gain_linear).astype(np.float32)
        print(f"  Gain applied: {gain_db:+.2f} dB → target {args.target_lufs:.1f} LUFS")

    # ---- Process chain ------------------------------------------------------
    board = Pedalboard(
        [
            HighpassFilter(cutoff_frequency_hz=80.0),
            Compressor(
                threshold_db=-20.0,
                ratio=3.0,
                attack_ms=5.0,
                release_ms=100.0,
            ),
            Limiter(threshold_db=-1.0, release_ms=100.0),
        ]
    )
    processed = board(normalized, samplerate)

    # ---- Verify final LUFS --------------------------------------------------
    processed_for_meter = processed if processed.ndim == 1 else processed.T
    output_lufs = meter.integrated_loudness(processed_for_meter)
    print(f"  Output LUFS: {output_lufs:.2f}")

    # ---- Write --------------------------------------------------------------
    out_channels = 1 if processed.ndim == 1 else processed.shape[0]
    # pedalboard's WriteableAudioFile uses `quality` for MP3 — a float kbps
    # value or a preset like "V0".
    with AudioFile(
        args.output,
        "w",
        samplerate=samplerate,
        num_channels=out_channels,
        quality=float(args.bitrate),
    ) as f:
        f.write(processed)
    print(f"Wrote {args.output} ({args.bitrate} kbps)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
