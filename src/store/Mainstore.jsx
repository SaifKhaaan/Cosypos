import { create } from 'zustand';

const useStore = create((set) => ({
  categories: [
    {
      id: 1,
      name: 'Breakfast',
      icon: 'fa-coffee',
      items: [
        { id: 1, title: 'Pancakes', price: 5.50, quantity: 0 },
        { id: 2, title: 'Omelette', price: 4.75, quantity: 0 },
      ],
    },
    {
      id: 2,
      name: 'Soups',
      icon: 'fa-utensil-spoon',
      items: [
        { id: 3, title: 'Tomato Soup', price: 3.50, quantity: 0 },
        { id: 4, title: 'Chicken Noodle Soup', price: 4.25, quantity: 0 },
      ],
    },
    {
      id: 3,
      name: 'Pasta',
      icon: 'fa-pizza-slice',
      items: [
        { id: 5, title: 'Spaghetti Bolognese', price: 8.00, quantity: 0 },
        { id: 6, title: 'Fettuccine Alfredo', price: 7.75, quantity: 0 },
      ],
    },
    {
      id: 4,
      name: 'Sushi',
      icon: 'fa-fish',
      items: [
        { id: 7, title: 'California Roll', price: 9.00, quantity: 0 },
        { id: 8, title: 'Salmon Nigiri', price: 10.50, quantity: 0 },
      ],
    },
    {
      id: 5,
      name: 'Main Course',
      icon: 'fa-drumstick-bite',
      items: [
        { id: 9, title: 'Fish and Chips', price: 7.50, quantity: 0 },
        { id: 10, title: 'Roast Chicken', price: 12.75, quantity: 0 },
      ],
    },
    {
      id: 6,
      name: 'Desserts',
      icon: 'fa-ice-cream',
      items: [
        { id: 11, title: 'Cheesecake', price: 5.75, quantity: 0 },
        { id: 12, title: 'Chocolate Cake', price: 5.50, quantity: 0 },
      ],
    },
    {
      id: 7,
      name: 'Drinks',
      icon: 'fa-coffee',
      items: [
        { id: 13, title: 'Coffee', price: 2.50, quantity: 0 },
        { id: 14, title: 'Orange Juice', price: 3.00, quantity: 0 },
      ],
    },
    {
      id: 8,
      name: 'Alcohol',
      icon: 'fa-wine-glass-alt',
      items: [
        { id: 15, title: 'Red Wine', price: 8.50, quantity: 0 },
        { id: 16, title: 'Beer', price: 4.50, quantity: 0 },
      ],
    }, {
    id: 9,
    name: 'Burgers',
    icon: 'fa-hamburger',
    items: [
      { id: 17, title: 'Beef Burger', price: 6.50, quantity: 0 },
      { id: 18, title: 'Chicken Burger', price: 6.00, quantity: 0 },
    ],
  },
  {
    id: 10,
    name: 'Pizza',
    icon: 'fa-pizza-slice',
    items: [
      { id: 19, title: 'Pepperoni Pizza', price: 9.00, quantity: 0 },
      { id: 20, title: 'Veggie Pizza', price: 8.50, quantity: 0 },
    ],
  },
  {
    id: 11,
    name: 'Salads',
    icon: 'fa-leaf',
    items: [
      { id: 21, title: 'Caesar Salad', price: 5.50, quantity: 0 },
      { id: 22, title: 'Greek Salad', price: 6.00, quantity: 0 },
    ],
  },
  {
    id: 12,
    name: 'Tacos',
    icon: 'fa-taco',
    items: [
      { id: 23, title: 'Beef Taco', price: 4.00, quantity: 0 },
      { id: 24, title: 'Chicken Taco', price: 3.75, quantity: 0 },
    ],
  },
  {
    id: 13,
    name: 'Appetizers',
    icon: 'fa-utensils',
    items: [
      { id: 25, title: 'Spring Rolls', price: 4.25, quantity: 0 },
      { id: 26, title: 'Mozzarella Sticks', price: 5.00, quantity: 0 },
    ],
  },
  {
    id: 14,
    name: 'Smoothies',
    icon: 'fa-blender',
    items: [
      { id: 27, title: 'Berry Blast', price: 4.50, quantity: 0 },
      { id: 28, title: 'Mango Smoothie', price: 4.75, quantity: 0 },
    ],
  },
  {
    id: 15,
    name: 'Grill',
    icon: 'fa-fire',
    items: [
      { id: 29, title: 'Grilled Salmon', price: 12.00, quantity: 0 },
      { id: 30, title: 'Grilled Vegetables', price: 7.00, quantity: 0 },
    ],
  },
  {
    id: 16,
    name: 'Wraps',
    icon: 'fa-bread-slice',
    items: [
      { id: 31, title: 'Chicken Wrap', price: 5.50, quantity: 0 },
      { id: 32, title: 'Veggie Wrap', price: 5.00, quantity: 0 },
    ],
  },
  {
    id: 17,
    name: 'Seafood',
    icon: 'fa-fish',
    items: [
      { id: 33, title: 'Grilled Shrimp', price: 13.00, quantity: 0 },
      { id: 34, title: 'Crab Cakes', price: 11.00, quantity: 0 },
    ],
  },
  {
    id: 18,
    name: 'Ice Cream',
    icon: 'fa-ice-cream',
    items: [
      { id: 35, title: 'Vanilla Scoop', price: 3.00, quantity: 0 },
      { id: 36, title: 'Chocolate Sundae', price: 4.25, quantity: 0 },
    ],
  },
  ],
  orders: [],
//   transactions: [], 
   // Initialize transactions as an empty array
    transactions: [  // Initialize transactions with a demo transaction
    {
      id: 0,
      name: "Demo Customer",
      items: [
        { id: 1, title: "Pancakes", price: 5.50, quantity: 2 },
        { id: 4, title: "Chicken Noodle Soup", price: 4.25, quantity: 1 },
      ],
      subtotal: 15.25,
      tax: 1.53,
      total: 16.78,
      date: new Date().toLocaleString(),
    }
  ],

  // Function to update item quantity within categories
  updateItemQuantity: (categoryId, itemId, delta) =>
    set((state) => {
      const updatedCategories = state.categories.map((category) => {
        if (category.id === categoryId) {
          const updatedItems = category.items.map((item) => {
            if (item.id === itemId) {
              const newQuantity = Math.max(0, item.quantity + delta);
              return { ...item, quantity: newQuantity };
            }
            return item;
          });
          return { ...category, items: updatedItems };
        }
        return category;
      });

      // Filter out items with quantity 0 from the orders
      const updatedOrders = state.orders.filter(orderItem => {
        const foundItem = updatedCategories.flatMap(c => c.items).find(i => i.id === orderItem.id);
        return foundItem && foundItem.quantity > 0;
      });

      return { categories: updatedCategories, orders: updatedOrders };
    }),

  // Function to add a new category
  addCategory: (name, icon) => set((state) => {
    const newCategory = {
      id: state.categories.length + 1,
      name,
      icon,
      items: [],
    };
    return { categories: [...state.categories, newCategory] };
  }),

  // Function to delete a category by id
  deleteCategory: (categoryId) => set((state) => ({
    categories: state.categories.filter((category) => category.id !== categoryId),
  })),

  // Function to edit a category's name or icon by id
  editCategory: (categoryId, newName, newIcon) =>
    set((state) => {
      const updatedCategories = state.categories.map((category) =>
        category.id === categoryId ? { ...category, name: newName, icon: newIcon } : category
      );
      return { categories: updatedCategories };
    }),

  // Function to add a new item to a category
  addItem: (categoryId, title, price) =>
    set((state) => {
      const updatedCategories = state.categories.map((category) => {
        if (category.id === categoryId) {
          const newItem = {
            id: category.items.length > 0 ? Math.max(...category.items.map(item => item.id)) + 1 : 1, // Ensure unique ID
            title,
            price,
            quantity: 0,
          };
          return { ...category, items: [...category.items, newItem] };
        }
        return category;
      });
      return { categories: updatedCategories };
    }),

  // Function to delete an item by id within a category
  deleteItem: (categoryId, itemId) =>
    set((state) => {
      const updatedCategories = state.categories.map((category) => {
        if (category.id === categoryId) {
          const updatedItems = category.items.filter((item) => item.id !== itemId);
          return { ...category, items: updatedItems };
        }
        return category;
      });
      return { categories: updatedCategories };
    }),

 
// Function to edit an item’s details by ID within a category

  // editItem: (categoryId, itemId, newTitle, newPrice) =>
  //   set((state) => {
  //     const updatedCategories = state.categories.map((category) => {
  //       if (category.id === categoryId) {
  //         const updatedItems = category.items.map((item) =>
  //           item.id === itemId ? { ...item, title: newTitle, price: newPrice } : item
  //         );
  //         return { ...category, items: updatedItems };
  //       }
  //       return category;
  //     });
  //     return { categories: updatedCategories };
  //   }),

editItem: (categoryId, itemId, newTitle, newPrice) =>
  set((state) => {
    const updatedCategories = state.categories.map((category) => {
      if (category.id === categoryId) {
        const updatedItems = category.items.map((item) =>
          item.id === itemId
            ? { ...item, title: newTitle, price: parseFloat(newPrice) }
            : item
        );
        return { ...category, items: updatedItems };
      }
      return category;
    });
    return { categories: updatedCategories };
  }),


  // Function to add an order
//   addOrder: (item,items, subtotal = 0, tax = 0, total = 0) => set((state) => {
//     const newOrder = { ...item, id: state.orders.length + 1 }; // Unique ID
//     return { orders: [...state.orders, newOrder] };
//   }),

  // Function to delete an order item by ID
  deleteOrder: (orderId) => set((state) => {
    const orderToDelete = state.orders.find((order) => order.id === orderId);
    if (orderToDelete) {
      // Update quantity in categories to zero
      const updatedCategories = state.categories.map((category) => {
        const updatedItems = category.items.map((item) => {
          if (item.title === orderToDelete.title) {
            return { ...item, quantity: 0 }; // Set quantity to zero
          }
          return item;
        });
        return { ...category, items: updatedItems };
      });

      return {
        orders: state.orders.filter((order) => order.id !== orderId),
        categories: updatedCategories,
      };
    }
    return state; // Return unchanged state if no order found
  }),
    isModalOpen: false,
  toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),



  addOrder: (items, subtotal, tax, total) => set((state) => {
  const newOrderId = state.orders.length + 1; // Generate a unique order ID
  const newOrder = {
    id: newOrderId,
    items,
    subtotal:total,
    tax,
    // .toFixed(2) || 0,
    total, 
    // :total.toFixed(2) || 0,
  };
  return { orders: [...state.orders, newOrder] };
}),




confirmOrder: (customerName, orderId, items, subtotal, tax, total) => set((state) => {
  const newTransaction = {
    id: orderId,
    name: customerName,
    items,
    subtotal,
    tax,
    total,
    date: new Date().toLocaleString(),  // Store confirmation date and time
  };

  // Reset the quantity of each item in categories
  const updatedCategories = state.categories.map((category) => {
    const resetItems = category.items.map((item) => ({ ...item, quantity: 0 })); // Reset quantity to 0
    return { ...category, items: resetItems }; // Return updated category with reset items
  });

  // Return the updated state with new transaction and reset categories
  return {
    transactions: [...state.transactions, newTransaction], // Add new transaction to the list
    categories: updatedCategories,  // Update categories with reset quantities
    isModalOpen: false,  // Close the modal after confirmation
  };
}),



 





}));

export default useStore;
