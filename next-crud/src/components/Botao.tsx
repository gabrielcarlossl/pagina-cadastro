interface BotaoProps{
    cor?: 'green' | 'blue' | 'gray'
    children: any
    className?: string
    onClick?: ()=> void
}

export default function Botao(props: BotaoProps){

    const cor = props.cor ?? 'gray'

    return (
        <button onClick={props.onClick} className={` 
        bg-${cor}-600
        text-white
        px-4 py-2
        rounded-md
        ${props.className}
        `}>
            {props.children}
        </button>
    )
}