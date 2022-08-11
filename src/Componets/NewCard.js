import React from 'react'

export default function NewCard(props) {
  return (
    <>
     <div  >
          <div>{props.Id}</div>
          <div>{props.Name}</div>
          <div>{props.SchoolName}</div>
         </div>
    </>
  )
}
