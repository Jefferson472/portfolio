export default function FloatContacts() {
  return (
    <nav className="
      fixed h-screen
      bottom-0
      w-8      
    ">
      <div className="
        flex items-end
        h-full
      ">
        <div className="flex flex-col gap-3 items-center">
          <span className="bg-lightGray h-20 w-[0.15rem]"></span>
          <ul className="flex flex-col gap-3 mb-3">
            <li><a href=""><img src="src\assets\svg\linkedin.svg" alt="Linkedin Logo" /></a></li>
            <li><a href=""><img src="src\assets\svg\github.svg" alt="Github Logo" /></a></li>
            <li><a href=""><img src="src\assets\svg\whatsapp.svg" alt="Whatsapp Logo" /></a></li>
            <li><a href=""><img src="src\assets\svg\mail.svg" alt="" /></a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}