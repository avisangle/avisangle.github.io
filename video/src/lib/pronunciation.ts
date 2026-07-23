/**
 * Tech-term pronunciation overrides for ElevenLabs TTS.
 *
 * v3 does NOT support SSML phoneme tags — only eleven_flash_v2 and
 * eleven_monolingual_v1 do. So we use simple text substitution before
 * sending the script to the API.
 */

export const PRONUNCIATIONS: ReadonlyArray<readonly [RegExp, string]> = [
  [/\bJSONL\b/g, "jay sun ell"],
  [/\bMCP\b/g, "M C P"],
  [/\bCLI\b/g, "C L I"],
  [/\bAPI\b/g, "A P I"],
  [/\bSDK\b/g, "S D K"],
  [/\bIDEs\b/g, "I D Es"],
  [/\bIDE\b/g, "I D E"],
  [/\bnpm\b/g, "N P M"],
  [/\bnpmrc\b/g, "N P M R C"],
  [/\bWSL\b/g, "W S L"],
  [/\bPRs\b/g, "P Rs"],
  [/\bPR\b/g, "P R"],
  [/\bCI\b/g, "C I"],
  [/\/ultrareview\b/gi, "slash ultra review"],
  [/\bMAX_THINKING_TOKENS\b/g, "max thinking tokens"],
  [/\bclaude\.ai\/code\b/gi, "claude dot A I slash code"],
  [/\bVS Code\b/g, "V S Code"],
  [/\.claude\b/g, "dot claude"],
  [/\bkubectl\b/g, "kube control"],
  [/\bYAML\b/g, "yamel"],
  [/\bmacOS\b/g, "mac O S"],
  [/\.docx\b/g, "dot doc ex"],
  [/\.pptx\b/g, "dot P P T X"],
  [/\buser\.define_outcome\b/g, "user dot define outcome"],
  [/\bmax_iterations\b/g, "max iterations"],
] as const;

export function applyPronunciation(text: string): string {
  let out = text;
  for (const [pattern, replacement] of PRONUNCIATIONS) {
    out = out.replace(pattern, replacement);
  }
  return out;
}
