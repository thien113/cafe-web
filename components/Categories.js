import Carousel from "./Carousel";

export default function Categories() {
  return (
    <section className="p-8 mt-12 md:mt-24 text-center">
      <h4 className="text-4xl font-bold text-center text-coffee-dark underline underline-offset-8 decoration-coffee-accent my-14">
        From Our Menu
      </h4>
      <Carousel/>
    </section>
  );
}
