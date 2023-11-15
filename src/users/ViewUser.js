import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ViewUser() {
    const [vieuser,setViewUser]=useState({
        name:"",
        username:"",
        email:""
    })
    const {id} = useParams()
    const viewUser = async () =>{
        const response =await axios.get(`http://localhost:8080/get/${id}`)
        const value = response.data
        setViewUser(value)
    }

    useEffect(()=>{viewUser()},[])

    const navigate = useNavigate()

    const onCancel = (e)=>{
        e.preventDefault() 
        navigate("/")}
  return (
    <div className='container'>
    <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>User Details</h2>
            <div className='card'>
                <div className='card-header'>
                   
              
                        Details of User id :{vieuser.id}
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <b>Name:
                                
                            </b>
                            {vieuser.name}
                        </li>
                        <li className='list-group-item'>
                            <b>Username:
                                
                            </b>
                            {vieuser.username}
                        </li>
                        <li className='list-group-item'>
                            <b>E-mail:
                                
                            </b>
                            {vieuser.email}
                        </li>

                    </ul>

                </div>
            </div>
            <button className='btn btn-outline-primary my-2' onClick={onCancel}>Back to Home</button>
         </div>
    </div>
</div>
  )
}

export default ViewUser