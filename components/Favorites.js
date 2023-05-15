import Image from "next/image";
import Button from "./Button";

export default function Favorites() {
  return (
    <section className="bg-accent-light my-14 favorites p-8">
      <h4 className="text-4xl font-bold text-center text-coffee-dark underline underline-offset-8 decoration-coffee-accent">
        Favorites
      </h4>
      <ul className="flex flex-col m-4">
        <li className="flex flex-row">
          <Image className="rounded-lg" src="/img/espresso.svg" width={100} height={100} alt="espresso"/>
          <h3 className="text-2xl font-semibold mx-2">Espresso</h3> 
          <div className="dotted"></div>
          <p className="font-semibold">2.50€ </p>
        </li>
      </ul>
      <Button text="View Menu" />
    </section>
  );
}
