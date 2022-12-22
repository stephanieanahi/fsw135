import React, { useState } from 'react'

const initInputs = {
  content: "",
 
}

export default function IssueForm(props){
  const [inputs, setInputs] = useState(initInputs)
  const { addIssue } = props

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    addIssue(inputs)
    setInputs(initInputs)
  }

  const { content  } = inputs
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="content" 
        value={content} 
        onChange={handleChange} 
        placeholder="Content"/>
      
      <button>Add Issue</button>
    </form>
  )
}