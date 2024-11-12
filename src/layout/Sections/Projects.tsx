import Card from "../../components/Card";
import Spacer from "../../components/Spacer";

export default function Projects() {
  return (
    <section id="projects-section">
      <Spacer height={80}></Spacer>
      <div className="flex flex-col items-center">
        <h1>Meus Projetos</h1>
        <div className="grid grid-cols-3 gap-4 mt-8">
          {Array.from({ length: 5 }).map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}