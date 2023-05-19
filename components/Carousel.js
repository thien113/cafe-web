import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
export default function Carousel(){
    const renderSlides = () =>
    [1, 2, 3, 4, 5, 6, 7, 8].map(num => (
      <div>
        <h3>Slide {num}</h3>
      </div>
    ));
    const settings = {
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
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
        <div className="App">
          <Slider 
            {...settings}
            >{renderSlides()}</Slider>
        </div>
      );
}