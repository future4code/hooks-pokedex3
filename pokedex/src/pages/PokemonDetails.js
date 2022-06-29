import DetailsHeader from "../components/DetailsHeaders"
import PokemonImages from "../components/ImagesPokemon"
import PokemonAttacks from "../components/PokemonAttacks"
import PokemonPowers from "../components/PokemonPowers"
import { Grid } from "@mui/material"

const PokemonDetails = () => {
    return (
        <>
        <Grid  
        container
        direction="row"
        justifyContent="center"
        alignItems="center">
            <DetailsHeader/>
            <PokemonImages/>
            <PokemonPowers/>
            <PokemonAttacks/>
        </Grid>
        </>
    )
}

export default PokemonDetails