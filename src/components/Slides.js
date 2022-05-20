import React, { Component } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

export default class Slides extends Component {
    render() {
        return (
            <Swiper
                modules={[Autoplay, Navigation]}
                autoplay
                navigation
                spaceBetween={50}
                slidesPerView={1}
            >
                {this.props.itemes.map((el, i) => {
                    return (<SwiperSlide key={i}><img src={el.img} alt="" /></SwiperSlide>)
                })}
            </Swiper>
        )
    }
}