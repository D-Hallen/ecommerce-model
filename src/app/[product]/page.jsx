"use client"

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import ItemDetailsModal from "./itemDetailsModal";
import { useState } from "react";
import { getItem } from "@/backend/item";

export default function ItemPage({ params }) {
  const item = getItem(params.product)
  const [currentImage , setCurrentImage] = useState('/imgs/' + item.img[0])

  function changeCurrentImage(index){
    setCurrentImage('/imgs/' + item.img[index])
  }

  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header />
      <div className="mx-6 flex flex-row items-start mt-10">
        
        <div className="flex flex-col border-2 rounded-xl mr-5">
          <Image src={currentImage} alt="Notebook Gamer" width={600} height={480} className="" />
          <div className="flex flex-row justify-center h-32">
            {
              item.img.map((img, index) => (
                <button onMouseOver={() => changeCurrentImage(index)} key={index} className="border border-slate-400 hover:border-blue-600 hover:border-2 rounded-xl m-2">
                  <Image src={'/imgs/' + img} alt="..." width={100} height={100} className="p-1"/>
                </button>
              ))
            }
          </div>
        </div>

        <ItemDetailsModal item={item}/>
      </div>
      <div className=" m-10 border-2 border-slate-300 rounded-xl">
        <p className="text-xl mb-2 border-b-2 border-slate-300 m-3 px-2">
          Descrição do Produto
        </p>
        <pre className="m-3 px-2">
          {item.description}
        </pre>
      </div>
      <Footer />
    </div>
  );
}
