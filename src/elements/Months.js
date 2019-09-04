import React from 'react'
import Rest from '../rest'
import {Link} from 'react-router-dom'

const baseURL = 'https://libotti-2d781.firebaseio.com/'

const { useGet, usePost, useDelete } = Rest(baseURL)


const Months = () => {
const data = useGet('meses')

if (data.loading){
    return <span>carregando...</span>
}
if (data.data){
return (
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
                    <td><Link to={`/movimentacoes/${mes}`}>{mes}</Link></td>
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
}

export default Months