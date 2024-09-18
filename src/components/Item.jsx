'use client'
import Image from "next/image"

export default function Item(props) {
    const item = props.item

    const navigate = () => {
        window.location.href = `/product/${item.id}`
    }
    return (
        <button onClick={navigate} className="grid-cols-1 bg-white w-48 shadow-lg py-3 
        px-2 box-content hover:shadow-2xl rounded-xl hover:text-blue-500">
            <Image src={`/imgs/${item.img}`} alt={item.name} width={200} height={200}/>
            <p className="text-left">{item.name}</p>
            {
                item.offer !== 0 && (
                    <div className="">
                        <p className="text-sm text-right px-3 text-lime-700">
                            {(item.offer * 100).toFixed(0)}% off
                        </p>
                        <p className="text-sm text-right px-3 text-slate-500 line-through">
                            R${item.price.toFixed(2)}
                        </p>
                    </div>
                )
            }
            <p className="font-black text-xl text-right text-lime-500 px-2">R$ {(item.price * (1 - item.offer)).toFixed(2)}</p>
            {
                item.freeShipping && <p className="text-sm text-right px-3 text-slate-500">
                    Frete grátis
                </p>
            }
        </button>
    )
}