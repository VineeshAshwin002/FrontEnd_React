import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function Home() {

    const [users,setUsers] = useState([])
    
    const {id} = useParams()

    useEffect(()=>{
       loadUsers()
    },[])


    const loadUsers = async()=>{
        const response =await axios.get(`http://localhost:8080/get`)
        loadUsers()
        console.log(response.data)
        const value = response.data
        setUsers(value)
    }

    const deleteUser = async(id)=>{
       await axios.delete(`http://localhost:8080/get/${id}`)
       loadUsers()
    }

  return (
    <div className='container'>
        <div className='py-4'>
    <table className="table border shadow" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>(
            <tr key={index}>
            <th scope="row" key={index}>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
                <Link to={`/viewuser/${user.id}`}>
                <button className='btn btn-primary mx-2'>View</button>
                </Link>
                <Link to={`/edituser/${user.id}`} >
                <button className='btn btn-outline-primary mx-2'>Edit</button>
                </Link>
                
                <button className='btn btn-danger mx-2' onClick={()=>deleteUser(user.id)}>Delete</button>
                
            
            </td>
           
             </tr>
    
        ))

        
    }
    
   
  </tbody>
</table>
        </div>
    </div>
  )
}

export default Home