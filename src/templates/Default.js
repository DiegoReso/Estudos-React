import Header from "../partials/Header"
import { Container } from "@mui/material"
import useAuth from "../state/auth"




const Default=({children})=>{


  const {user} = useAuth()

  return(
  <>
    <Header user={user}/>
    <Container >
      {children}
    </Container>
   
  </>
  )
}

export default Default