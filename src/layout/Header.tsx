export default function Header() {
  return (
    <header className="
      fixed top-0 w-[calc(100%-(var(--padding-default)*2))]
      max-w-[calc(var(--max-width-default)-(var(--padding-default)*2))]
      bg-primary
    ">
      <div className="flex items-center text-xl h-[var(--header-height)]">
        <div className="flex flex-grow justify-start"><a href="/">LOGO</a></div>
        <nav>
          <ul className="flex justify-end items-center gap-8">
            <li><a href="#presentation-section">Início</a></li>
            <li>Sobre</li>
            <li><a href="#projects-section">Projetos</a></li>
            <li><a href="#xp-section">Experiências</a></li>
            <li>
              <a href="#contact-section" className="                
                inline-block 
                px-4 py-2 
                bg-contrast 
                text-sm text-primary font-semibold 
                shadow-md 
                hover:bg-accent hover:text-white
                focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-75 
                transition duration-200
              ">
                Fale Comigo
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
