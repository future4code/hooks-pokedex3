import { AppBar, Button, Typography, Toolbar, IconButton } from "@mui/material"
import {useNavigate, useParams} from "react-router-dom"

const DetailsHeader =()=>{
    const navigate = useNavigate();
    const params = useParams();
    const goBack =()=>{navigate(-1)}
    const goToPokedex =()=>{navigate("/pokedex")}
    return (
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Detalhes do Pokemon
          </Typography>
          <Button color="inherit" onClick={goToPokedex}>POKEDEX</Button>
          <Button color="inherit" onClick={goBack}>VOLTAR</Button>
        </Toolbar>
      </AppBar>
    )
}
export default DetailsHeader