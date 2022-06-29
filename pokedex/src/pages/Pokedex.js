import HomePokedex from "../components/HomePokedex"
import { Grid } from "@mui/material"
import PokemonCard from "../components/PokemonCard"


const Pokedex = () => {
    return (
        <>
        <HomePokedex/>
        <Grid  container
            direction="row"
            justifyContent="center"
            alignItems="center">
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        </Grid>
        </>
    )
}

export default Pokedex