import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const JobList = () => {
    const [jobs, setJobs] = useState([])

    useEffect(()=>{
        fetch('http://localhost:8080/jobs')
        .then(r=>r.json())
        .then(setJobs)
    },[])
  return (
    <div>
        <h2>All Jobs</h2>
        <ul>
            {jobs.map(job=>(
                <li key={job.id}>
                    <Link to={`/jobs/${job.id}`}>
                    <strong>{job.title}</strong> @ {job.company} - {job.location}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default JobList