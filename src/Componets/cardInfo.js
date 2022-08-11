import React from 'react'
import styles from './cardInfo.module.css';
import NewCard from './NewCard'

export default function cardInfo(props) {
    let studentList=[
        {name:"monika ghimire",
        Id:"1",
        SchoolName:"jana jagrity"
    },
    {name:"salina ghimire",
    Id:"2",
    SchoolName:"karma "
},
{name:"suraj ghimire",
Id:"3",
SchoolName:"schools"
}
    ]
    
   console.log(studentList);  

  return (
    <>
         
         {studentList.map(x => (
          <NewCard Id={x.Id} Name={x.name} SchoolName={x.SchoolName}/>        
         ))}
        
          
        
       
    </>
  )
        }