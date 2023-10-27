import Overlay from "./components/Overlay"
import { useRef, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function App() {
  
  // Drag scrolling for portfolio container
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
            <Overlay
              title="The company page"
              desc="for the Brettspielplatz: Berlin's biggest board game café. Designed according to the customer's wants 
              and built as a SPA using React and ReactRouter."
              demo="https://brettspielplatz.netlify.app"
              code="https://github.com/325234234/Brettspielplatz"
            />
          </div>
          <div className="rezepte project">
            <Overlay
              title="A website for my Mum,"
              desc="who loves to cook but doesn't always know what to cook. Uses two APIs to fetch and translate recipes
              from a public database as well as Google Firebase to store my Mum's own recipes."
              demo="https://kochideen.netlify.app/"
              code="https://github.com/325234234/Mama-kocht"
            />
          </div>
          <div className="yt2mp3 project">
            <Overlay
              title="A YouTube to Mp3 converter"
              desc="with minimalistic design and 100% less keyloggers than the average conversion page."
              demo="https://digitalbard.netlify.app/"
              code="https://github.com/325234234/YouTubeToMp3"
            />
          </div>
          <div className="quizzical project">
            <Overlay
              title="A small quiz web app to pass the time."
              desc="Fetches random questions from a quiz API on a user selected topic and difficulty. Infinite fun for the whole family."
              demo="https://quizzicalication.netlify.app/"
              code="https://github.com/325234234/Quiz"
            />
          </div>
        </div>
      </main>

      <footer className="about">
        <div className="description">
          <p>German web developer</p>
          <p>based in Berlin.</p>
        </div>
        <div className="socials">          
          <a href="https://www.linkedin.com/in/tino-baumgart/" className="linkedin" target="_blank" rel="noreferrer" title="Visit my LinkedIn profile">
            <FontAwesomeIcon  icon={faLinkedin} style={{fontSize: "2rem", color: "#f2f2f2"}} />
          </a>
          <a href="mailto:tn.bmgrt@gmail.com" className="mail" title="Write me an email">
            <FontAwesomeIcon icon={faEnvelope} style={{fontSize: "2rem", transform: "scale(.9, 1)", color: "#f2f2f2"}} />
          </a>
          <a href="https://github.com/325234234" className="github" target="_blank" rel="noreferrer" title="Visit my GitHub profile">
            <FontAwesomeIcon  icon={faGithub} style={{fontSize: "2rem", color: "#f2f2f2"}} />
          </a>
        </div>
      </footer>
    </>
  )
}