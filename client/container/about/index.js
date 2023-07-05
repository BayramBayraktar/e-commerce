import React from 'react'
import styleCss from './style.module.css'
import Slider from 'react-slick';

import Page_detail_header from '../../components/page_detail_header';

const About_page = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    };

    return (
        <div className={styleCss.wrapper}>
            <div className={styleCss.about_container}>
                <Page_detail_header title="About" />
                <div className={styleCss.contnet}>
                    <div className={styleCss.cards}>
                        <div className={styleCss.card}>
                            <img src="" alt='' />
                            <div className={styleCss.card_title}>
                                Who we Are ?
                            </div>
                            <div className={styleCss.card_text}>
                                Lorem ipsum dolor sit amet enim. Etiam ullamcorper.
                                Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis,
                                malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna.
                                Vestibulum commodo volutpat a, convallis ac, laoreet enim.
                            </div>
                            <div className={styleCss.card_text}>
                                Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna.
                                Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.
                                Aliquam erat ac ipsum. Integer
                            </div>
                        </div>
                        <div className={styleCss.card}>
                            <img src="" alt='' />
                            <div className={styleCss.card_title}>
                                Who we Are ?
                            </div>
                            <div className={styleCss.card_text}>
                                Lorem ipsum dolor sit amet enim. Etiam ullamcorper.
                                Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis,
                                malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna.
                                Vestibulum commodo volutpat a, convallis ac, laoreet enim.
                            </div>
                            <div className={styleCss.card_text}>
                                Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna.
                                Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.
                                Aliquam erat ac ipsum. Integer
                            </div>
                        </div>
                    </div>
                    <div className={`${styleCss.slider} castom_about_slider`} >
                        <div className={styleCss.slider_title}>You may also like</div>
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
                            <div>
                                <h3>7</h3>
                            </div>
                            <div>
                                <h3>8</h3>
                            </div>
                            <div>
                                <h3>9</h3>
                            </div>
                        </Slider>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default About_page