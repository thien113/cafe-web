import Head from "next/head";
import Benefits from "@/components/Benefits";
import Blog from "@/components/Blog";
import Button from "@/components/Button";
import Categories from "@/components/Categories";
import Favorites from "@/components/Favorites";
import Review from "@/components/Review";

export default function Home() {
  return (
    <>
    <Head>
      <title>Cozy Coffee</title>
    </Head>
      <section className="p-4 bg-no-repeat bg-contain bg-right bg-[url('/coffee-cover-1.svg')] h-auto lg:h-screen lg:bg-right-top lg:ml-12 lg:p-32">
        <h1 className="text-4xl md:text-8xl font-bold mt-12 pt-12 ">
          Enjoy Your <br /> Morning Coffee
        </h1>
        <p className="text-md lg:text-4xl my-12 lg:mt-48 md:mb-12 leading-none text-justify w-48 font-medium mb-12 lg:w-full lg:text-2xL">
          Boost your productivity
          <br /> and build your mood with
          <br /> a cup of coffee in the morning.
        </p>

        <div className=" md:w-1/2">
          <Button link="/menu" text="View Menu" />
        </div>
      </section>
      <Categories />
      <Benefits />
      <Favorites />
      <Blog />
      <Review />
    </>
  );
}
