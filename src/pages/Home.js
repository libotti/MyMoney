import React from 'react'
import Months from '../elements/Months'
import AddMonth from '../elements/AddMonth'

const Home = () => {
    return (
      <div className='container'>
        <AddMonth />
        <Months />
      </div>
    )
  }

export default Home