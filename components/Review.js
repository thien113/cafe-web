import Image from "next/image";
import customer from "../assets/brand/customer.svg";
import splash from "../assets/brand/splash.svg";
import CarouselReview from "./CarouselReview";

export default function Review() {
  return (
    <section className="mt-14 pt-8 lg:grid lg:grid-cols-6 lg:grid-rows-3 justify-center items-center">
       <h4 className="col-start-3 col-span-2 text-4xl font-bold text-center flex-1 text-coffee-dark underline underline-offset-8 decoration-coffee-accent">
          Loved By Many Customers
        </h4>
      <Image
        src={customer}
        sizes="(max-width: 200px) 10vw, (max-width: 200px) 20vw, 33vw"
        alt="customer"
        className="hidden lg:block  -mr-48 col-start-1 col-span-2 row-start-1 row-span-3"
      />
      <CarouselReview />
      <Image
        src={splash}
        sizes="(max-width: 500px) 100vw, (max-width: 600px) 50vw, 33vw"
        alt="splash"
        className="hidden lg:block ml-48 col-start-5 -rotate-45"
      />
    </section>
  );
}
