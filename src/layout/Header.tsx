export default function Header() {
  return (
    <header className="
      fixed top-0 w-full 
      max-w-[calc(var(--max-width-default)-(var(--padding-default)*2))]
    ">
      <div className="flex items-center h-20 text-xl">
        <div className="flex flex-grow justify-start"><a href="/">LOGO</a></div>
        <nav>
          <ul className="flex justify-end gap-8">
            <li>Início</li>
            <li>Sobre</li>
            <li>Projetos</li>
            <li>Fale Comigo</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
