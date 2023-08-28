/* eslint-disable react/prop-types */
export default function Overlay({ title = "title", desc = "description" }) {

  return (
    <div className="overlay">
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  )
}