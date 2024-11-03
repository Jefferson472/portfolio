import Presentation from "./Sections/Presentation";

export default function MainContainer() {
  return (
    <main
      className="
        min-w-full
        h-[calc(100%-var(--padding-default))]
        w-full
      "
    >
      <Presentation></Presentation>
    </main>
  );
}
