import Icon from "@mdi/react"
import { mdiCartPlus, mdiTruck, mdiHeart, mdiHeartOutline } from "@mdi/js"
import Rating from "@/components/Rating"
import { useState } from "react"

export default function ItemDetailsModal(props) {
    const item = props.item
    
  const [favorite, setFavorite] = useState(false)   
  const [frete, setFrete] = useState(false)

  function confereFrete(event){
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const cep = data.get('cep')

    if(cep.length === 8){
      setFrete(true)
    }
  }
    return (
        <div className="border-2 p-4 rounded-lg border-slate-300 h-full w-[40rem]">
            <h1 className="text-3xl font-bold border-b-2 p-2">{item.name}</h1>
            <Rating rating={item.rating} className="my-2" />
            {
                item.offer !== 0 && (
                    <div className="">
                        <span className="text-sm text-slate-500 line-through">
                            R${item.price.toFixed(2)}
                        </span>
                        <span className="text-sm ml-2">
                            {(item.offer * 100).toFixed(0)}% OFF
                        </span>
                    </div>
                )
            }
            <p className="text-3xl mb-2">R$ {(item.price * (1 - item.offer)).toFixed(2)}</p>
            <p className="text-xs">Em até 10x de R$ {((item.price * (1 - item.offer)) / 10).toFixed(2)} sem juros</p>
            <div className="h-px bg-slate-300 my-5"></div>

            <div className="mt-3">
                <span>Quantidade:</span>
                <input type="number" min={1} max={item.qtd} defaultValue={1} className="ml-2 w-20 rounded-xl text-sm" />
            </div>

            <p className="w-full text-xs mt-5 mb-1">Calcular o frete</p>
            <form onSubmit={confereFrete} className="flex flex-row items-center">
                <span className="mr-1 text-sm  text-sky-700">CEP</span>
                <input type="text" name="cep" placeholder="_____-___" maxLength={8} className="rounded-xl text-sm" />
                <button type="submit" className="bg-sky-600 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded my-2 ml-2">
                    Calcular
                </button>
            </form>
            <div>
                {frete && (
                    <div>
                        <div className="flex flex-row text-xs font-semibold">
                            <Icon path={mdiTruck} size={0.7} className="text-blue-800 mx-1" />
                            <span className="text-blue-800 mb-2">Rua da Cidade, 123 - Cidade - SP</span>
                        </div>
                        <table className="w-full">
                            <tbody>
                                <tr className="border-b border-slate-400 py-2">
                                    <td className="text-sm text-slate-600">Retirar na loja</td>
                                    <td className="text-sm text-slate-600 font-medium">Disponível agora</td>
                                    <td className="text-sm text-emerald-600 font-bold">Grátis</td>
                                </tr>
                                <tr className="border-b border-slate-400 py-2">
                                    <td className="text-sm text-slate-600">Envio Padrão</td>
                                    <td className="text-sm text-slate-600 font-medium">Chega em 5 dias</td>
                                    <td className="text-sm text-slate-600 font-bold">R$ 17,80</td>
                                </tr>
                                <tr className="border-b border-slate-400 py-2">
                                    <td className="text-sm text-slate-600">Envio Express</td>
                                    <td className="text-sm text-slate-600 font-medium">Chega em 2 dias</td>
                                    <td className="text-sm text-slate-600 font-bold">R$ 23,50</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            <div className="h-px bg-slate-300 my-5"></div>

            <div className="flex flex-row">
                <button className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded my-2 flex flex-row">
                    <Icon className="mr-2" path={mdiCartPlus} size={1} /> Adicionar ao carrinho
                </button>
                <button onClick={() => setFavorite(!favorite)} className="border-2 border-slate-300 hover:bg-slate-200 text-slate-400 hover:text-red-500 font-bold rounded-full m-2 px-2">
                    {
                        favorite ? <Icon className="text-red-500" path={mdiHeart} size={1} /> : <Icon className="" path={mdiHeartOutline} size={1} />
                    }
                </button>
            </div>

        </div>
    )
}