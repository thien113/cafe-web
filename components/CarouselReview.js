import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

import person1 from "../assets/brand/person1.svg";
import person2 from "../assets/brand/person2.svg";
import person3 from "../assets/brand/person3.svg";
import person4 from "../assets/brand/person4.svg";
import Rating from "./Rating";

export default function CarouselReview(){
    const data = [
        {
            src: person1,
            stars: 4,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            src: person2,
            stars: 5,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Turpis massa sed elementum tempus egestas sed. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin."
        },
        {
            src: person3,
            stars: 5,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            src: person4,
            stars: 4,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
    ]
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "#603322", borderRadius: "50%" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "#603322", borderRadius: "50%" }}
            onClick={onClick}
          />
        );
      }
    const settings = {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
            }
        ]
      };
      return (
        <Slider 
            {...settings}
            className="p-12 mx-12 lg:p-2 col-start-3 col-span-2"
            >
            {data.map((d, index )=> (
                <div key={index}>
                    <Image src={d.src} className="p-4 rounded-full w-48 m-auto " width={700} height={500} alt={d.src}/>
                    <p className="italic text-center">"{d.text}"</p>
                    <Rating stars={d.stars}/>
                </div>
            ))}
        </Slider>
      );
}