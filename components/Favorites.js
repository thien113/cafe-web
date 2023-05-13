import Button from "./Button";

export default function Favorites({ font }) {
  return (
    <section className="bg-accent-light my-14 favorites p-8">
      <h4 className="text-2xl font-bold text-center text-coffee-accent underline underline-offset-8 decoration-coffee-accent">
        <span className={font}>Favorites</span>
      </h4>
      <Button text="View Menu" />
    </section>
  );
}
