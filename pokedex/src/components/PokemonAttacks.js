import { CardContent, Typography } from "@mui/material"

const PokemonAttacks = () => {
    return (
        <CardContent>
            <Typography gutterBottom variant="h5" component="div"> Tipo</Typography>
                <Typography variant="body2" color="text.secondary"> fire</Typography>
                <Typography variant="body2" color="text.secondary"> flying</Typography>
            <Typography gutterBottom variant="h5" component="div"> Principais Ataques</Typography>
                <Typography variant="body2" color="text.secondary"> mega-punch</Typography>
                <Typography variant="body2" color="text.secondary"> fire-punch</Typography>
                <Typography variant="body2" color="text.secondary"> thunder-punch</Typography>
                <Typography variant="body2" color="text.secondary">scratch</Typography>
                <Typography variant="body2" color="text.secondary">sword-dance</Typography>
        </CardContent>
    )
}

export default PokemonAttacks