import Card from "../../components/Card";
import Spacer from "../../components/Spacer";

export default function Projects() {
  return (
    <section id="projects-section">
      <Spacer height={80}></Spacer>
      <div className="flex flex-col items-center justify-between h-[calc(100vh-var(--header-height))] pb-4">
        <h2 className="text-4xl font-semibold mb-4 text-center">Meus Projetos</h2>
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <Card key={index} />
          ))}

          <div className="max-w-80 rounded overflow-hidden shadow-lg shadow-dark flex items-center justify-center">
            <button
              className="px-4 py-2 
                bg-accent 
                text-white font-semibold text-xs
                rounded-lg 
                shadow-md
                hover:bg-contrast hover:border-contrast
                focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-75 
                transition duration-200 "
              onClick={() => window.location.href = '/veja-mais'}
            >
              Ver Mais
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}