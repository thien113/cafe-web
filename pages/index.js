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
      <section className="bg-no-repeat bg-contain bg-right bg-[url('/coffee-cover-1.svg')] h-auto">
        <h1 className="text-4xl font-bold mt-12 pt-12">
          Enjoy Your Morning Coffee
        </h1>
        <p className="text-md my-6 leading-none text-justify w-48 font-medium mb-12">
          Boost your productivity and build your mood with a cup of coffee in the
          morning.
        </p>
        <Button className="mt-24" text="View Menu" />
      </section>
      <Categories />
      <Benefits  />
      <Favorites />
      <Blog  />
      <Review />
    </>
  );
}
