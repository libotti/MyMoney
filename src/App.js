import React from 'react'
import Rest from './rest'

const url2 = 'http://httpbin.org/ip'
const baseURL = 'https://libotti-2d781.firebaseio.com/'

const { useGet, usePost, useDelete } = Rest(baseURL)


function App() {
//  const data = useGet('movimentacoes/2019-08')
//  const data2 = useGet(url2)
//  const [postData, post] = usePost('movimentacoes/2019-08')
//  const [deleteData, remove] =  useDelete()

  const data = useGet('meses')

  const saveNew = ()  => {
    //post({ valor: 10, descricao: 'olaaaa'})
  }

  const doRemove = () => {
    //remove('movimentacoes/2019-08/-Lnm_zmgtLioNG228Cs2')
  }

  return (
    <div>
      <nav className='navbar navbar-light bg-light'>
        <div className='container'>
          <a className='navbar-brand'>MyMoney</a>
        </div>
      </nav>

      <h2>Adicionar mês</h2>
      <select>
        <option value='2019'>2019</option>
        <option value='2020'>2020</option>
      </select>

      <select>
        <option value='01'>01</option>
        <option value='02'>02</option>
        <option value='03'>03</option>
        <option value='04'>04</option>
        <option value='05'>05</option>
        <option value='06'>06</option>
        <option value='07'>07</option>
        <option value='08'>08</option>
        <option value='09'>09</option>
        <option value='10'>10</option>
        <option value='11'>11</option>
        <option value='12'>12</option>
      </select>
      <button>Adicionar mês</button>
      {
        data.loading && <span>carregando...</span>
      }
      {
        !data.loading && (
          <div className='container'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Mês</th>
                  <th>Previsão entrada</th>
                  <th>Entradas</th>
                  <th>Previsao saída</th>
                  <th>Saídas</th>
                </tr>
              </thead>
              <tbody>
              {
                Object
                .keys(data.data)
                .map(mes => {
                  return(
                    <tr key={mes}>
                      <td>{mes}</td>
                      <td>{data.data[mes].previsao_entrada}</td>
                      <td>{data.data[mes].entradas}</td>
                      <td>{data.data[mes].previsao_saida}</td>
                      <td>{data.data[mes].saidas}</td>
                    </tr>
                  )
                })
              }
                
              </tbody>
            </table>
          </div>
        )
      }
      <pre>{JSON.stringify(data)}</pre>
    </div>
  )
}

export default App
