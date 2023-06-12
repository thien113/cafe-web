import Image from "next/image";

import post1 from "../assets/carousel/1.svg";
import post2 from "../assets/carousel/2.svg";
import post3 from "../assets/carousel/3.svg";
import post4 from "../assets/carousel/4.svg";
import post5 from "../assets/carousel/5.svg";
import post6 from "../assets/carousel/6.svg";
import Link from "next/link";

export default function Blog(){
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
          slug: "the-perfect-pairings-coffee-and-food"
        },
      ];
    return(
        <section className="my-4 lg:bg-right-top lg:ml-12 lg:p-32">
            <h1 className="text-4xl font-bold mt-12 pt-12 ">Blogposts</h1>
            <div className="flex flex-row flex-wrap gap-6">
            {blogPosts.map(p => (
               <div key={p.slug} className="my-4">
                <Image src={p.src} className="rounded-lg" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={p.title}/>
                <Link href={`/blogposts/${p.slug}`}><p className="font-semibold my-12 hover:underline hover:decoration-solid">{p.title}</p></Link>
               </div>
            ))} 
            </div>
            
        </section>
    )
}