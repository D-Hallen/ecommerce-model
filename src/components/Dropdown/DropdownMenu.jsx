import { Dropdown } from "flowbite"
import { mdiMenu } from "@mdi/js"
import DropdownItem from "./DropdownItem"
import DropdownComponent from './DropdownComponent'
export default function DropdownMenu () {
    return (
        <div className="">
            <DropdownComponent icon={mdiMenu} text="Todos os Departamentos" id="dropdown">
                <DropdownItem name="Dashboard" href="#" />
                <DropdownItem name="Settings" href="#" />
                <DropdownItem name="Earnings" href="#" />
                <DropdownItem name="Sign out" href="#" />
            </DropdownComponent> 
        </div>        
    )
}