export default function Presentation() {
  return (
    <section
      id="presentation-section"
      className="
        flex flex-col items-center justify-center gap-10
        h-[100vh] w-full px-20
      "
    >
      <div className="w-[35%] flex justify-center">
        <img
          className="rounded-full border-contrast border-2 max-w-[250px] shadow-lg shadow-accent"
          src="src/assets/img/jefferson-profile.png"
          alt="Jefferson Miranda"
        />
      </div>

      <div className="flex flex-col justify-center w-[55%]">
        <h1 className="text-4xl font-bold mb-4">
          Olá, eu sou <span className="text-contrast">Jefferson Miranda</span>
        </h1>
        <p className="text-lg  leading-relaxed">
          Sou desenvolvedor especializado em Python, .NET, Node.js e AWS. 
          Apaixonado por tecnologia e sempre em busca de novos desafios para criar soluções inovadoras e escaláveis. 
          Explore meu portfólio para conhecer mais sobre meu trabalho.
        </p>
      </div>


    </section>
  );
}
