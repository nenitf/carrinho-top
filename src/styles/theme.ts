import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  // https://coolors.co/eac435-345995-03cea4-fb4d3d-ca1551
  colors: {
    amarelo: '#EAC435',
    azul: '#345995',
    ciano: '#03CEA4',
    laranja: '#FB4D3D',
    rosa: '#CA1551',
  },
  styles: {
    global: {
      body: {
        bg: "#fff",
        color: "gray.900"
      }
    }
  }
})
