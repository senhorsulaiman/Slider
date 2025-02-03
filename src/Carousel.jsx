import React, { useEffect } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import { useState } from 'react'
import { longList,shortList } from './data'
const Carousel = () => {

  const [people, setPeople] = useState(longList);

  const [currPerson, setCurrentPerson] = useState(0);
  const prevSlide = () => {

    setCurrentPerson((oldPerson) => {


      const result = (oldPerson - 1 + people.length) % people.length;

      return result

    })

  }
  const nextSlide = () => {

    setCurrentPerson((oldPerson) => {


      const result = (oldPerson + 1) % people.length;

      return result

    })

  }
useEffect(()=>{
let sliderId=setInterval(()=>{

  nextSlide();
},5000)
return()=>{
  clearInterval(sliderId)
}
},[currPerson])
  return (

    <div className='slider-container'>
      {people.map((person, peopleIndex) => {
        const { id, image, name, title, quote } = person;

        return (

          <div className="slide " style={{
            transform: `translateX(${100 * (peopleIndex - currPerson)



              }%)`, opacity: peopleIndex === currPerson ? 1 : 0,
            visibility: peopleIndex === currPerson ? 'visible' : 'hidden'
          }} key={id}>

            <img src={image} alt={image} className='person-img' />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">

              <FaQuoteRight className='icon' />
              {quote}</p>


          </div>


        )
      })}

      <button className='prev' onClick={prevSlide}><FaChevronLeft /></button>

      <button className='next' onClick={nextSlide}><FaChevronRight /></button>

    </div>

  )
}

export default Carousel 