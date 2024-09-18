import Icon from "@mdi/react"
import { mdiGithub, mdiLinkedin } from "@mdi/js"

export default function Footer() {
    return (
        <footer className="flex flex-row  bg-slate-300 w-full items-center px-2 py-2">
            <div className="flex justify-between">
                <a href="https://www.linkedin.com/in/daniel-hallen" className="text-slate-700 hover:text-black hover:bg-white rounded-full p-1">
                    <Icon path={mdiLinkedin} size={1} />
                </a>
                <a href="https://github.com/D-Hallen" className="text-slate-700 hover:text-black  hover:bg-white rounded-full p-1">
                    <Icon path={mdiGithub} size={1} />
                </a>
            </div>
            <div className="mx-10 flex flex-1 justify-center text-slate-700">
                <a href="" className="mx-3">Quem Somos</a>
                <a href="" className="mx-3">FAQ</a>
                <a href="" className="mx-3">Política de Privacidade</a>
                <a href="" className="mx-3">Termos de Serviço</a>
            </div>
            <p className="text-sm text-slate-500 justify-end">© 2024 Daniel Hallen.</p>
        </footer>
    )
}