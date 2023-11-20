import React, { useEffect, useState } from 'react'
import ax from 'axios'
import WorkoutDetails from '../componenets/WorkoutDetails'
import WorkoutForm from '../componenets/WorkoutForm'

const Home = () => {

    const [workouts,setWorkouts]=useState([])
    const [show,setShow]=useState(false)
    useEffect(()=>{
        const getData=async()=>{
            let response=await ax.get('https://buddyworkout.onrender.com/api/workouts')
            console.log(response.data)
            setWorkouts(response.data)
        }
        
        getData();
    },[show])

  return (
    <>
    <div className="home">
        <div className="workouts">
            {workouts&&workouts.map(work =>(
                    <WorkoutDetails workout={work} key={work._id} show={show} setShow={setShow}/>
                ))}
        </div>
        <WorkoutForm setShow={setShow} show={show}/>
    </div>
    </>
  )
}

export default Home