import React, { useState } from 'react'
import ax from 'axios'


const WorkoutForm = ({setShow,show}) => {
  const [title,setTitle]=useState('')
  const [load,setLoad]=useState('')
  const [reps,setReps]=useState('')
  const [error,setError]=useState('')

  const handleSubmit=async(e)=>{
    e.preventDefault()

    try {
      await ax.post('https://buddyworkout.onrender.com/api/workouts/',{title,load,reps})
      setTitle('')
      setLoad('')
      setReps('')
      setShow(!show)
    } catch (error) {
      setError('please fill out all fields')
    }
  }
  return (
    <form className='craete' onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>
      <label>Excersize Title:</label>
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>

      <label>Load (in Kg) :</label>
      <input type="number" value={load} onChange={(e)=>setLoad(e.target.value)}/>

      <label>Reps:</label>
      <input type="number" value={reps} onChange={(e)=>setReps(e.target.value)}/>

      <button>add Workout</button>
      {error&&<div className='error'>{error}</div>}
      
    </form>
  )
}

export default WorkoutForm