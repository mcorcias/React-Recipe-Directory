import React, {  useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import {useFetch} from '../../hooks/useFetch'
import './Create.css'

export default function Create() {
  const [title,setTitle] = useState('')
  const [method,setMethod] = useState('')
  const [cookingTime,setCookingTime] = useState('')
  const [newIngredient,setNewIngredient] = useState('')
  const [ingredients,setIngredients] = useState([])
  const ingredientInput = useRef(null)
  const {push} = useHistory()

  
  const {postData,data,error} = useFetch('http://localhost:3000/recipes','POST')


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('check')
    console.log(title, method, cookingTime, ingredients)
    postData({
      title,
      ingredients,
      method,
      cookingTime: cookingTime + 'minutes',
    })
  }

  const handleAdd = () => {
    const ing = newIngredient.trim()
    if(ing && !ingredients.includes(ing)){
      setIngredients((prev) => [...prev,ing])
    }
    setNewIngredient('')
    ingredientInput.current.focus()
  }
  
  useEffect(()=>{
    if(data){
      push('/')
    }
    if(error){
      console.log('error');
    }
  },[data,error,push])


  return (
    <div className='create'>
      <h2 className="page-title">Add a New Recipe</h2>
      
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title:</span>
          <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} required />
        </label>
        <label>
          <span>Recipe ingredients:</span>
          <div className="ingredients">
            <input type="text" ref={ingredientInput} onChange={(e)=>setNewIngredient(e.target.value)} value={newIngredient} />
            <button type='button' className='btn' onClick={handleAdd}>add</button>
          </div>
        </label>
        <p>Current Ingredients: {ingredients.map(ing => (
          <em key={ing}>{ing}, </em>
        ))}
        </p>
        <label>
          <span>Recipe Method:</span>
          <textarea onChange={(e) => setMethod(e.target.value)} value={method} required/>
        </label>
        <label>
          <span>Cookie time (minutes):</span>
          <input type="number" onChange={(e) => setCookingTime(e.target.value)} value={cookingTime} required />
        </label>

        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}
