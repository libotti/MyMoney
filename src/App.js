import React from 'react'
import useGet from './useGet'

const url = 'https://libotti-2d781.firebaseio.com/movimentacoes/2019-08.json'

function App() {
  const data = useGet(url)

  return (
    <div>
      <h1>MyMoney</h1>
      { !data.loading && JSON.stringify(data) }
      { data.loading && <p>loading...</p> }
    </div>
  )
}

export default App
