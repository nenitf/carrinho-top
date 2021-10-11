import {
  Flex,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  Stack,
  HStack,
  FormLabel,
  InputLeftAddon,
  InputGroup,
  InputLeftElement,
  Icon
} from "@chakra-ui/react"
import { BsFillCartPlusFill } from 'react-icons/bs';


export function Form() {
  return (
    <Flex
      as="form"
      bg="blue.200"
      width="100%"
      borderRadius={8}
      maxWidth={600}
      minWidth={300}
      p="4"
      flexDir="column"
    >
      <Stack>
        <Input
          placeholder="Produto"
          type="text"
          bg="blue.50"
          focusBorderColor="laranja"
          size="lg"
        />

        <HStack>
          <NumberInput
            min={0}
            bg="blue.50"
            borderRadius={4}
            focusBorderColor="laranja"
            size="lg"
          >
            <NumberInputField placeholder="Preço" />
          </NumberInput>

          <NumberInput
            defaultValue={1}
            min={1}
            bg="blue.50"
            borderRadius={4}
            focusBorderColor="laranja"
            size="lg"
          >
            <NumberInputField placeholder="Quantidade" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </HStack>

        <Button
          type="submit"
          colorScheme="green"
          sz="lg"
        >
          <Icon as={BsFillCartPlusFill} />
        </Button>
      </Stack>
    </Flex>
  )
}
