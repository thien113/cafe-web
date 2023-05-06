import Contact from "./Contact";

export default function Header() {
  return (
    <header class="font-bold m-12 grid grid-cols-6">
      <p>Logo</p>
      <nav class="flex flex-row gap-4 col-span-3 col-start-3 font-normal">
        <a href="#">Menu</a>
        <a href="#">About Us</a>
        <a href="#">Kinds of Coffee</a>
        <a href="#">Blog</a>
        <a href="#">Reviews</a>
      </nav>
      <Contact />
    </header>
  );
}
