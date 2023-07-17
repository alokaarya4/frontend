import React from 'react'

const Home = () => {
  return (
    <div>
    <h1>Home</h1>

      <p style={{fontSize:'50px', backgroundColor: 'lightblue'}}>Inline CSS in JSX</p>

      <p className='myclass'>Admisson Form</p>

      <input type="text" />
      <input type='num' />
      <br/>
      <input type="text" />


    </div>

  )
}

export default Home