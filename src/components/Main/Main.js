import React, { useState } from 'react'
import { Navbar } from '../Navbar/Navbar'
import './Main.css'
import sen from '../../assets/Section1/Doubble sandwich.png'
import user from '../../assets/Section1/Review.png'
import shape from '../../assets/Section1/Send shape.png'
import time from '../../assets/Section1/Time (1).png'
import time2 from '../../assets/Section1/Time.png'
import moto from '../../assets/Section1/Scooter Guy.png'
import rasm from '../../assets/section2/img.png'

export function Main() {
  const [data, setData] = useState([
    { id:1, img: rasm, ism: 'tako', narx: '100$', add: 'Add to Cart' },
    { id:2, img: rasm, ism: 'tako', narx: '100$', add: 'Add to Cart' },
    { id:3, img: rasm, ism: 'tako', narx: '100$', add: 'Add to Cart' },
    { id:4, img: rasm, ism: 'tako', narx: '100$', add: 'Add to Cart' },
    { id:5, img: rasm, ism: 'tako', narx: '100$', add: 'Add to Cart' }

  ])


  const [basket,setBasket]= useState( JSON.parse(localStorage.getItem('key'))||[])
   

  const  addcart  = (item) =>{
   
     const mydata = [...basket]

     let test = true
      

       mydata.map((e)=>{

      if(e.id === item.id){
        test= false
        setBasket(mydata)
        localStorage.setItem('key',JSON.stringify(mydata))
      }
      return null
     })

     if(test){
      mydata.push(item)
      setBasket(mydata)
      localStorage.setItem('key',JSON.stringify(mydata))
     }

   console.log(test);


     


  }



  return (
    <div className='main'>
      <Navbar  data={basket} />
      <div className="section1">
        <div className="left_1">
          <p>
            super fast <b> Food </b>
            <b>delivery</b> service
          </p>
          <span>
            We provide super fast-delivery service. Let’s use our services right now and get discounts of up to 50%
          </span>
          <div className="btn_1">
            <button>Explore Food</button>
            <button>Download App</button>
          </div>
        </div>
        <div className="right_1">
          <img id='time' src={time} alt="" />
          <img id='time2' src={time2} alt="" />
          <img src={moto} alt="" />
          <img id='user' src={user} alt="" />
          <img id='sen' src={sen} alt="" />
          <img id='shape' src={shape} alt="" />

        </div>

      </div>
      <div className="sec2">
        <div className="yoz2">
          <span>Our popular<span>Category</span></span>
        </div>
        <div className="kateg">
          <button>🍔 Burger</button>
          <button>🍔 Pizza</button>
          <button>🍔 Sigma chizburger</button>
          <button>🍔 Giga Burger</button>
          <button>🍔 Giga Burger</button>

        </div>
        <div className="tanlov">
          {data.map((item,index) => (
            <div className="cartbtn">
              <img src={item.img} alt="" />

              <span>{item.ism}</span>
              <span>{item.narx}</span>
              <button onClick={ () =>addcart(item)  }  >{item.add}</button>
            </div>
          ))}
        </div>
      </div>



    </div>
  )
}
