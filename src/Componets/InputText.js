import React,{useState} from 'react'

export default function InputText() {

    const[nameList,setNameList]=useState([]);
    const AddListName = () => {
        var value=document.getElementById('userValue').value;
    
        setNameList([...nameList,value]);
        console.log(nameList);
       
      }
    return(
        <>
        <input type="text" id="userValue"/>
        <button onClick={AddListName}>ADD</button>
        <ul>
            {nameList.map((name)=>(
            <li>{name}</li>))}
        </ul>
        </>
    )
   
}
