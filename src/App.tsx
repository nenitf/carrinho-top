import { ChakraProvider, Flex } from "@chakra-ui/react"
import { Form } from "components/Form"
import { Carrinho } from "components/Carrinho"
import { theme } from 'styles/theme'

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex w="100vw" h="100vh" align="center" direction="column" p={2}>
        <Form />

        <Flex width="100%" p={6}>
        <Carrinho />
        </Flex>
      </Flex>
    </ChakraProvider>
  )
}
