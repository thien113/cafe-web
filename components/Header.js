import Image from 'next/image';
import Contact from "./Contact";
import logo from "../assets/brand/cozy-coffee.svg"

export default function Header() {
  return (
    <header className="font-bold grid grid-cols-6">
      <Image
      src={logo}
      width={300}
      height={300}
      alt="Cozy Coffee"
    />
      <nav className="flex flex-col gap-4 col-span-3 col-start-3 font-normal">
        <a href="#">Menu</a>
        <a href="#">About Us</a>
        <a href="#">Blog</a>
        <a href="#">Reviews</a>
      </nav>
      <Contact />
    </header>
  );
}
