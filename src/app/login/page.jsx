'use client'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { logInUser } from "@/backend/users"
import { useState } from "react"
export default function LoginPage (){
    const [failedAttempt, setFailedAttempt] = useState(false)
    function userSubmit(event){
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const email = data.get('email')
        const password = data.get('password')
        const user = logInUser(email, password)
        if (user) {
            window.location.href = "/"
        } else {
            setFailedAttempt(true)
            
        }
    }
    return(
        <div className="flex min-h-screen flex-col justify-between">
            <Header/>
            <div className="flex-1 flex justify-center">
                <div className="flex flex-col items-center w-96 h-min shadow-lg border rounded-lg mt-10 border-slate-200">
                    <h1 className="text-3xl font-bold text-slate-700 my-4">Entre ou Cadastre-se</h1>
                    <p className="text-slate-600 text-xs mb-5">Use suas credenciais de acesso</p>
                    <form onSubmit={(e) => userSubmit(e)} action="" className="w-full px-8">
                        <p className={"text-xs ml-2 "+(failedAttempt?"text-red-600": "text-slate-600")}>E-Mail</p>
                        <input type="email" name="email" className={"w-full border-2 rounded-lg mb-2 "+(failedAttempt? "border-red-500":"border-slate-300")} />
                        <p className={"text-xs ml-2 "+(failedAttempt?"text-red-600": "text-slate-600")}>Senha</p>
                        <input type="password" name="password" className={"w-full border-2 rounded-lg mb-2 "+(failedAttempt? "border-red-500":"border-slate-300")} />
                        <div className="h-px bg-slate-300"></div>
                        <button inputMode="submit" className="mt-4 w-full bg-sky-600 hover:bg-sky-700 text-white rounded-lg py-3 mb-1 text-lg">Acessar</button>
                    </form>
                    <button className="px-28 text-sky-600 hover:bg-sky-200 rounded-lg py-3 mb-4 text-lg">Criar Conta</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}