import Contacts from "../components/Contacts";


export default function FloatContacts() {
  return (
    <nav className="
      fixed h-screen
      bottom-0
      w-8      
    ">
      <div className="
        hidden
        sm:flex items-end
        h-full
      ">
        <div className="flex flex-col gap-3 items-center">
          <span className="bg-lightGray h-20 w-[0.15rem]"></span>
          <Contacts></Contacts>
        </div>
      </div>
    </nav>
  )
}