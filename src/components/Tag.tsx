export default function Tag(name: string) {
  return (
    <span className="inline-block bg-gray-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded">
      {name}
    </span>
  )
}