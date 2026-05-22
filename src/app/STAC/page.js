"use client"
import { useState } from "react"
import "./page.css"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Link from "next/link"

export default function Page() {
  const images = [
    "/event.jpg",
    "/nt.jpg",
    "/img.jpg",
    "/eve.jpg",
    "/event.jpg",
    "/nt.jpg",
    "/img.jpg",
    "/event.jpg",
    "/img.jpg",
  ]
  const [index, setIndex] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    
    <body style={{ backgroundImage: 'URL("/spacebackground.jpg")',zIndex:"1"}}>
    

<nav className="nav" style={{
          backgroundColor: "rgba(255,255,255,0.08)",marginLeft:"3%",
          width: "90%", height: "10%", display: "flex",
          alignItems: "center", justifyContent: "center",gap:"10%",
          padding: "0 20px", marginBottom: "7%", color: "white",
          borderBottom: "1px solid rgba(126, 207, 255, 0.2)",
          position: "relative"
        }}>
          {/* Desktop links */}
          <div className="navlinks-desktop">
            <a className="navlink">HOME</a>
            <a  href="/"className="navlink">GALLERY</a>
            <a className="navlink">CONTACT</a>
          </div>

          {/* Hamburger button */}
          <button className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Mobile dropdown */}
          {menuOpen && (
            <div className="mobile-menu">
              <a className="navlink">HOME</a>
              <a href="/" className="navlink">GALLERY</a>
              <a className="navlink">CONTACT</a>
            </div>
          )}
        </nav>
            
      <div className="gallery">
        {images.map((img, i) => (
          <img key={i} src={img} onClick={() => setIndex(i)} />
        ))}
      </div>

      {index !== null && (
        <div className="popup" onClick={() => setIndex(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>

            {/* ← Prev button */}
            <button
              className="close"
              onClick={() => setIndex((index - 1 + images.length) % images.length)}
            >
              <ChevronLeft />
            </button>

            {/* Image */}
            <img src={images[index]} className="popup-image" />

            {/* Next → button */}
            <button
              className="next"
              onClick={() => setIndex((index + 1) % images.length)}
            >
              <ChevronRight />
            </button>

            {/* ✕ Close button */}
            <button className="close-btn" onClick={() => setIndex(null)}>
              <X />
            </button>

          </div>
        </div>
      )}
      </body>
    
  )
}