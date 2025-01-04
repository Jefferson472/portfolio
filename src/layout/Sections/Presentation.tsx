export default function Presentation() {
  return (
    <section
      id="presentation-section"
      className="
        flex flex-col items-center justify-center gap-10
        h-[100vh] w-full sm:px-20
      "
    >
      <div className="w-[35%] flex justify-center">
        <img
          className="rounded-full border-contrast border-2 max-w-[250px] shadow-lg shadow-accent"
          src="https://github.com/Jefferson472.png"
          alt="Jefferson Miranda"
        />
      </div>

      <div className="flex flex-col justify-center max-w-[672px]">
        <h1 className="sm:text-4xl text-start mb-3">
          Olá, eu sou <span className="text-contrast">Jefferson Miranda</span>
        </h1>
        <p className="text-secondary text-start">
          Sou desenvolvedor especializado em Python, .NET, Node.js e AWS. 
          Apaixonado por tecnologia e sempre em busca de novos desafios para criar soluções inovadoras e escaláveis. 
          Explore meu portfólio para conhecer mais sobre meu trabalho.
        </p>

        <div className="flex flex-wrap gap-5 justify-start mt-5">
          <button
            className="px-4 py-2 
              text-contrast font-bold
              border-2 border-contrast rounded-lg 
              hover:bg-contrast hover:border-contrast hover:text-white
              focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-75 
              transition duration-200 "
            onClick={() => window.location.href = '#projects-section'}
          >
            Ver Projetos
          </button>

          <button
            className="px-4 py-2 
              text-contrast font-bold
              border-2 border-contrast rounded-lg 
              hover:bg-contrast hover:border-contrast hover:text-white
              focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-75 
              transition duration-200 "
            onClick={() => window.location.href = '#contact-section'}
          >
            Fale Comigo
          </button>
        </div>
      </div>
    </section>
  );
}
