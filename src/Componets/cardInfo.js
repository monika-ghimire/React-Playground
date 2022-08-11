import React from 'react'
import styles from './cardInfo.module.css';

export default function cardInfo() {
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
          <div className={styles.CardHolder}>
            <p>Id :  {x.Id}</p>
            <p>student Name :   {x.name}</p>
            <p> School Name : {x.SchoolName}</p>
          </div>
          
            
         ))}
          
        
       
    </>
  )
}