// zustand store.js
import {create} from 'zustand'

const useOrderStore = create((set) => ({
 
  
 items : [
  {
    id: 1,
    title: 'Fish and chips',
    price: 7.50,
    quantity: 0,
    path: 'Orders → Kitchen',
  },
  {
    id: 2,
    title: 'Roast chicken',
    price: 12.75,
    quantity: 0,
    path: 'Orders → Kitchen',
  },
  {
    id: 3,
    title: 'Fillet steak',
    price: 11.60,
    quantity: 0,
    path: 'Orders → Kitchen',
  },
  {
    id: 4,
    title: 'Beefsteak',
    price: 10.20,
    quantity: 0,
    path: 'Orders → Kitchen',
  },
  {
    id: 5,
    title: 'Roast beef',
    price: 10.50,
    quantity: 0,
    path: 'Orders → Kitchen',
  },
  {
    id: 6,
    title: 'Buffalo wings',
    price: 8.85,
    quantity: 0,
    path: 'Orders → Kitchen',
  },
  {
    id: 7,
    title: 'Lobster',
    price: 13.40,
    quantity: 0,
    path: 'Orders → Kitchen',
  },
  {
    id: 8,
    title: 'Red caviar',
    price: 12.30,
    quantity: 0,
    path: 'Orders → Kitchen',
  },
],

  updateItemQuantity: (id, delta) =>
    set((state) => {
      const updatedItems = [...state.items];
      const index = updatedItems.findIndex((item) => item.id === id);
      if (index !== -1) {
        updatedItems[index].quantity += delta;
        if (updatedItems[index].quantity < 0) {
          updatedItems[index].quantity = 0; // Ensure quantity doesn't go negative
        }
      }
      return { items: updatedItems };
    }),
}));

export default useOrderStore;