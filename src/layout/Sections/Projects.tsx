import Card from "../../components/Card";
import Spacer from "../../components/Spacer";

export default function Projects() {
  return (
    <>
      <Spacer height={80}></Spacer>
      <section id="projects-section"
        className="
          flex justify-center
          h-[calc(100vh-)] w-full
        "
      >
        <div>
          <h1>Meus Projetos</h1>
          <div className="grid grid-cols-3 gap-4 mt-8">
            {Array.from({ length: 5 }).map((_, index) => (
              <Card key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}