import { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider")
  }
  return context
}

export const CartProvider = ({ children }) => {
  const navigate = useNavigate()
  const [cart, setCart] = useState([])

  const isInCart = (item) => cart.some((element) => element.id === item.id)

  const addItem = (item) => {
    if (isInCart(item)) {
      alert("El producto ya existe en el carrito")
      return
    }
    setCart([...cart, item])
    alert("Producto agregado al carrito 🎉")
  }

  const removeItem = (id) => {
    setCart(cart.filter((element) => element.id !== id))
    alert("Producto eliminado ✅")
  }

  const clearCart = () => setCart([])

  const getTotalItems = () => cart.length

  const getCartTotal = () =>
    cart.reduce((acc, element) => acc + element.price, 0)

  const checkout = () => {
    alert("Su compra ha sido realizada 🎉")
    clearCart()
    navigate("/")
  }

  const values = {
    cart,
    addItem,
    removeItem,
    clearCart,
    getTotalItems,
    getCartTotal,
    checkout,
  }

  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  )
}