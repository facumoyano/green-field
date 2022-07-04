import { extendTheme } from '@chakra-ui/react'
import "@fontsource/varela-round"
import "@fontsource/montserrat"

const theme = extendTheme({
    colors: {
        verde: '#4ebd94',
        amarillo: '#fcc80d',
        azul: '#002b43',
        blanco: '#fff',
        negro: '#000',
        principal: '#102F1B',
    },
    fonts: {
        heading: `'Varela Round', sans-serif`,
        body: `'Montserrat', sans-serif`,
    }
})

export default theme;
// font-family: "Varela Round", sans-serif;
// { font-family: "Montserrat", sans-serif; }