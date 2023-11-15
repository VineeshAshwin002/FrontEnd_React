import axios from 'axios'
import React, { useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditUser() {

    const {id} = useParams()

    const navigate = useNavigate()

    const[user,setUser]=useState({
        name:"",
        username:"",
        email:""
})

const addUser = (e) =>{
        setUser({...user,[e.target.name]:e.target.value})
}

const onSubmit = async(e) =>{
        e.preventDefault()
        await axios.put(`http://localhost:8080/get/${id}`,user)
        navigate("/")
     
}

useEffect(()=>{
    loadUser()
},[])

const loadUser = async()=>{
    const result = await axios.get(`http://localhost:8080/get/${id}`)
    //const value = result.data
    console.log(result.data)
    setUser(result.data)
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

export default EditUser