'use client'
import Image from "next/image"

export default function Item(props) {
    const item = props.item

    const navigate = () => {
        window.location.href = `/product/${item.id}`
    }
    return (
        <button onClick={navigate} className="grid-cols-1 bg-white w-48 shadow-lg py-3 
        px-2 box-content hover:shadow-2xl rounded-xl">
            <Image src={`/imgs/${item.img}`} alt={item.name} width={200} height={200}/>
            <p className="font-bold text-left">{item.name}</p>
            <p className="font-black text-xl text-right text-lime-500 px-2">R$ {item.price}</p>
            {
                item.freeShipping && <p className="text-sm text-right px-3 text-slate-500">
                    Frete grátis
                </p>
            }
        </button>
    )
}