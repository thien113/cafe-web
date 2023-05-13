import Button from "@/components/Button";
import { Playfair_Display } from "next/font/google";
//import Image from "next/image";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });
/*const imageStyle = {
  backgroundSize: "cover",
  backgroundPosition: "center",
};*/
export default function Home() {
  return (
    <>
      <h1 className={playfairDisplay.className}>
        <span className="text-4xl font-bold">Enjoy Your Morning Coffee</span>
      </h1>
      <p className="text-md my-6 leading-none text-justify w-2/3 font-medium">
        Boost your productivity and build your mood with a cup of coffee in the
        morning.
      </p>
      <Button text="View Menu" />
      {/* <Image
        src="/coffee-cover.svg"
        alt="coffee"
        fill={true}
        style={imageStyle}
      />*/}
    </>
  );
}
