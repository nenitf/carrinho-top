const itens = [
  {
    id: 1,
    nome: "titulo",
    valor: 1.10,
    quantidade: 2,
    total: 2.20
  },
  {
    id: 2,
    nome: "titulo",
    valor: 1.10,
    quantidade: 2,
    total: 2.20
  },
  {
    id: 3,
    nome: "titulo",
    valor: 1.10,
    quantidade: 2,
    total: 2.20
  },
]

export function Carrinho() {
  const format = (p: number) => new Intl.NumberFormat('pt', { style: 'currency', currency: 'BRL'}).format(p)
  return (
    <ol>
      {itens.map(i => (
        <li key={i.id}>
          {i.nome} {i.quantidade}x{format(i.valor)} = <strong>{format(i.total)}</strong>
        </li>
      ))}
    </ol>
  )

}
