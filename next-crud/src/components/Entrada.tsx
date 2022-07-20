interface EntradaProps{
    texto: string
    tipo?: 'text' | 'number'
    valor: any
    somenteLeitura?: boolean
    className? : string
    valorMudou?: (valor: any) => void
}

export default function Entrada(props: EntradaProps){
    return (
        <div className={`${props.className} flex flex-col`}>
            <label className="mb-2">
                {props.texto}
            </label>

            <input 
            
            type={props.tipo ?? 'text'} 
            value={props.valor}
            readOnly={props.somenteLeitura}
            onChange={e => props.valorMudou?.(e.target.value)}
            className={` border border-gray-900 rounded-lg
            focus: outline-none ${props.somenteLeitura ? '' : 'focus:bg-white'}
            px-2 
            bg-gray-200
            `}
            />
        </div>
    )
}