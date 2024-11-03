import Card from "../../components/Card";

export default function Projects() {
  return (
    <section id="projects-section"
      className="
        flex justify-center
        h-[calc(100vh-var(--header-height))] w-full
      "
    >
      <div>
        <h1>Meus Projetos</h1>
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}