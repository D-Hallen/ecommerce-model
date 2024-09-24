'use client'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default function LoginPage (){

    function userSubmit(event){
        event.preventDefault()
        
    }
    return(
        <div className="flex min-h-screen flex-col justify-between">
            <Header/>
            <div className="flex-1 flex justify-center">
                <div className="flex flex-col items-center w-96 h-min shadow-lg border rounded-lg mt-10 border-slate-200">
                    <h1 className="text-3xl font-bold text-slate-700 my-4">Entre ou Cadastre-se</h1>
                    <p className="text-slate-600 text-xs mb-5">Use suas credenciais de acesso</p>
                    <form onSubmit={(e) => userSubmit(e)} action="" className="w-full px-8">
                        <p className="text-slate-600 text-xs ml-2">E-Mail</p>
                        <input type="email" name="email" className="w-full border-2 border-slate-300 rounded-lg mb-2" />
                        <p className="text-slate-600 text-xs ml-2">Senha</p>
                        <input type="password" name="password" className="w-full border-2 border-slate-300 rounded-lg mb-2" />
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