import React, { useState, useEffect } from 'react';
import bulmaCarousel from 'bulma-carousel';
import CarouselChild from './CarouselElem';
// import { isDomElem } from '../scenes/Utils/utils';
function Carousel({
    className = '',
    style = {},
    children,
    id = 'topic-carousel',
    slides: { slidesToScroll = 1, slidesToShow = 2 } = {},
    ...props
}) {
    // const carouselExists = isDomElem(carouselId);

    useEffect(()=>{

        bulmaCarousel.attach('.carousel', {
            slidesToScroll,
            slidesToShow,
        });
    }, bulmaCarousel)
    // carouselExists &&
    // console.log(carouselExists, children);
    return (
        <>
            {children && (
                <div
                    className={`carousel ${className}`}
                    id={id}
                    style={{ ...style }}
                    {...props}
                >
                    
                    {children.map((child, i) => (
                        <CarouselChild className={`item-${i+1}`}>{child}</CarouselChild>
                    ))}
                    {/* {bulmaCarousel.attach('#' + id, {
                        slidesToScroll,
                        slidesToShow,
                    })} */}
                </div>
            )}
        </>
    );
}

export default Carousel;
