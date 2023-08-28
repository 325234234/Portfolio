import "./landing.css"
import Overlay from "./Overlay"
import { useRef, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Landing() {
  
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    let mouseDown = false
    let startX, scrollLeft

    function startDragging(e) {
      mouseDown = true
      startX = e.pageX - scrollContainer.offsetLeft
      scrollLeft = scrollContainer.scrollLeft
    }
  
    function drag(e) {
      e.preventDefault();
      if(!mouseDown) { return; }
      const x = e.pageX - scrollContainer.offsetLeft;
      const scroll = x - startX;
      scrollContainer.scrollLeft = scrollLeft - scroll;
    }
  
    function stopDragging() {
      mouseDown = false
    }

    scrollContainer.addEventListener('mousemove', drag)
    scrollContainer.addEventListener('mousedown', startDragging)
    scrollContainer.addEventListener('mouseup', stopDragging)
    scrollContainer.addEventListener('mouseleave', stopDragging)

    return () => {
      scrollContainer.removeEventListener('mousemove', drag)
      scrollContainer.removeEventListener('mousedown', startDragging)
      scrollContainer.removeEventListener('mouseup', stopDragging)
      scrollContainer.removeEventListener('mouseleave', stopDragging)
    }
  }, []) 

  return (
    <>
      <header className="header">
        <p className="header--line1">BAUMGART</p>
        <p className="header--line2">WEB DEVELOPER</p>
        <p className="header--line3">PORTFOLIO</p>
      </header>

      <main className="portfolio--container">
        <div className="portfolio" ref={scrollContainerRef}>
          <div className="brettspielplatz project">
            <Overlay title="Brettspielplatz" desc="Die Unternehmensseite des Brettspielplatzes, Berlins größtem Brettspielcafé."/>
          </div>
          <div className="rezepte project">
            <Overlay />
          </div>
          <div className="yt2mp3 project">
            <Overlay />
          </div>
        </div>
      </main>

      <footer className="about">
        <div className="description">
          <p>German web developer</p>
          <p>based in Berlin.</p>
        </div>
        <div className="links">          
          <a href="https://www.linkedin.com/in/tino-baumgart/" target="_blank" rel="noreferrer" title="Visit my LinkedIn profile">
            <FontAwesomeIcon className="link linkedin" icon={faLinkedin} style={{fontSize: "2rem", color: "#f2f2f2"}} />
          </a>
          <a href="https://github.com/325234234" target="_blank" rel="noreferrer" title="Visit my GitHub profile">
            <FontAwesomeIcon className="link github" icon={faGithub} style={{fontSize: "2rem", color: "#f2f2f2"}} />
          </a>
        </div>
      </footer>
    </>
  )
}