import Benefits from "@/components/Benefits";
import Blog from "@/components/Blog";
import Button from "@/components/Button";
import Categories from "@/components/Categories";
import Favorites from "@/components/Favorites";
import Review from "@/components/Review";
import Image from "next/image";

const imageStyle = {
  backgroundSize: "cover",
  backgroundPosition: "center",
};
export default function Home() {
  return (
    <>
      <section className="my-4 bg-no-repeat bg-contain bg-right bg-[url('/coffee-cover-1.svg')] h-auto md:h-screen md:bg-right-top md:ml-12 lg:p-32">
        <h1 className="text-4xl md:text-8xl font-bold mt-12 pt-12 ">
          Enjoy Your <br/> Morning Coffee
        </h1>
        <p className="text-md md:text-4xl my-12 lg:mt-48 md:mb-12 leading-none text-justify w-48 font-medium mb-12 md:w-full md:text-2xL">
          Boost your productivity<br/> and build your mood with<br/> a cup of coffee in the
          morning.
        </p>
        
        <div className=" md:w-1/2">
          <Button  text="View Menu" /> 
        </div>
      </section>
      <Categories />
      <Benefits  />
      <Favorites />
      <Blog  />
      <Review />
    </>
  );
}
