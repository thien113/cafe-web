import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";
import Contact from "./Contact";
import logo from "../assets/brand/cozy-coffee.svg"
import { useState } from 'react';

export default function Header() {
  const [clicked, setClicked] = useState(false);
  function toggle(){
    setClicked(!clicked);
  }
  return (
    <header className="flex flex-row justify-between font-bold relative ">
      <Image
      src={logo}
      width={180}
      height={500}
      alt="Cozy Coffee"
    />
    <button><FontAwesomeIcon icon={faBars} style={{ fontSize: 25}} onClick={toggle} /></button>
      {clicked && <nav className="flex flex-col font-normal absolute top-20 right-0">
        <a href="#">Menu</a>
        <a href="#">About Us</a>
        <a href="#">Blog</a>
        <a href="#">Reviews</a>
        <Contact />
      </nav>
      }
      
    </header>
  );
}
