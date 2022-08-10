import React,{useState} from 'react'

export default function TextForm() {
   const[num,setNum]=useState(0);
  function plusVlaue()
  {

    setNum(num+1)
    
  num=num+1;
    console.log(num);
     
  }
  return (
    <>

    <p >{num}</p>
      <button onClick={plusVlaue}> change number  </button> 
    </ >
  )




}
