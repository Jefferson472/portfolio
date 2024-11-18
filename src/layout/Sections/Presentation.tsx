export default function Presentation() {
  return (
    <section id="presentation-section"
      className="
        flex justify-center
        h-[calc(100vh-var(--header-height))] w-full
      "
    >
      <div className="flex flex-col justify-center w-[50%]">
        <h1>Jefferson Miranda</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis orci a porta eleifend. Vivamus ultrices convallis justo, at dictum erat consectetur quis. Nullam nec aliquet lacus. Nullam ultricies nulla dolor, eget blandit lorem scelerisque eu. In hac habitasse platea dictumst. Nullam accumsan arcu vel auctor dapibus. Nulla convallis risus a lacus pellentesque viverra. In nec nunc sed velit placerat mollis.</p>
      </div>

      <div className="flex items-center w-[25%]">
        <img className="rounded-full shadow-lg" src="src\assets\img\jefferson-profile.png" />
      </div>
    </section>
  )
}