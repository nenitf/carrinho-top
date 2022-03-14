import { ChakraProvider, Flex } from "@chakra-ui/react"

import { CarrinhoProvider } from 'contexts/carrinho'
import Titulo from "components/Titulo"
import Form from "components/Form"
import Carrinho from "components/Carrinho"
import { theme } from 'styles/theme'

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <CarrinhoProvider>
        <Flex w="100vw" h="100vh" align="center" direction="column" p={2}>
          <Titulo />

          <Form />

          <Flex width="100%" p={6}>
            <Carrinho />
          </Flex>
        </Flex>
      </CarrinhoProvider>
    </ChakraProvider>
  )
}
