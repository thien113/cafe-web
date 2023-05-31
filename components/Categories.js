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
      src: coffee,
      slug: "menu"
    },
    {
      title: "Ice Tea",
      src: iceTea,
      slug: "menu"
    },
    {
      title: "Pastry",
      src: pastries,
      slug: "menu"
    },
    {
      title: "Bagels",
      src: bagels,
      slug: "menu"
    },
    {
      title: "Sandwiches",
      src: sandwiches,
      slug: "menu"
    },
    {
      title: "Bowls",
      src: bowls,
      slug: "menu"
    },
    {
      title: "Cakes",
      src: cakes,
      slug: "menu"
    },
    {
      title: "Cupcakes",
      src: cupcakes,
      slug: "menu"
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
