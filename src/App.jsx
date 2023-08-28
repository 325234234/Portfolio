import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "./components/Landing/Landing"
import Brettspielplatz from "./components/Brettspielplatz/Brettspielplatz"
import Rezepte from "./components/Rezepte/Rezepte"
import Yt2mp3 from "./components/Yt2mp3/Yt2mp3"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/brettspielplatz" element={<Brettspielplatz />} />
          <Route path="/rezepte" element={<Rezepte />} />
          <Route path="/yt2mp3" element={<Yt2mp3 />} />
      </Routes>
    </BrowserRouter>
  )
}