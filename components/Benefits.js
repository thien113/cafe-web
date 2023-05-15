import Badge from "./Badge";

export default function Benefits() {
  return (
    <section className="my-14">
      <h4 className="text-2xl font-bold text-center text-coffee-dark underline underline-offset-8 decoration-coffee-accent my-14">
        <h6>Our Benefits</h6>
      </h4>
      <ul className="flex flex-col text-coffee-dark text-xl font-bold gap-8">
        <li className="flex flex-row gap-4">
          <Badge />
          <span>
            <h6 >Best Location</h6>
            <p className="font-light text-base">
              Our coffeeshop is located in he center of the city.
            </p>
          </span>
        </li>
        <li className="flex flex-row gap-4">
          <Badge />
          <span>
            <h6 >Best Quality</h6>
            <p className="font-light text-base">
              Our products and services have the best quality.
            </p>
          </span>
        </li>
        <li className="flex flex-row gap-4">
          <Badge />
          <span>
            <h6 >Natural Coffee</h6>
            <p className="font-light text-base">
              We use natural coffee beans for making every cup.
            </p>
          </span>
        </li>
        <li className="flex flex-row gap-4">
          <Badge />
          <span>
            <h6>Free Wifi</h6>
            <p className="font-light text-base">24/7 Free Wifi for all</p>
          </span>
        </li>
      </ul>
    </section>
  );
}
