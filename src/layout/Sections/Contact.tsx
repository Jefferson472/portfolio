export default function Contact() {
  return (
    <>
      <section id="contact-section"
        className="
          flex flex-col justify-center
          h-[calc(100vh-(var(--padding-default)))] w-full
        "
      >
        <div>
          <h2 className="text-4xl font-semibold mb-4 text-center">Fale Comigo</h2>

          <form className="space-y-6 w-[32rem] max-w-lg mx-auto">
            <div>
              <label htmlFor="name" className="sr-only">Nome</label>
              <input
                type="text"
                id="name"
                placeholder="Nome"
                className="w-full bg-transparent border-b-[1px] border-accent focus:border-contrast text-gray-200 placeholder-gray-400 outline-none py-2"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full bg-transparent border-b-[1px] border-accent focus:border-contrast text-gray-200 placeholder-gray-400 outline-none py-2"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Mensagem</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Mensagem"
                className="w-full bg-transparent border-b-[1px] border-accent focus:border-contrast text-gray-200 placeholder-gray-400 outline-none py-2"
              ></textarea>
            </div>

            <button
              type="submit"
              className="
                w-full
                px-4 py-2 
                bg-contrast 
                text-sm text-primary font-semibold 
                shadow-md 
                hover:bg-accent hover:text-white hover:border-accent 
                focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-75 
                transition duration-200
              ">
              Enviar
            </button>
          </form>
        </div>
      </section>
    </>
  )
}