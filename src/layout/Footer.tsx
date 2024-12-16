import Contacts from "../components/Contacts";

export default function Footer() {
  return (
    <div className="sm:hidden">
      <div className="flex justify-end h-8">
        <Contacts></Contacts>
      </div>
    </div>
  )
}