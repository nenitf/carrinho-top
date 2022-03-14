import { createContext, useState, useEffect, useContext, ReactNode } from 'react';

export interface Item {
  id: number
  nome: string
  preco: number
  quantidade: number
  total: number
}

interface CarrinhoContextData {
  total: number
  items: Item[]
  setItems: (p: Item[]) => void
}

const CarrinhoContext = createContext<CarrinhoContextData>({} as CarrinhoContextData);

export function CarrinhoProvider({ children }: { children: ReactNode }) {
  const [ items, setItems ] = useState<Item[]>([])
  const [ total, setTotal ] = useState(0)

  useEffect(() => {
    const storagedItems = localStorage.getItem('rancho:items');

    if (storagedItems) {
      setItems(JSON.parse(storagedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('rancho:items', JSON.stringify(items))

    const total = items
      .reduce((acc, item) => acc + item.total, 0)

    setTotal(total)
  }, [items]);

  return (
    <CarrinhoContext.Provider value={{
      total,
      items,
      setItems,
      }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export function useCarrinho() {
  const context = useContext(CarrinhoContext);

  return context;
}
