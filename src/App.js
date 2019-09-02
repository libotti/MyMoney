import React from 'react'
//import useGet from './useGet'
//import usePost from './usePost'
//import useDelete from './useDelete'
import Rest from './rest'

const url2 = 'http://httpbin.org/ip'
const baseURL = 'https://libotti-2d781.firebaseio.com/'

const { useGet, usePost, useDelete } = Rest(baseURL)


function App() {
  const data = useGet('movimentacoes/2019-08')
  const data2 = useGet(url2)
  const [postData, post] = usePost('movimentacoes/2019-08')
  const [deleteData, remove] =  useDelete()

    const saveNew = ()  => {
    post({ valor: 10, descricao: 'olaaaa'})
  }

  const doRemove = () => {
    remove('movimentacoes/2019-08/-Lnm_zmgtLioNG228Cs2')
  }

  return (
    <div>
      <h1>MyMoney</h1>
      { !data.loading && JSON.stringify(data) }
      { data.loading && <p>loading...</p> }
      <pre>{ JSON.stringify(data2) }</pre>
      <button onClick={saveNew}>SALVAR</button>
      <pre>{ JSON.stringify(postData) }</pre>
      <button onClick={doRemove}>EXCLUIR</button>
      <pre>{ JSON.stringify(deleteData) }</pre>
    </div>
  )
}

export default App
