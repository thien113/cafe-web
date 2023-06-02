import post1 from "../assets/carousel/1.svg";
import post2 from "../assets/carousel/2.svg";
import post3 from "../assets/carousel/3.svg";
import post4 from "../assets/carousel/4.svg";
import post5 from "../assets/carousel/5.svg";
import post6 from "../assets/carousel/6.svg";
import Carousel from "./Carousel";

export default function Blog() {
  const blogPosts = [
    {
      title: "The Art of Brewing: Exploring Coffee Brewing Methods",
      src: post1,
      slug:"the-art-of-brewing-exploring-coffee-brewing-methods"
    },
    {
      title: "Unveiling the World of Speciality Coffee",
      src: post2,
      slug: "unveiling-the-world-of-speciality-coffee"
    },
    {
      title: "Debunking Myths and Highlighting Benefits",
      src: post3,
      slug: "debunking-myths-and-highlighting-benefits"
    },
    {
      title: "Exploring Global Coffee Cultures",
      src: post4,
      slug: "exploring-global-coffee-cultures"
    },
    {
      title: "Coffee and Sustainability",
      src: post5,
      slug:"coffee-and-sustainability"
    },
    {
      title: "The Perfect Pairings: Coffee and Food",
      src: post6,
      sluc: "the-perfect-pairings-coffee-and-food"
    },
  ];
  return (
    <section className="my-14 p-4 md:p-24">
      <h4 className="text-4xl font-bold text-center text-coffee-dark underline underline-offset-8 decoration-coffee-accent my-14">
        Our Latest Blogposts
      </h4>
      <Carousel data={blogPosts} dotBool={true} slideBeginToShow={3}/>
    </section>
  );
}
