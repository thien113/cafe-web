import Image from "next/image";
import customer from "../assets/brand/customer.svg";
import splash from "../assets/brand/splash.svg";

export default function Review() {
  return (
    <section className=" my-14 p-">
      <h4 className="text-4xl font-bold text-center text-coffee-dark underline underline-offset-8 decoration-coffee-accent">
        Loved By Many Customers
      </h4>
      <Image src={customer} sizes="(max-width: 200px) 10vw, (max-width: 200px) 20vw, 33vw" alt="customer"/>
      <button className="rounded-full text-coffee-accent border-2 border-coffee-accent w-full p-2 font-semibold my-4">
        View All
      </button>
      <Image src={splash} sizes="(max-width: 500px) 100vw, (max-width: 600px) 50vw, 33vw" alt="splash"/>
    </section>
  );
}
