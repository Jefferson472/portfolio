import Contact from "./Sections/Contact";
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
      <div className="max-w-[1280px] m-auto">
        <Presentation></Presentation>
        <Projects></Projects>
        <Experiences></Experiences>
        <Contact></Contact>
      </div>
    </main>
  );
}
