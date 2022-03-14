import { useCarrinho } from 'contexts/carrinho'

import { Heading } from '@chakra-ui/react'
import { formataEmReais } from 'helpers'

export default function C() {
  const { total } = useCarrinho();
  return (
    <Heading as='h1'>
      {formataEmReais(total)}
    </Heading>
  )
}
