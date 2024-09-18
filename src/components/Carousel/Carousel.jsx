import Image from "next/image"
import CarouselSlide from "./CarouselSlide"
import Icon from "@mdi/react"
import { mdiChevronRight, mdiChevronLeft } from "@mdi/js"
export default function CarouselComponent (props) {
    const slides= [
        {src: "/imgs/Banner_1.png"},
        {src: "/imgs/Banner_2.png"},
        {src: "/imgs/Banner_3.png"},
        {src: "/imgs/Banner_4.png"},
    ]


    return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
        <div className="relative h-56 overflow-hidden rounded md:h-96 items-center">
            {slides.map((slide, index)=> {
                return (
                    <CarouselSlide key={index} src={slide.src}/>
                )
            })}
        </div>
        <div className="absolute z-10 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse bg-black/20 rounded-full p-2">
            {slides.map ((slide, index)=> (
                <button 
                    key={index}
                    type="button" 
                    className="w-3 h-3 rounded-full" 
                    aria-current={index === 0 ? 'true' : 'false'} 
                    aria-label={`Slide ${index+1}`} 
                    data-carousel-slide-to={index}>
                </button>
            ))}
        </div>
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <Icon path={mdiChevronLeft} size={1} className="w-5 h-5 text-white dark:text-gray-800 font-thin" />
                <span className="sr-only">Anterior</span>
            </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <Icon path={mdiChevronRight} size={1} className="w-5 h-5 text-white dark:text-gray-800 font-thin" />
                <span className="sr-only">Próximo</span>
            </span>
        </button>
    </div>
    )
}



