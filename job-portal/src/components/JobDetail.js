import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const JobDetail = () => {
    const {id} = useParams();
    const [job, setJob] = useState()

    useEffect(()=>{
        fetch(`http://localhost:8080/jobs/${id}`)
        .then(r=>r.json())
        .then(setJob)
    },[id])

    if(!job) return <p>Loading job...</p>
  return (
    <div>
        <h2>{job.title}</h2>
        <p>{job.description}</p>
    </div>
  )
}

export default JobDetail