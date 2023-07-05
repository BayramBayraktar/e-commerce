import React from "react";
import Slider from "react-slick";

import HeaderSlider from './Style.module.css'

export default function Main_slider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow:false,
    };
    return (
        <Slider {...settings}>
            <div className={HeaderSlider.container}>
                <div className={HeaderSlider.title}>
                    <span>Archi Desk</span>
                    <span>Arvi Theme Pen Cup</span>
                    <span>MoMa</span>
                </div>
                <div className={HeaderSlider.text}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed</div>
                <div className={HeaderSlider.button}>WİEV MORE</div>
            </div>
            <div className={HeaderSlider.container}>
                <div className={HeaderSlider.title}>
                    <span>Archi Desk</span>
                    <span>Arvi Theme Pen Cup</span>
                    <span>MoMa</span>
                </div>
                <div className={HeaderSlider.text}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed</div>
                <div className={HeaderSlider.button}>WİEV MORE</div>
            </div>
        </Slider>
    );
}