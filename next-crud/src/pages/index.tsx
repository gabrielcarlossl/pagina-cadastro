import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Gabriel', 23, '1'),
    new Cliente('Carlos', 20, '2'),
    new Cliente('Lely', 22, '3'),
    new Cliente('Duck', 7, '4'),
    new Cliente('Snoppy', 5, '5')
  
  ]
  function clienteSelecionado(cliente: Cliente){
    console.log(`Editar ${cliente.nome} `)
  }

  function clienteExcluido(cliente: Cliente){
    console.log(`Excluir ${cliente.nome}`)
  }

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-900 to-blue-500
    text-white
    `}>

      <Layout titulo='Cadastro Simples'>
        <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado}
        clienteExcluido={clienteExcluido}
        ></Tabela>
      </Layout>

    </div>
  )
}
