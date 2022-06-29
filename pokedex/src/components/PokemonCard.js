import { Button, ButtonGroup, Card, CardActions, ImageList, ImageListItem} from "@mui/material"
import {useNavigate, useParams} from "react-router-dom"

const PokemonCard = () => {
    const navigate = useNavigate();
    const params = useParams();
    const SeeDetails = () => navigate("/pokemon-details")
    return (
        <>
        <Card sx={{ maxWidth: 300 }}>
         <ImageList sx={{ width: 500, height: 150 }} cols={3} rowHeight={164}>
                <ImageListItem>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png`}
                    loading="lazy"/>
                </ImageListItem>
            </ImageList>
        <CardActions>
        <ButtonGroup variant="contained">
            <Button >Adicionar a Pokedex</Button>
            <Button onClick={SeeDetails}> Ver Detalhes</Button>
        </ButtonGroup>
        </CardActions>
        </Card>
        </>
    )
}

export default PokemonCard