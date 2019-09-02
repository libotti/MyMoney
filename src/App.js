import React from 'react'
import useGet from './useGet'
import usePost from './usePost'
import useDelete from './useDelete';

const url = 'https://libotti-2d781.firebaseio.com/movimentacoes/2019-08.json'
const url2 = 'http://httpbin.org/ip'

function App() {
  const data = useGet(url)
  const data2 = useGet(url2)
  const [postData, post] = usePost(url)
  const [deleteData, remove] =  useDelete()
  

  const saveNew = ()  => {
    post({ valor: 10, descricao: 'olaaaa'})
  }

  const doRemove = () => {
    remove('https://libotti-2d781.firebaseio.com/movimentacoes/2019-08/-LnmCQUa8vo9vVqCtwl-.json')
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
