import Image from "next/image";
import Button from "./Button";

export default function Favorites() {
  return (
    <section className="bg-accent-light my-14 favorites p-8">
      <h4 className="text-4xl font-bold text-center text-coffee-dark underline underline-offset-8 decoration-coffee-accent">
        Favorites of the Menu
      </h4>
      <ul className="grid grid-cols-1 md:grid-cols-2 item-center gap-4 mx-4 py-12 md:px-24 md:pt-24">
        <li className="flex flex-row items-center">
          <Image className="rounded-lg" src="/img/espresso.svg" width={100} height={100} alt="espresso"/>
          <h3 className="text-xl font-semibold mx-2">Espresso</h3> 
          <div className="dotted"></div>
          <p className="font-semibold mx-2 leading-2">2.50€</p>
        </li>
        <li className="flex flex-row items-center">
          <Image className="rounded-lg" src="/img/americano.svg" width={100} height={100} alt="americano"/>
          <h3 className="text-xl font-semibold mx-2">Americano</h3> 
          <div className="dotted"></div>
          <p className="font-semibold mx-2 leading-2">3.00€</p>
        </li>
        <li className="flex flex-row items-center">
          <Image className="rounded-lg" src="/img/latte.svg" width={100} height={100} alt="cappucino"/>
          <h3 className="text-xl font-semibold mx-2">Cappucino</h3> 
          <div className="dotted"></div>
          <p className="font-semibold mx-2 leading-2">3.90€</p>
        </li>
        <li className="flex flex-row items-center">
          <Image className="rounded-lg" src="/img/caramel.svg" width={100} height={100} alt="caramel"/>
          <h3 className="text-xl font-semibold mx-2">Caramel Machiato</h3> 
          <div className="dotted"></div>
          <p className="font-semibold mx-2 leading-2">4.90€</p>
        </li>
        <li className="flex flex-row items-center">
          <Image className="rounded-lg" src="/img/ice-coffee.svg" width={100} height={100} alt="ice coffe"/>
          <h3 className="text-xl font-semibold mx-2">Ice Coffee</h3> 
          <div className="dotted"></div>
          <p className="font-semibold mx-2 leading-2">4.50€</p>
        </li>
        <li className="flex flex-row items-center">
          <Image className="rounded-lg" src="/img/vanilla-latte.svg" width={100} height={100} alt="vanilla latte"/>
          <h3 className="text-xl font-semibold mx-2">Vanilla Latte</h3> 
          <div className="dotted"></div>
          <p className="font-semibold mx-2 leading-2">3.50€</p>
        </li>
      </ul>
      <div className="m-auto w-1/2">
          <Button link="/menu" text="View Menu" />
      </div>
    </section>
  );
}
