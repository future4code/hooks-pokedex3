import { AppBar, Button, Typography, Toolbar, IconButton } from "@mui/material"
import {useNavigate, useParams} from "react-router-dom"

const HomeHeader =()=>{
    const navigate = useNavigate();
    const params = useParams();
    
    const goToPokedex =()=>{navigate("/pokedex")}
    return (
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Lista Pokemons
          </Typography>
          <Button color="inherit" onClick={goToPokedex}>POKEDEX</Button>
          
        </Toolbar>
      </AppBar>
    )
}
export default HomeHeader