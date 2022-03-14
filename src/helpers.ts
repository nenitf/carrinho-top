export function formataEmReais(valor: number) {
  return new Intl.NumberFormat('pt', { style: 'currency', currency: 'BRL'}).format(valor)
}
