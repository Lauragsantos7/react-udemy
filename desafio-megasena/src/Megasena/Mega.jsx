import React, { useState } from 'react';
import '../index.css'

export default function Mega() {
   const [numbersRaffle, setNumbersRaffle] = useState('');

   
const raffle = () => {
    const numberMin = 1;
    const numberMax = 61;
    return parseInt(Math.random() * (numberMax - numberMin) + numberMin);
}; 

const result = () => {
    let numbersMega = [];
     const totalNumbers = 6;
     while (numbersMega.length < totalNumbers) {
     let numbersSor = raffle();
     numbersMega.push(numbersSor);
     setNumbersRaffle(numbersMega.sort((a, b) => a - b).join(' '));
     } 
}
  return (
    <div className='mega'>Mega

        <button onClick={ result }>Sortear!</button>
        <p> { numbersRaffle}  </p>
       
    </div>
  )
}
