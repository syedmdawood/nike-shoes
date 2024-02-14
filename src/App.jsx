import React, { useState } from 'react'
import { myShoes } from './data'
import "./app.css"

const App = () => {
  const [shoes, setShoes] = useState(myShoes);
  const orignal = myShoes

  const jordan =()=>{
    const single = orignal.filter((singleShoe) => singleShoe.category === "Jordan");
    setShoes(single)
  }
  const BasketBall = ()=>{
    const single = orignal.filter ((singleShoe) => singleShoe.category === "BasketBall");
    setShoes(single)
  }
  const running = ()=>{
    const single = orignal.filter((singleShoe)=> singleShoe.category === "Running")
    setShoes(single)
  }
  
  const airmax = ()=>{
    const single = orignal.filter((singleShoe)=> singleShoe.category === "Air_Max")
    setShoes(single)
  }
  const dunks = ()=>{
    const single = orignal.filter((singleShoe)=> singleShoe.category === "Dunks")
    setShoes(single)
  }

  const remove = (id)=>{
    const single = shoes.filter((singleShoe)=> singleShoe.id !== id);
    setShoes(single)
  }


  return (
    <div className='container'>
      <h1>Shoes</h1>
      <div className="buttons">
      <button className='btn' onClick={BasketBall}>BasketBall</button>
      <button className='btn'  onClick={jordan}>Jordan</button>
      <button className='btn' onClick={running}>Running</button>
      <button className='btn' onClick={dunks}>Dunks & Blazzers</button>
      <button className='btn' onClick={airmax}>Air Max</button>
      <button className='btn' onClick={()=> setShoes([])}>Clear All</button>
      <button className='btn' onClick={()=> setShoes(myShoes)}>Get All</button>
      </div>
      <div className="cards">
      {
        shoes.map((mySho) =>{
          return(
            <div key={mySho.id} className='sub'>
                <div className="card">
                  <img src={mySho.img} alt="" />
                  
                  <div className="content">
                  <h3>{mySho.name}</h3>
                  <h3>{mySho.price}</h3>
                  </div>
              <button className='danger' onClick={()=> remove(mySho.id)}> Remove</button>
                </div>
              
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default App