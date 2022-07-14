import Cliente from '../core/Cliente'

import { IconeEdicao, IconeLixo } from './Icones';

interface TabelaProps{
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps){


    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarCabecalho(){
        return (
            <tr>
                <th className='text-left p-4'>Código</th>
                <th className='text-left p-4'>Nome</th>
                <th className='text-left p-4'>Idade</th>
                {exibirAcoes ? <th className='text-left p-4'>Ações</th> : false}
            </tr>
        )
    }

    function renderizarDados(){
        return props.clientes?.map((cliente, i)=>{
            return (
                <tr key={cliente.id}
                className={` 
                ${i % 2 === 0 ? 'bg-gray-300' : 'bg-gray-400' }
                `}
                >

                    <td className='text-left p-4 '>{cliente.id}</td>
                    <td className='text-left p-4 '>{cliente.nome}</td>
                    <td className='text-left p-4 '>{cliente.idade}</td>
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })
    
    }

    function renderizarAcoes(cliente: Cliente){
        return (
            <td className='flex jus'>
                {props.clienteSelecionado ? ( <button onClick={()=> props.clienteSelecionado?.(cliente)} className={` 
                flex justify-center items-center
                text-green-800
                rounded-full p-2 m-1
                hover:bg-white
                `}>
                    {IconeEdicao}
                </button>) : false}
                
                {props.clienteExcluido ? ( <button onClick={()=> props.clienteExcluido?.(cliente)} className={` 
                flex justify-center items-center
                text-red-700
                rounded-full p-2 m-1
                hover:bg-white
                `}>
                    {IconeLixo}
                </button>) : false}

                
            </td>
        )
    }


    return (
        
        <table className={` 
        w-full
        rounded-xl overflow-hidden
        
                
        `}>
            <thead className={` 
            bg-gray-800
            text-gray-100
            
            
            `}>
                {renderizarCabecalho()}
            </thead>
            
            <tbody className={` 
                ;
            `}>
                {renderizarDados()}
            </tbody>

        </table>
    )
}