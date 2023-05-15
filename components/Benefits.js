import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapPin,
  faCertificate,
  faMugHot,
  faWifi,
  faChampagneGlasses,
  faSeedling
} from "@fortawesome/free-solid-svg-icons";
import Badge from "./Badge";
import shop from "../assets/img/coffee-shop.svg"



export default function Benefits() {
  return (
    <section className="my-14 md:p-24"> 
      <h4 className="text-4xl font-bold text-center text-coffee-dark underline underline-offset-8 decoration-coffee-accent my-14">
        <h6>Our Benefits</h6>
      </h4>
      <div className="flex flex-row justify-between">
        <div className="bg-img relative hidden xl:inline-block">
          <Image className="relative align-bottom z-10" src={shop} width={400}
                height={500}
                alt="Cozy Coffee"/>
        </div> 
        <ul className="grid md:grid-cols-2 grid-cols text-coffee-dark text-xl font-bold gap-8 md:gap-0 md:p-12">
          <li className="flex flex-row gap-4">
            <Badge icon={<FontAwesomeIcon icon={faMapPin} style={{color: "#ffffff",}} />} />
            <span>
              <h6 >Best Location</h6>
              <p className="font-light text-base">
                Our coffeeshop is located in he center of the city.
              </p>
            </span>
          </li>
          <li className="flex flex-row gap-4">
            <Badge icon={<FontAwesomeIcon icon={faCertificate} style={{color: "#ffffff",}} />}/>
            <span>
              <h6 >Best Quality</h6>
              <p className="font-light text-base">
                Our products and services have the best quality.
              </p>
            </span>
          </li>
          <li className="flex flex-row gap-4">
            <Badge icon={<FontAwesomeIcon icon={faMugHot} style={{color: "#ffffff",}} />} />
            <span>
              <h6 >Natural Coffee</h6>
              <p className="font-light text-base">
                We use natural coffee beans for making every cup.
              </p>
            </span>
          </li>
          <li className="flex flex-row gap-4">
            <Badge icon={<FontAwesomeIcon icon={faWifi} style={{color: "#ffffff",}} />} />
            <span>
              <h6>Free Wifi</h6>
              <p className="font-light text-base">24/7 Free Wifi for all</p>
            </span>
          </li>
          <li className="flex flex-row gap-4">
            <Badge icon={<FontAwesomeIcon icon={faChampagneGlasses} style={{color: "#ffffff",}} />} />
            <span>
              <h6>Event Space</h6>
              <p className="font-light text-base">Perfect atmosephere for your events.</p>
            </span>
          </li>
          <li className="flex flex-row gap-4">
            <Badge icon={<FontAwesomeIcon icon={faSeedling} style={{color: "#ffffff",}} />} />
            <span>
              <h6>Vegan Options</h6>
              <p className="font-light text-base">Many options for Vegan-lover</p>
            </span>
          </li>
        </ul>
      </div>
      
    </section>
  );
}
