import React, { useState } from 'react'

const ApplyForm = ({jobId, user}) => {
    const [cover, setCover] = useState('')
    const [profile, setProfile] = useState(null)

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('jobId',jobId)
        formData.append('userId',user.id)
        formData.append('coverLetter',cover)
        formData.append('profile',profile)

        await fetch('http://localhost:8080/applications',{
            method:'POST',
            body: formData,
        })
        alert('Applied Successfully')

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <textarea value={cover} onChange={e=>setCover(e.target.value)}
            placeholder='Cover Letter' /><br />
            <input type='file' accept='.pdf,.doc,.docx' required 
            onChange={e=>setProfile(e.target.files[0])} /><br />
            <button type='submit'>Apply</button>

        </form>
    </div>
  )
}

export default ApplyForm