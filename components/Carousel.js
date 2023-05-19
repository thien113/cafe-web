import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

export default function Carousel({data}){
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
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
            }
        ]
    }
    return (
        <Slider 
            {...settings}
            >
            {data.map((d, index )=> (
                <div key={index}>
                    <Image src={d.src} className="p-4 rounded-lg" alt={d.title}/>
                    <h2 className="text-md lg:text-4xl">{d.title}</h2>
                </div>
            ))}
        </Slider>
      );
}