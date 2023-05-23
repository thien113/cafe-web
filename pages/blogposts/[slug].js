import { useRouter } from "next/router"
import post1 from "../../assets/carousel/1.svg";
import post2 from "../../assets/carousel/2.svg";
import post3 from "../../assets/carousel/3.svg";
import post4 from "../../assets/carousel/4.svg";
import post5 from "../../assets/carousel/5.svg";
import post6 from "../../assets/carousel/6.svg";
import Image from "next/image";

export default function BlogPost(){
    const router = useRouter();
    const slug = router.query.slug;

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
      const post = blogPosts.filter(blogpost => blogpost.slug === slug);
    return (
        <section className="m-4 p-4 lg:bg-right-top lg:ml-12 lg:p-32">
            {post.map(p =>(
            <>
            <h4 className="my-4 text-4xl font-bold mt-12 pt-12 text-center ">{p.title}</h4>
            <Image src={p.src}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={p.slug}/>
                <p className="my-4 block">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Turpis massa sed elementum tempus egestas sed. Ipsum dolor sit amet consectetur adipiscing 
                    elit duis tristique sollicitudin. Tellus in metus vulputate eu scelerisque. Aenean et tortor at risus. Lorem dolor 
                    sed viverra ipsum nunc aliquet bibendum enim. Libero enim sed faucibus turpis in. Eu nisl nunc mi ipsum faucibus vitae 
                    aliquet nec. Dignissim enim sit amet venenatis urna cursus eget nunc. Nec feugiat in fermentum posuere urna nec tincidunt praesent. 
                    Iaculis at erat pellentesque adipiscing. Sed libero enim sed faucibus. Aliquam id diam maecenas ultricies mi eget. Metus aliquam eleifend mi in. 
                    In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Id aliquet lectus proin nibh. Pulvinar neque laoreet suspendisse interdum 
                    consectetur libero id faucibus. Pellentesque sit amet porttitor eget dolor morbi non arcu. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. 
                    Turpis in eu mi bibendum neque egestas congue.
                </p>
                <br/>
                <p className="my-4 block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>    
            </>
            
        ))}
            
        </section>
    )
}