import Image from "next/image";
import about from "../assets/brand/about-us.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faClock,
  faMapLocation
} from "@fortawesome/free-solid-svg-icons";

export default function About(){
    return <section className="my-4 lg:bg-right-top lg:ml-12 lg:p-32">
    <h1 className="text-4xl font-bold mt-12 pt-12 text-center ">About Us</h1>
    <div className="my-4 flex flex-col lg:flex-row justify-center items-center">
        <Image src={about}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="about-us"/>
          <div className="m-4 lg:m-12 block">
            <i>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure<br/>
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </i>
          <ul className="m-4 lg:m-12 flex flex-col ">
            <p className="font-semibold">Contact</p>
            <li><FontAwesomeIcon icon={faPhone} /> +49 12345678</li>
            <li><FontAwesomeIcon icon={faEnvelope} /> coffe@gmail.de</li>
        </ul>
        <ul className="m-4 lg:m-12 flex flex-col">
            <p className="font-semibold">Location</p>
            <li><FontAwesomeIcon icon={faMapLocation} /> First Avenue 5, 1006 New York</li>
            <li><FontAwesomeIcon icon={faClock} /> 6 am - 6 pm</li>
        </ul> 
          </div>
    </div>
    </section>
}