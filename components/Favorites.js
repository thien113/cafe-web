import Button from "./Button";

export default function Favorites() {
  return (
    <section className="bg-accent-light my-14 favorites p-8">
      <h4 className="text-4xl font-bold text-center text-coffee-dark underline underline-offset-8 decoration-coffee-accent">
        Favorites
      </h4>
      <Button text="View Menu" />
    </section>
  );
}
