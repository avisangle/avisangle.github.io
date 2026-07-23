import { AbsoluteFill, Img, staticFile } from "remotion";

export type ThumbnailHoldProps = {
  src: string;
};

export const ThumbnailHold: React.FC<ThumbnailHoldProps> = ({ src }) => {
  return (
    <AbsoluteFill>
      <Img
        src={staticFile(src)}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </AbsoluteFill>
  );
};
