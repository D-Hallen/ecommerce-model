import Image from "next/image"
export default function CarouselItem(props) {
    return (
        <div className={`block p-3 overflow-hidden items-center border-b ${props.bg}
        object-cover h-80`}>
            <Image src={props.src} height={900} width={300} alt={props.alt}
            className="rounded-3xl shadow mr-16 absolute right-0"/>
        </div>
    )
}