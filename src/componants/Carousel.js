import React from 'react';
import Slider from "react-slick";

const Carousel = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <Slider {...settings}>
            <div>
                <img
                    className="d-block w-100"
                    src="https://placehold.co/1200x600"
                    alt="First slide"
                />
            </div>
            <div>
                <img
                    className="d-block w-100"
                    src="https://placehold.co/1200x600"
                    alt="Second slide"
                />
            </div>
            <div>
                <img
                    className="d-block w-100"
                    src="https://placehold.co/1200x600"
                    alt="Third slide"
                />
            </div>
        </Slider>
    );
};

export default Carousel;

