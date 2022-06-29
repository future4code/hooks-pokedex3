import { AppBar, Button, Typography, Toolbar, IconButton } from "@mui/material"
import {useNavigate, useParams} from "react-router-dom"

const HomePokedex =()=>{
    const navigate = useNavigate();
    const params = useParams();
    const goBack =()=>{navigate(-1)}
    return (
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pokedex
          </Typography>
          <Button color="inherit" onClick={goBack}>Voltar</Button>
        </Toolbar>
      </AppBar>
    )
}
export default HomePokedex