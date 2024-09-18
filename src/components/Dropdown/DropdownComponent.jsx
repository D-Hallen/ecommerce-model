'use client '

import { Dropdown } from "flowbite"
import Icon from "@mdi/react"

import DropdownItem from "./DropdownItem"
export default function DropdownComponent (props) {
    return (
        <>
            <button id={props.id+'Button'} data-dropdown-toggle={props.id} 
                className={props.subDrop ? "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left" :
                "flex flex-row items-center text-sm hover:bg-slate-200 py-1 px-2 rounded-xl"} data data-dropdown-placement={props.placement ?? "bottom"}>
                {props.icon && <Icon path={props.icon} size={1.5} className="" />}
                <span className={props.subDrop ? "" : "font-semibold text-gray-700"}>{props.text}</span>
            </button>
    
            <div id={props.id} className="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby={props.id+'Button'}>
                    {props.children}
                </ul>
            </div>
        </>        
    )
}