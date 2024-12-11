import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="
      fixed top-0 left-0 w-full
      max-w-[calc(var(--max-width-default)-(var(--padding-default)))]
    ">
      <div className="hidden sm:flex justify-end items-center text-xl h-[var(--header-height)]">
        <nav>
          <ul className="flex justify-end items-center gap-8">
            <li><a href="#presentation-section">Início</a></li>
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

      {/* MOBILE */}
      <div className="flex sm:hidden justify-end">
        <div id="hamburguer" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" 
            height="64px" 
            width="64px" 
            viewBox="0 -960 960 960" 
            fill="#D7D7D9"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
          </svg>
        </div>
        <ul
          className={`${menuOpen ? "block" : "hidden"} 
            text-start absolute bg-dark text-white top-full right-0 p-4 space-y-2`
          }
        >
          <li>
            <a href="#presentation-section" onClick={() => setMenuOpen(false)}>
              Início
            </a>
          </li>
          <li>
            <a href="#projects-section" onClick={() => setMenuOpen(false)}>
              Projetos
            </a>
          </li>
          <li>
            <a href="#xp-section" onClick={() => setMenuOpen(false)}>
              Experiências
            </a>
          </li>
          <li>
            <a
              href="#contact-section"
              className="text-contrast"
              onClick={() => setMenuOpen(false)}
            >
              Fale Comigo
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
