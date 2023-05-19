import Carousel from "./Carousel";
import bagels from "../assets/carousel/bagels.svg";
import bowls from "../assets/carousel/bowl.svg";
import cakes from "../assets/carousel/cakes.svg";
import coffee from "../assets/carousel/coffee.svg";
import cupcakes from "../assets/carousel/cupcakes.svg";
import iceTea from "../assets/carousel/ice-tea.svg";
import pastries from "../assets/carousel/pastries.svg";
import sandwiches from "../assets/carousel/sandwiches.svg";

export default function Categories() {
  const categories = [
    {
      title: "Coffee",
      src: coffee
    },
    {
      title: "Ice Tea",
      src: iceTea
    },
    {
      title: "Pastry",
      src: pastries
    },
    {
      title: "Bagels",
      src: bagels
    },
    {
      title: "Sandwiches",
      src: sandwiches
    },
    {
      title: "Bowls",
      src: bowls
    },
    {
      title: "Cakes",
      src: cakes
    },
    {
      title: "Cupcakes",
      src: cupcakes
    }
  ];
  return (
    <section className="p-8 mt-12 md:mt-24 text-center">
      <h4 className="text-4xl font-bold text-center text-coffee-dark underline underline-offset-8 decoration-coffee-accent my-14">
        From Our Menu
      </h4>
      <Carousel data={categories} dotBool={false} slideBeginToShow={5}/>
    </section>
  );
}
