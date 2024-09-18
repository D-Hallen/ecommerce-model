import { Dropdown } from "flowbite"
import Icon from "@mdi/react"
import { mdiMenu } from "@mdi/js"
import DropdownItem from "./DropdownItem"
import DropdownComponent from './DropdownComponent'
export default function DropdownMenu (props) {
    return (
        <div className="">
            <DropdownComponent icon={mdiMenu} text="Todos os Departamentos" id="dropdown">
                <DropdownItem name="Dashboard" href="#" />
                <DropdownItem name="Settings" href="#" />
                <DropdownItem name="Earnings" href="#" />
                <li>
                    <DropdownComponent text="Teste" id="dropdownSub" subDrop placement="right-start">
                        <DropdownItem name="Teste1" href="#" />
                        <DropdownItem name="Teste2" href="#" />
                        <DropdownItem name="Teste3" href="#" />
                    </DropdownComponent>
                </li>
                <DropdownItem name="Sign out" href="#" />
            </DropdownComponent>
        </div>        
    )
}