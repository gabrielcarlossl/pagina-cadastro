import Cliente from "../core/Cliente"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import { useEffect, useState } from "react"
import useTabelaOuForm from "./useTabelaOuForm"


export default function useClientes(){
    
    const repo: ClienteRepositorio = new ColecaoCliente()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])

    const {tabelaVisivel, formularioVisivel, exibirTabela, exibirFormulario} = useTabelaOuForm( )

    useEffect(()=> {
        repo.obterTodos().then(setClientes)
    },[])

    function obterTodos(){
        repo.obterTodos().then(clientes => {
        setClientes(clientes)
        exibirTabela()
        })
    }

    function selecionarCliente(cliente: Cliente){
        setCliente(cliente)
        exibirFormulario()
    }

    async function excluirCliente(cliente: Cliente){
        await repo.excluir(cliente)
        obterTodos()
    }

    async function salvarCliente(cliente: Cliente){
        await repo.salvar(cliente)
        obterTodos()
    }

    function novoCliente(){
        setCliente(Cliente.vazio())
        exibirFormulario()
    }
    
    return{
        tabelaVisivel,
        exibirTabela,
        formularioVisivel,
        exibirFormulario,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        cliente,
        clientes,
        obterTodos
    }
}