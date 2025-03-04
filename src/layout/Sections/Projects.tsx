import Card from "../../components/Card";
import Spacer from "../../components/Spacer";
import projects from '../../data/projects.json';

export default function Projects() {
  return (
    <section id="projects-section" className="sm:px-[40px]">
      <Spacer height={80}></Spacer>
      <div className="flex flex-col items-center justify-between pb-4">
        <h2 className="text-4xl font-semibold mb-4 text-center">Meus Projetos</h2>
        <div className="flex flex-wrap justify-center w-full gap-5">
          {projects.slice(0, 6).map((project, i) => (
            <Card key={i} project={project} />
          ))}

          {/* TODO: Implementar seção ver mais */}
          {/* <div className="w-80 max-w-80 rounded overflow-hidden flex items-center justify-end lg:justify-center">
            <button
              className="px-4 py-2 
                bg-accent 
                text-white font-semibold text-xs
                rounded-lg 
                shadow-md
                hover:bg-contrast hover:border-contrast
                focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-75 
                transition duration-200"
              onClick={() => window.location.href = '/veja-mais'}
            >
              Ver Mais
            </button>
          </div> */}
        </div>
      </div>
    </section>
  )
}