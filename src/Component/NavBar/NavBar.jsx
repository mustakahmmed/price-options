
import { useState } from "react";
import Links from "../Links/Links";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";


const NavBar = () => {
  const [open,setOpen] = useState(false)
    const routes = [
        { id: 1, name: "Home", path: "/home" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Blog", path: "/blog" }
      ];
      
    return (
        <div className="text-xl font-bold mb-7">
       <div className="text-3xl md:hidden" onClick={()=>setOpen(!open)}>
        {
        open === true ? <IoCloseSharp></IoCloseSharp>: <HiMenuAlt1></HiMenuAlt1>
        }
       </div>

            
            <ul className={`md:flex absolute md:static pl-7 duration-300 ${open? 'top-8':'-top-60'}`}>
            {
                routes.map(route => <Links key={route.id} route={route}></Links>)
            }
            </ul>
        </div>
    );
};

export default NavBar;