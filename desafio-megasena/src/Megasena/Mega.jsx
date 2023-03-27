import React, { useState } from 'react';
import '../index.css'

export default function Mega() {
   const [numbersRaffle, setNumbersRaffle] = useState('');

   
const raffle = () => {
    const numberMin = 1;
    const numberMax = 61;
    return parseInt(Math.random() * (numberMax - numberMin) + numberMin) ;
}; 

const result = () => {
    let numbersMega = [];
     const totalNumbers = 6;
     while (numbersMega.length < totalNumbers) {
     let numbersSor = raffle();
     numbersMega.push(numbersSor)
     setNumbersRaffle(numbersMega.join(' '))
     console.log('numbersMega:', numbersMega)
     } 
}
  return (
    <div className='mega'>Mega

        <button onClick={ result }>Sortear!</button>
        <p> { numbersRaffle}  </p>
        {/* falta separar os numeros por vírgula */}
       
    </div>
  )
}
