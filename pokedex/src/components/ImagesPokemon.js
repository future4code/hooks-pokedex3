import { ImageList, ImageListItem } from "@mui/material"

const PokemonImages = () => {
    return (
        <>
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                <ImageListItem>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png`}
                    loading="lazy"
                />
                 <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png`}
                    loading="lazy"
                />
                </ImageListItem>
            </ImageList>
        </>
    )
}

export default PokemonImages