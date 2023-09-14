/* eslint-disable react/prop-types */
export default function Overlay({ title = "title", desc = "description", demo, code }) {

  return (
    <div className="overlay">
      <p className ="overlay--text"><b>{title}</b> {desc}</p>
      <div className="overlay--buttons">
        <a href={demo} className="overlay--button" target="_blank" rel="noreferrer" title="Look at a demo">Demo</a>
        {code ? 
          <a href={code} className="overlay--button" target="_blank" rel="noreferrer" title="Look at the code">Code</a>
          : ""}
      </div>
    </div>
  )
}