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

      <button className="md:hidden">
        <FontAwesomeIcon
          icon={faBars}
          style={{ fontSize: 25 }}
          onClick={toggle}
        />
      </button>
      {clicked && (
        <nav className="flex flex-col gap-4 font-semibold absolute rounded-sm top-12 right-0 border p-8 bg-bg-light">
          <a href="/menu">Menu</a>
          <a href="/about">About Us</a>
          <a href="/blog">Blog</a>
          <a href="#">Reviews</a>
        </nav>
      )}
      <nav className="hidden md:flex flex-row justify-between gap-8 font-semibold top-12 p-8 ">
        <a href="/menu">Menu</a>
        <a href="/about">About Us</a>
        <a href="/blog">Blog</a>
        <a href="#">Reviews</a>
      </nav>
    </header>
  );
}
