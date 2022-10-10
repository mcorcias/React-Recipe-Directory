import {useFetch} from '../../hooks/useFetch'
import './Home.css'
import React from 'react'
import RecipeList from '../../components/RecipeList'

export default function Home() {
  const {data,error,isPending} = useFetch('http://localhost:3000/recipes')
  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <RecipeList recipes={data}/>}
    </div>
  )
}
