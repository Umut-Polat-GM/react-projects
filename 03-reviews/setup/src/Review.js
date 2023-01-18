import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const {name,job,image,text} = people[index]

  const nextPerson = () => {
    setIndex((index)=>{
      let newIndex = index + 1
      if(newIndex >= people.length) newIndex = 0
      return newIndex
    })
  }
  const prevPerson = () => {
    setIndex((index)=>{
      let newIndex = index - 1
      if(newIndex < 0) newIndex = people.length-1
      return newIndex
    })
  }

  const randomPerson = () => {
    let randomValue = Math.floor(Math.random()*people.length)
    if(randomValue === index) randomPerson()
    setIndex(randomValue)
    console.log(randomValue)
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img'/>
        <span className='quote-icon'>
          <FaChevronRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='text'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={()=>randomPerson()}>
            suprise me
        </button>
    </article>
  )
};

export default Review;
