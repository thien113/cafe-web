import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });
console.log(playfairDisplay);
export default function Home() {
  return (
    <>
      <h1 className={playfairDisplay.className}>Title</h1>
      <p id="start">Hallo</p>
    </>
  );
}
