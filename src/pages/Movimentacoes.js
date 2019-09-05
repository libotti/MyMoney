import React, {useState} from 'react'
import Rest from '../utils/rest'
import {Link} from 'react-router-dom'

const baseURL = 'https://libotti-2d781.firebaseio.com/'
const { useGet, usePost, useDelete } = Rest(baseURL)

const Movimentacoes = ({match}) => {
    const data = useGet(`movimentacoes/${match.params.data}`)
    const [postData, salvar] = usePost(`movimentacoes/${match.params.data}`)
    const [descricao, setDescricao] = useState('')
    const [valor, setValor] = useState(0)

    const onChangeDescricao = (evt) => {
        setDescricao(evt.target.value)
        console.log('descricao:', evt.target.value)
    }
    const onChangeValor = (evt) => {
        setValor(evt.target.value)
        console.log('valor :',  evt.target.value)
    }
    const salvarMovimentacao = async() => {
        await salvar({
            descricao,
            valor
        })
        setDescricao('')
        setValor(0)
    }

    return (
        <div className='container'>
            <h1>Movimentações</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Descricao</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    { data.data &&
                        Object
                        .keys(data.data)
                        .map(movimentacao => {
                            return ( 
                                <tr>
                                    <td>
                                        {data.data[movimentacao].descricao}
                                    </td>
                                    <td>
                                        {data.data[movimentacao].valor}
                                    </td>
                                </tr>
                            )
                        })
                    }
                    <tr>
                        <td><input type='text' value={descricao} onChange={onChangeDescricao} /></td>
                        <td><input type='text' value={valor} onChange={onChangeValor} /> <button onClick={salvarMovimentacao}> + </button></td>
                    </tr>
                </tbody>
            </table>
            <pre>{JSON.stringify(data)}</pre>
        </div>
    )
  }

export default Movimentacoes