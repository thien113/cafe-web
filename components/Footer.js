import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/brand/cozy-coffee-light.svg"
import {
  faPhone,
  faEnvelope,
  faClock,
  faMapLocation,
  faArrowCircleUp
} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

export default function Footer() {
  return <footer className="p-12 md:py-18 md:pt-18 relative">
    <div className="absolute top-6 right-6">
      <Link href="#start"><FontAwesomeIcon icon={faArrowCircleUp} style={{ fontSize: 40}} /></Link>
      </div>
    <div className="flex flex-col gap-4 font-light md:flex-row md:justify-around">
      <ul className="flex flex-col ">
        <h2 className="font-semibold">Contact</h2>
        <li><FontAwesomeIcon icon={faPhone} /> +49 12345678</li>
        <li><FontAwesomeIcon icon={faEnvelope} /> coffe@gmail.de</li>
        </ul>
      <ul className="flex flex-col">
        <h2 className="font-semibold">Location</h2>
        <li><FontAwesomeIcon icon={faMapLocation} /> First Avenue 5, 1006 New York</li>
        <li><FontAwesomeIcon icon={faClock} /> 6 am - 6 pm</li>
        </ul>      
      <ul className="flex flex-col pointer">
        <h2 className="font-semibold">Useful Links</h2>
        <Link href="/menu">Menu </Link>
        <Link href="/about">About Us </Link>
        <Link href="/blog">Blog </Link>
        <Link href="#">Reviews </Link>
      </ul>
    </div>
    
    <ul className='flex flex-col md:flex-row gap-2 font-light justify-center items-center md:justify-around'>
      <Image
        src={logo}
        width={150}
        height={100}
        alt="Cozy Coffee"
      />
      <div>
        <Link href="/privacy-policy">Privacy Policy</Link> |
        <Link href="/terms"> Terms of Conditions</Link>
      </div>
      </ul> 
  </footer>;
}
