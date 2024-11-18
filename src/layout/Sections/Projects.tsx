import Card from "../../components/Card";
import Spacer from "../../components/Spacer";

export default function Projects() {
  return (
    <section id="projects-section">
      <Spacer height={80}></Spacer>
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-4xl font-semibold mb-4 text-center">Meus Projetos</h2>
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}