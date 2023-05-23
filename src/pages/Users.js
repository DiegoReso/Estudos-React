import UsersCard from "../partials/components/UsersCard"
import { useState,useEffect } from "react"
import axios from "axios"
import Grid from '@mui/material/Grid'

const Users =()=>{


  const [user,setUser] = useState([])

  
  const handleDeleteUser=(id)=>{
    alert(id)
  }


  useEffect(()=>{
    axios("https://reqres.in/api/users")
    .then(resp =>{

      const {data} = resp.data

      setUser(data)

    })

  },[])

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
          />
        </Grid>
      ))
    }
      
    </Grid>
  )
}

export default Users