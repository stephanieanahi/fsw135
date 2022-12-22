import React from 'react'

export default function Issue(props){
  const { content } = props
  return (
    <div className="issue">
      <h1>{ content }</h1>
     
    </div>
  )
}