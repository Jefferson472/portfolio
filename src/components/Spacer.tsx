interface SpacerProps {
  height: number;
  type?: string;
}

export default function Spacer({ height, type = "px" }: SpacerProps) {
  return (
    <div
      style={{ height: `${height}${type}` }}
    ></div>
  );
}
