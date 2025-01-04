import Spacer from "../../components/Spacer";
import experiences from '../../data/experiences.json';

export default function Projects() {
  const dateConvert = (date: string) => {
    const months = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
    const [year, month] = date.split("-");
    return `${months[parseInt(month) - 1]} de ${year}`;
  };

  return (
    <>
      <Spacer height={80}></Spacer>
      <section id="xp-section"
        className="min-h-[calc(100vh-(var(--padding-default)))] w-full"
      >
        <Spacer height={80}></Spacer>
        <div className="flex flex-col items-center justify-around min-h-[calc(100vh-var(--header-height))] pb-4">
          <h2 className="text-4xl font-semibold mb-4 text-center">Experiências</h2>
          <div className="flex flex-col gap-6 mt-8 max-w-[672px] mx-auto">
            {experiences.reverse().map(xp => (
              <div className="flex gap-3">
                <div className="hidden sm:flex flex-col items-center">
                  <div className="flex gap-3 items-center min-h-[28px]">
                    <span className="inline-block bg-gray-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded relative">
                      {xp.start.split("-")[0]}
                      <span className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-transparent border-l-gray-500"></span>
                    </span>
                  </div>
                </div>

                <div className="hidden sm:flex flex-col items-center">
                  <div className="flex items-center min-h-[28px]">
                    <div className="bg-contrast rounded-full w-3 h-3"></div>
                  </div>
                  <div className="bg-lightGray w-[0.15rem] h-full"></div>
                </div>

                <div className="flex flex-col justify-start items-start ml-5 text-justify">
                  <h2 className="">{xp.name}</h2>
                  <p className="">
                    {xp.company}
                    <span className="text-secondary"> | {dateConvert(xp.start)} - {xp.end ? dateConvert(xp.end) : "o momento"}</span>
                  </p>
                  <p className="text-small">{xp.description}</p>
                </div>
              </div>
            ))}
            {/* TODO: Implementar tela de ver mais experiências */}
            {/* <div className="flex justify-end w-full">
              <button className="
                px-4 py-2 
                bg-accent 
                text-white font-semibold text-xs
                rounded-lg 
                shadow-md
                hover:bg-contrast hover:border-contrast
                focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-75 
                transition duration-200
              ">
                Ver Mais
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}