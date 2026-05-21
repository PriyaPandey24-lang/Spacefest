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

  return (
    <><body style={{ backgroundImage: 'URL("/spacebackground.jpg")',zIndex:"1"}}>
      <nav  className="nav" style={{backgroundColor:"rgba(255,255,255,0.08)", width:"100%",height:"10%" ,display:"flex",alignItems:"center", justifyContent:"center",gap:"10%", marginBottom:"7%", color:"white",borderBottom:"1px solid rgba(126, 207, 255, 0.2)"}}><a className="navlink">HOME</a> <a className="navlink">GALLERY</a> <a className="navlink">CONTACT</a></nav>
       <button className="but"><Link href="/" style={{color:" rgb(41, 81, 109)"}}>Go back to previous page</Link></button>
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
    </>
  )
}