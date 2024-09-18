import Item from "./Item"
import CarouselComponent from "./Carousel/Carousel"

export default function Body (){
    const itemTeste = {
        name: "Notebook AMD Ryzen 5 5600G 19 Pol",
        price: 4999.99,
        img: "notebook-1.jpg",
        id: 12345,
        freeShipping: true,
        offer: 0,
    }

    const itemTeste2 = {
        name: "Computador i7-13600K RTX 3060Ti 16GB RAM",
        price: 5620.90,
        img: "pc-2.png",
        id: 98765,
        freeShipping: false,
        offer: 0.15,
    }


    return (
        <main className="top-5 flex-1">
            <CarouselComponent/>
            <div className="w-11/12 mx-auto my-10 grid gap-2 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                <Item item = {itemTeste}/>
                <Item item = {itemTeste2}/>
                <Item item = {itemTeste2}/>
                <Item item = {itemTeste}/>
                <Item item = {itemTeste2}/>
                <Item item = {itemTeste}/>
            </div>
        </main>
    )
}