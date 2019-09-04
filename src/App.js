import React from 'react'
import Rest from './rest'
import Header from './elements/Header'
import Months from './elements/Months'
import AddMonth from './elements/AddMonth'

const url2 = 'http://httpbin.org/ip'
const baseURL = 'https://libotti-2d781.firebaseio.com/'

const { useGet, usePost, useDelete } = Rest(baseURL)


function App() {
//  const data = useGet('movimentacoes/2019-08')
//  const data2 = useGet(url2)
//  const [postData, post] = usePost('movimentacoes/2019-08')
//  const [deleteData, remove] =  useDelete()



  const saveNew = ()  => {
    //post({ valor: 10, descricao: 'olaaaa'})
  }

  const doRemove = () => {
    //remove('movimentacoes/2019-08/-Lnm_zmgtLioNG228Cs2')
  }

  return (
    <div>
      <Header />
      <div className='container'>
        <AddMonth />
        <Months />
      </div>
    </div>
  )
}

export default App
