import"./page.css"

import Link from "next/link"





export default  function teampage() {
    return (<><div className="bg" ><nav  className="nav" style={{backgroundColor:"rgba(255,255,255,0.08)", width:"100%",height:"10%" ,display:"flex",alignItems:"center", justifyContent:"center",gap:"10%", marginBottom:"7%", color:"white",borderBottom:"1px solid rgba(126, 207, 255, 0.2)"}}><a className="navlink">HOME</a> <a className="navlink">GALLERY</a> <a className="navlink">CONTACT</a></nav>
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