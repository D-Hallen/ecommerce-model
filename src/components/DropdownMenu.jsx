export default function DropdownMenu (props) {
    return (
        <div className={props.open ? "relative flex flex-col items-center" : "hidden"}>
            <div className="flex flex-col gap-2 bg-slate-200">
                <button>Casa</button>
                <button>Eletrônicos</button>
                <button>Esportes</button>
                <button>Livros</button>
            </div>
        </div>
    )
}