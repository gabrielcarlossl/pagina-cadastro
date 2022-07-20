import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import useClientes from '../hooks/useClientes';

export default function Home() {
  const {
      cliente, 
      clientes,
      selecionarCliente,
      excluirCliente, 
      salvarCliente, 
      novoCliente,
      tabelaVisivel,
      exibirTabela
    } = useClientes()

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-900 to-blue-500
    text-white
    `}>

      <Layout titulo='Cadastro Simples'>
        
        {tabelaVisivel ? (
        
        <div >
          <div className='flex justify-end'>
            <Botao className='mb-4 bg-green-500' onClick={novoCliente}>
              Novo Cliente
            </Botao>
          </div>

          <Tabela clientes={clientes} 
                  clienteSelecionado={selecionarCliente}
                  clienteExcluido={excluirCliente}
          />
        </div>

         ) : (

          <Formulario 
                      cliente={cliente} 
                      clienteMudou={salvarCliente}
                      cancelado={()=> exibirTabela}
          />
         )}
      </Layout>
    </div>
  )
}
