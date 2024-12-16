import Spacer from "../../components/Spacer";

export default function Projects() {
  return (
    <>
      <Spacer height={80}></Spacer>
      <section id="xp-section"
        className="min-h-[calc(100vh-(var(--padding-default)))] w-full"
      >
        <Spacer height={80}></Spacer>
        <div className="flex flex-col items-center justify-between min-h-[calc(100vh-var(--header-height))] pb-4">
          <h2 className="text-4xl font-semibold mb-4 text-center">Experiência</h2>
          <div className="flex flex-col gap-6 mt-8 max-w-[672px] mx-auto">
            {Array.from({ length: 3 }).map((_, index) => (
              <div className="flex gap-3">
                <div className="hidden sm:flex flex-col items-center">
                  <div className="flex gap-3 items-center min-h-[28px]">
                    <span className="inline-block bg-gray-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded relative">
                      2024
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
                  <h2 className="">Nome do Cargo</h2>
                  <p className="">Nome da Empresa<span className="sm:hidden text-secondary"> | 2024</span></p>
                  <p className="text-small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at blandit lacus. Donec ac aliquet velit, sed mattis turpis. Aliquam at elementum metus. In volutpat luctus felis, vitae pharetra purus ullamcorper egestas. In volutpat blandit ante vel malesuada. Etiam auctor, libero ornare ultricies ultricies, turpis odio auctor nunc, sed consequat felis enim eget erat. Etiam viverra eros tristique risus placerat pulvinar. Fusce vulputate auctor risus, vitae tristique dui. Fusce diam metus, viverra ut sem non, tincidunt auctor turpis. Donec vel massa at mi interdum mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean eleifend felis non tellus imperdiet placerat. Pellentesque commodo orci at velit molestie, a dignissim elit dignissim.
                  </p>
                </div>
              </div>
            ))}
            <div className="flex justify-end w-full">
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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}