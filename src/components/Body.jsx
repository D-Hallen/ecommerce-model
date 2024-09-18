import Item from "./Item"
import CarouselComponent from "./Carousel/Carousel"

export default function Body (){
    const itemTeste = {
        name: "Notebook AMD Ryzen 5 5600G 19 Pol",
        price: 4999.99,
        img: "notebook-1.jpg",
        id: 12345,
        freeShipping: true
    }


    return (
        <main className="top-5 flex-1">
            <CarouselComponent/>
            <div className="w-11/12 mx-auto my-10 grid grid-cols-5 gap-2">
                <Item item = {itemTeste}/>
                <Item item = {itemTeste}/>
                <Item item = {itemTeste}/>
                <Item item = {itemTeste}/>
                <Item item = {itemTeste}/>
                <Item item = {itemTeste}/>
            </div>
        </main>
    )
}