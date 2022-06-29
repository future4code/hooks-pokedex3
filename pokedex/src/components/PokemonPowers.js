import { CardContent, Typography } from "@mui/material"

const PokemonPowers = () => {
    return (
        <CardContent>
        <Typography gutterBottom variant="h5" component="div"> Poderes</Typography>
            <Typography variant="body2" color="text.primary"> hp:</Typography>
            <Typography variant="body2" color="text.secondary"> 78</Typography>
            <Typography variant="body2" color="text.primary"> attack:</Typography>
            <Typography variant="body2" color="text.secondary"> 84</Typography>
            <Typography variant="body2" color="text.primary"> defense:</Typography>
            <Typography variant="body2" color="text.secondary">78</Typography>
            <Typography variant="body2" color="text.primary"> spacial-attack:</Typography>
            <Typography variant="body2" color="text.secondary">109</Typography>
            <Typography variant="body2" color="text.primary"> special-defense:</Typography>
            <Typography variant="body2" color="text.secondary"> 85</Typography>
            <Typography variant="body2" color="text.primary"> speed:</Typography>
            <Typography variant="body2" color="text.secondary"> 100</Typography>
    </CardContent>
    )
}

export default PokemonPowers