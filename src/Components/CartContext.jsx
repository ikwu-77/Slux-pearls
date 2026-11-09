import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('sluxCart')) || []
    } catch {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('sluxCart', JSON.stringify(items))
    } catch {
      /* storage unavailable, the cart still works for this visit */
    }
  }, [items])

  function addItem(item) {
    setItems((list) => {
      const found = list.find((i) => i.key === item.key)
      if (found) {
        return list.map((i) => (i.key === item.key ? { ...i, qty: i.qty + item.qty } : i))
      }
      return [...list, item]
    })
  }

  function setQty(key, qty) {
    setItems((list) => list.map((i) => (i.key === key ? { ...i, qty: Math.max(1, qty) } : i)))
  }

  function removeItem(key) {
    setItems((list) => list.filter((i) => i.key !== key))
  }

  function clear() {
    setItems([])
  }

  const count = items.reduce((n, i) => n + i.qty, 0)

  return (
    <CartContext.Provider value={{ items, addItem, setQty, removeItem, clear, count }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}