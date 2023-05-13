export default function Review({ font }) {
  return (
    <section className=" my-14  p-8">
      <h4 className="text-2xl font-bold text-center text-coffee-dark underline underline-offset-8 decoration-coffee-accent">
        <span className={font}>Loved By Many Customers</span>
      </h4>
      <button className="rounded-full text-coffee-accent border-2 border-coffee-accent w-full p-2 font-semibold my-4">
        View All
      </button>
    </section>
  );
}
