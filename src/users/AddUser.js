import axios from 'axios'
import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'

function AddUser() {

    const navigate = useNavigate()

    const[user,setUser]=useState({
        name:"",
        userName:"",
        email:""
})

const addUser = (e) =>{
        setUser({...user,[e.target.name]:e.target.value})
}

const onSubmit = async(e) =>{
        e.preventDefault()
        await axios.post("http://localhost:8080/user",user)
        navigate("/")
     
}

const onCancel = (e)=>{
    e.preventDefault()
    navigate("/")
}

const {name,username,email}=user
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Register User</h2>

            <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor="Name" className='form-label'>
                        Name
                    </label>
                    <input type={"text"  }
                            className='form-control' 
                            placeholder='Enter Your Name'
                            name='name'
                            value={name}
                            onChange={(e)=>addUser(e)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="UserName" className='form-label'>
                        Username
                    </label>
                    <input type={"text" }
                            className='form-control' 
                            placeholder='Enter Your UserName'
                            name='username'
                            value={username}
                            onChange={(e)=>addUser(e)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="Email" className='form-label'>
                        E-mail
                    </label>
                    <input type="text"  
                            className='form-control' 
                            placeholder='Enter Your Email'
                            name='email'
                            value={email}
                            onChange={(e)=>addUser(e)}
                    />
                </div>
                 <button type="submit" className='btn btn-outline-primary'>Submit</button>

                 <button type="submit" className='btn btn-outline-danger mx-2' onClick={onCancel}>Cancel</button>
                 </form>
            </div>


        </div>

    </div>
  )
}

export default AddUser