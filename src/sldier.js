import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function Sliderr(props){

    var settings = {
        nav: false,
        dots: true,
        nextArrow: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 3,
        infinite: true,
        speed: 1000,
        pauseOnDotsHover:true,
        pauseOnFocus:false,

        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 427,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    };
    return(
        <div className='slider'>
            Slider
            <div className='in_slider' >
            <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
            </Slider>
            
            </div>              
        </div>
    )
}
export default Sliderr;
