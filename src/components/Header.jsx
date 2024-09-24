'use client'
import Image from "next/image";
import Icon from "@mdi/react";
import { mdiMagnify, mdiAccountCircle, mdiCart } from "@mdi/js"
import DropdownMenu from "./Dropdown/DropdownMenu";


export default function Header() {
  const navigateToSignIn = () => window.location.href = `/login`
  return (
    <header className="flex flex-row w-full items-center border-b-2 h-14">
      <div className="flex flex-row items-center pr-3">
        <a href="/" className="mx-3 font-black lg:text-xl sm:text-sm flex flex-row items-center ">
          <Image src="/favicon.ico" alt="Vercel Logo" width={32} height={16} className="m-2" />
          E-Commerce
        </a>
        <DropdownMenu className="z-10" />
      </div>
      <div className="flex flex-row bg-slate-200 flex-1 rounded-xl mx-2">
        <input type="text" placeholder="Search..." className="flex-1 bg-slate-200 border-0 m-1" />
        <Icon path={mdiMagnify} size={2} className="p-2" />
      </div>
      <div className="flex flex-row items-center mx-5">
        <button onClick={navigateToSignIn} className="text-slate-700 font-semibold text-sm flex flex-row items-center ">
          <Icon path={mdiAccountCircle} size={1.7} className="px-1" />
          <span className="">
            Sign In / Register
          </span>
        </button>

        <button className="font-semibold text-sm flex flex-row items-center ml-1">
          <Icon path={mdiCart} size={1.7} className="px-1 text-slate-700" />
          <span className="absolute right-3 top-1 text-white text-xs bg-red-600 rounded-full py-1 px-2">1</span>
        </button>
      </div>
      
    </header>
  )
}