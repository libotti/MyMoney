import React from 'react'

const AddMonth = () => {
    return (
        <div className='container'>
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
        </div>
    )
}

export default AddMonth
