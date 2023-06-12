import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/brand/cozy-coffee.svg";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [clicked, setClicked] = useState(false);
  function toggle() {
    setClicked(!clicked);
  }
  return (
    <header className="flex flex-row justify-between items-start font-bold relative px-4">
      <Link href="/">
        <Image src={logo} width={180} height={500} alt="Cozy Coffee" />
      </Link>

      <div className="md:hidden">
        <FontAwesomeIcon
          icon={faBars}
          style={{ fontSize: 25 }}
          onClick={toggle}
        />
      </div>
      {clicked && (
        <nav className="flex flex-col gap-4 font-semibold absolute rounded-sm top-12 right-0 border p-8 bg-bg-light">
          <Link href="/menu">Menu</Link>
          <Link href="/about">About Us</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      )}
      <nav className="hidden md:flex flex-row justify-between gap-8 font-semibold top-12 p-8 ">
        <Link href="/menu">Menu</Link>
        <Link href="/about">About Us</Link>
        <Link href="/blog">Blog</Link>
      </nav>
    </header>
  );
}
