'use client'

import Image from "next/image";
import Icon from "@mdi/react";
import {mdiMagnify, mdiAccountCircle, mdiCart, mdiMenu} from "@mdi/js"
import DropdownMenu from "./DropdownMenu";
import { useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)

    return (
        <header className="flex flex-row w-full items-center border-b-2 h-14">
        <div className="flex flex-row items-center pr-3">
          <Image src="/favicon.ico" alt="Vercel Logo" width={32} height={16} className="m-2"/>  
          <a href="/" className="mx-3 font-black text-xl">E-Commerce</a>
          <button onClick={() => setOpenMenu(!openMenu)} className="flex flex-row items-center text-sm hover:bg-slate-200 py-1 px-2 rounded-xl">
            <Icon path={mdiMenu} size={1.5} className="" />
            <span className="font-semibold">Todos os Departamentos</span>
          </button>
          <DropdownMenu open={openMenu} />
        </div>
        <div className="flex flex-row bg-slate-200 flex-1 rounded-xl mx-2">
          <input type="text" placeholder="Search..." className="flex-1 bg-slate-200 border-0 m-1" />
          <Icon path={mdiMagnify} size={2} className="p-2" />
        </div>
        <div className="flex flex-row items-center mx-5">
          
          <button className="hover:text-red-600 font-semibold text-sm flex flex-row items-center">
            <Icon path={mdiAccountCircle} size={1.7} className="px-1" />
            Sign In / Register
          </button>
          <button className="hover:text-red-600 font-semibold text-sm flex flex-row items-center mx-1">
            <Icon path={mdiCart} size={1.7} className="px-1" />
          </button>
        </div>
      </header>
    )
}