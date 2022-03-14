import { useCarrinho } from 'contexts/carrinho'

import { formataEmReais } from 'helpers'

export default function C() {
  const { items, setItems } = useCarrinho();

  function handleDeletaItem(
    e: React.MouseEvent<HTMLLIElement>, id: number
  ) {
    if(e.detail === 3) {
      const restantes = items.filter(i => i.id !== id);
      setItems(restantes);
    }
  }

  return (
    <ol>
      {items.map(i => (
        <li key={i.id} onClick={(e) => handleDeletaItem(e, i.id)}>
          {i.nome} {i.quantidade}x{formataEmReais(i.preco)} = <strong>{formataEmReais(i.total)}</strong>
        </li>
      ))}
    </ol>
  )

}
