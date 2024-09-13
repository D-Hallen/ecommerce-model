"use client"

import CarouselItem from "./Carouseltem"
import CarouselButton from "./CarouselButton"
import { useState } from "react"

export default function Carousel(props) {
    const [slideIndex, setSlideIndex] = useState(0)
    return (
        <div className="w-full h-full relative">
            <CarouselButton name="Prev" pos="left" setSlideIndex={setSlideIndex} size={props.imagesUrl.length}/>
            <div className="w-full h-full overflow-hidden">
                {props.imagesUrl.map((image, index) => {
                    return (
                        // <CarouselItem key={index} src={image.src} alt={image.name} bg={image.bg}/>
                        <img key={index} src={image.src} alt={image.name} className="w-full h-full"/>
                    )
                })}
            </div>
            <CarouselButton name="Prox" pos="right" setSlideIndex={setSlideIndex} size={props.imagesUrl.length}/>
        </div>
    )
}