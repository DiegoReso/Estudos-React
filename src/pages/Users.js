import UsersCard from "../components/UsersCard"
import { useState,useEffect } from "react"
import axios from "axios"
import Grid from '@mui/material/Grid'
import { useNavigate } from "react-router-dom"

const Users =()=>{

  const navigate = useNavigate()
  const [user,setUser] = useState([])

  
  const handleDeleteUser=(id)=>{
    axios.delete(`https://reqres.in/api/users/${id}`)
    .then(resp =>{
      const newUser = user.filter(item => item.id !== id)

      setUser(newUser)
    })
  }


  useEffect(()=>{
    axios("https://reqres.in/api/users")
    .then(resp =>{

      const {data} = resp.data

      setUser(data)

    })

  },[])


  const handleEditUser=(id)=>{
    navigate(`/users/editregister/${id}`)
  }


  return(
    <Grid container sx={{mt: '50px'}}>
      
    {
      
      user.map(item =>(

        <Grid  xs={4} sx={{mt:'20px'}}>
        <UsersCard
          name={item.first_name}
          last_name={item.last_name}
          email={item.email}
          avatar={item.avatar}
          key={item.id}
          id={item.id}
          onRemove={handleDeleteUser}
          onEdit={handleEditUser}
          />
        </Grid>
      ))
    }
      
    </Grid>
  )
}

export default Users