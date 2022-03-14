import React, { useState, useEffect } from 'react'

import { useCarrinho } from 'contexts/carrinho'
import { formataEmReais } from 'helpers'

import {
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  Stack,
  HStack,
  Icon
} from "@chakra-ui/react"
import { MdAddShoppingCart } from 'react-icons/md';


export default function C() {
  const { items, setItems } = useCarrinho();
  const [ produto, setProduto ] = useState("");
  const [ preco, setPreco ] = useState(0);
  const [ precoF, setPrecoF ] = useState("0");
  const [ quantidade, setQuantidade ] = useState(1);
  const [ totalItem, setTotalItem ] = useState(0);

  useEffect(() => {
    setTotalItem(preco*quantidade);
  }, [preco, quantidade])

  function handleChangeProduto(e: React.ChangeEvent<HTMLInputElement>) {
    setProduto(e.target.value);
  }

  function handleChangePreco(value: string) {
    setPrecoF(value);
    const v = !value ? 0 : parseFloat(value);
    setPreco(v);
  }

  function handleChangeQuantidade(value: string) {
    const v = !value ? 0 : parseInt(value);
    setQuantidade(v);
  }

  function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
    e.preventDefault();
    e.target.select();
  }

  function handleAddItem() {
    const nextId = !items.length ? 1 : items[items.length - 1].id + 1;
    setItems([
      ...items,
      {
        id: nextId,
        nome: produto,
        preco,
        quantidade,
        total: totalItem
      }
    ]);

    setProduto("");
    setPreco(0);
    setPrecoF("0");
    setQuantidade(1);
  }

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
          value={produto}
          onChange={handleChangeProduto}
        />

        <HStack>
          <InputGroup size="lg">
            <InputLeftAddon bg="blue.100">R$</InputLeftAddon>
            <NumberInput
              min={0}
              bg="blue.50"
              borderRadius={4}
              focusBorderColor="laranja"
              value={precoF}
              onChange={s => handleChangePreco(s)}
              onFocus={handleFocus}
            >
              <NumberInputField placeholder="Preço" />
            </NumberInput>
          </InputGroup>

          <NumberInput
            defaultValue={1}
            value={quantidade}
            w="50%"
            onChange={s => handleChangeQuantidade(s)}
            onFocus={handleFocus}
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
          onClick={() => handleAddItem()}
          colorScheme="green"
          sz="lg"
          leftIcon={<Icon w={6} h={6} as={MdAddShoppingCart} />}
        >
          {formataEmReais(totalItem)}
        </Button>
      </Stack>
    </Flex>
  )
}
