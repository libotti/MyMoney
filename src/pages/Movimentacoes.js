import React, {useState} from 'react'
import Rest from '../utils/rest'
import {Link} from 'react-router-dom'
import { SSL_OP_EPHEMERAL_RSA } from 'constants';

const baseURL = 'https://libotti-2d781.firebaseio.com/'
const { useGet, usePost, useDelete } = Rest(baseURL)

const Movimentacoes = ({match}) => {
    const data = useGet(`movimentacoes/${match.params.data}`)
    const dataMeses = useGet(`meses/${match.params.data}`)
    const [postData, salvar] = usePost(`movimentacoes/${match.params.data}`)
    const [removeData, remover] = useDelete()
    const [descricao, setDescricao] = useState('')
    const [valor, setValor] = useState(0)

    const onChangeDescricao = (evt) => {
        setDescricao(evt.target.value)
        //console.log('descricao:', evt.target.value)
    }

    const onChangeValor = (evt) => {
        setValor(evt.target.value)
        //console.log('valor :',  evt.target.value)
    }

    const sleep = time => new Promise(resolve => setTimeout(resolve, time))

    const salvarMovimentacao = async() => {
        if (!isNaN(valor) && valor.search(/^[-]?\d+(\.)?\d+?$/) >= 0){
            await salvar({
                descricao,
                valor: parseFloat(valor)
            })
            setDescricao('')
            setValor(0)
            data.refetch()
            await sleep(5000)
            dataMeses.refetch()
        }
    }
    const removerMovimentacao = async(id) => {
        await remover(`movimentacoes/${match.params.data}/${id}`)
        data.refetch()
        await sleep(5000)
        dataMeses.refetch()
    }

    return (
        <div className='container'>
            <h1>Movimentações</h1>
            {
                !dataMeses.loading && <div>
                    Previsão de Entradas: {dataMeses.data.previsao_entrada} / Previsão de Saidas: {dataMeses.data.previsao_saida} <br />
                    Entradas {dataMeses.data.entradas}: / Saidas: {dataMeses.data.saidas}
                </div>
            }
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
                                <tr key={movimentacao}>
                                    <td>
                                        {data.data[movimentacao].descricao}
                                    </td>
                                    <td className='text-right'>
                                        {data.data[movimentacao].valor} {' '}
                                        <button className='btn btn-danger' onClick={() => removerMovimentacao(movimentacao)}> - </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    <tr>
                        <td><input type='text' value={descricao} onChange={onChangeDescricao} /></td>
                        <td><input type='text' value={valor} onChange={onChangeValor} /> <button className='btn btn-success' onClick={salvarMovimentacao}> + </button></td>
                    </tr>
                </tbody>
            </table>
            <pre>{JSON.stringify(data)}</pre>
        </div>
    )
}

export default Movimentacoes