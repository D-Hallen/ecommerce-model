import Image from "next/image";
import Carousel from "@/components/Carousel/Carousel";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <header className="flex flex-row items-center w-full my-1 border-b-2">
        <span className="mx-3">E-Commerce</span>
        <Image src="/favicon.ico" alt="Vercel Logo" width={32} height={16} className="m-2"/>  
        <input type="text" placeholder="Search" className="mx-5 w-1/2 border border-slate-300 rounded-xl" />
      </header>
      <Carousel imagesUrl={[
        {name: "PC", src: "/imgs/pc-2.png", alt: "PC", bg: "bg-teal-400"},
        {name: "Notebook", src: "/imgs/notebook-1.jpg", alt: "Notebook", bg: "bg-sky-700"},
        {name: "PC", src: "/imgs/pc-3.png", alt: "PC", bg: "bg-teal-400"},
      ]}/>
      <main className="top-5 h-svh">
        <h1>Hello</h1>
      </main>
      <footer className="bg-slate-50 w-full h-5 p-3">
        
      </footer>
    </div>
  );
}
