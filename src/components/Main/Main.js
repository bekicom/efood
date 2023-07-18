import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import './Main.css'
import sen  from '../../assets/Section1/Doubble sandwich.png'
import user  from '../../assets/Section1/Review.png'
import shape  from '../../assets/Section1/Send shape.png'
import time  from '../../assets/Section1/Time (1).png'
import time2  from '../../assets/Section1/Time.png'
import moto  from '../../assets/Section1/Scooter Guy.png'

export  function Main() {
  return (
    <div className='main'>
      <Navbar/>
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
          <img  id='shape' src={shape} alt="" />

        </div>

      </div>

      
    </div>
  )
}
