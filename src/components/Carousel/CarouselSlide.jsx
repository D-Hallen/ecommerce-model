import { Children } from "react"
import Image from "next/image"

export default function CarouselSlide (props) {
    let slides =0;

    return (
        <button className="hidden duration-200 ease-linear" data-carousel-item>
                <Image src={props.src} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
                alt="..." width={1920} height={720}/>
        </button>
    )
}