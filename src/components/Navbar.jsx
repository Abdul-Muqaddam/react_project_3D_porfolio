import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import {navLinks} from "../constants/constants"
import {logo,menu,close} from "../assets"
import {styles} from "./styles"
const Navbar = () => {
  const[active,setActive]=useState("")
  const[toggle,settoggle]=useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center z-20 py-5 fixed top-0 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl max-mx-auto">
        <Link to={"/"} className="flex items-center gap-2" onClick={()=>{setActive(); window.scrollTo(0,0)}}>
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex"> Abdul-Muqaddam <span className="sm:block hidden"> &nbsp;| Frontend developer</span></p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">{navLinks.map((Link)=>(<li key={Link.id} className={`${active===Link.title?"text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer` } onclick={()=>setActive(Link.title)}><a href={`${Link.id}`}>{Link.title}</a></li>))}</ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle?close:menu} alt="" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={()=>settoggle(!toggle)} />
          <div className={`${!toggle?"hidden":"flex"} p-6 black-gradient absolute top-20 right-0 mx-5 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className="list-none flex justify-end items-start flex-col gap-4">{navLinks.map((Link)=>(<li key={Link.id} className={`${active===Link.title?"text-white":"text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`  } onclick={()=>{settoggle(!toggle); setActive(Link.title)}}><a href={`${Link.id}`}>{Link.title}</a></li>))}</ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar