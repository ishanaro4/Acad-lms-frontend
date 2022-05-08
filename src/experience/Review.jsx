import React, { useEffect, useState } from 'react';
import './index.css'; 
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import axios from 'axios';
import { SelectionState } from 'draft-js';


const Review = () => {
  const [people, setPeople] = useState([])
  
  useEffect(()=>{
    axios({
      headers:{'Authorization':window.sessionStorage.getItem('token')},
      method:'get',
      url:'http://localhost:8080/users/experiences',
    }).then(res=>{
      const data = res.data.map(data=>{
        return {
            id: data.id,
            name: data.username,
            job: 'SDE developer',
            image: data.imagePath,
            width:"100",
            height:"100",
            text: data.exp
        }
      });
      setPeople(data)
      console.log(data)
    })
  },[])
  const [index, setIndex] = useState(0);
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <>
    {people.length==0?'No reviews exist':
    <article className='review'>
      <div className='img-container'>
        <img src={people[index].image} alt={people[index].name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{people[index].name}</h4>
      <p className='job'>{people[index].job}</p>
      <p className='info'>{people[index].text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
    }
    </>
  );
};

export default Review;
