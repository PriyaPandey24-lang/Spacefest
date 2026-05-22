'use client';
import "./page.css"

import Link from "next/link"


import { useState } from 'react';



export default function teampage() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (<><div className="bg" >
        

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
            <a className="navlink">GALLERY</a>
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
              <a className="navlink">GALLERY</a>
              <a className="navlink">CONTACT</a>
            </div>
          )}
        </nav>
            
            
            <div className="grid">


            <Link href="/STAC" className="box"  >STAC</Link>
            <Link href="/STAC" className="box"  >GUEST <br></br>LECTURES</Link>
            <Link href="/STAC" className="box"  > EVENTS</Link>
            <Link href="/STAC" className="box"  >EXHIBITION</Link>
            <Link href="/STAC" className="box"  >ARENA</Link>
            <Link href="/STAC" className="box"  >ARENA</Link>

        </div>

    </div></>
    )
}