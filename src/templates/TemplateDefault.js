import { Typography } from "@mui/material"


const TemplateDefault =({title, Component})=>{
  return(
    <Typography sx={{mt: '110px'}} variant="h3">
      {title}
      <Component/>
    </Typography>

  )
}

export default TemplateDefault