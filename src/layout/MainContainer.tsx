import Experiences from "./Sections/Experiences";
import Presentation from "./Sections/Presentation";
import Projects from "./Sections/Projects";

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
      <Projects></Projects>
      <Experiences></Experiences>
    </main>
  );
}
