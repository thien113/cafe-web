import Image from "next/image";
import customer from "../assets/brand/customer.svg";
import splash from "../assets/brand/splash.svg";

export default function Review() {
  return (
    <section className=" mt-14 pt-8 flex flex-row justify-center items-center">
      <Image
        src={customer}
        sizes="(max-width: 200px) 10vw, (max-width: 200px) 20vw, 33vw"
        alt="customer"
        className="-mr-48"
      />
      <div className="grow-2 w-full">
        <h4 className="text-4xl font-bold text-center flex-1 text-coffee-dark underline underline-offset-8 decoration-coffee-accent">
          Loved By Many Customers
        </h4>
        <p className="p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          officiis laboriosam quasi unde blanditiis aut nihil expedita quos,
          veritatis, eaque, culpa dicta nostrum molestias! Dolore eius ipsum
          similique consequatur ullam.
        </p>
      </div>

      <Image
        src={splash}
        sizes="(max-width: 500px) 100vw, (max-width: 600px) 50vw, 33vw"
        alt="splash"
        className="ml-48"
      />
    </section>
  );
}
