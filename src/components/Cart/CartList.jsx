import { useCart } from "../../context/CartContext"
import { CartItem } from "./CartItem"
import "./Cart.css"

export const CartList = () => {
  const { cart } = useCart()
  if (!cart.length) return <p className="cart-empty">El carrito está vacío 🐾</p>
  return (
    <div className="cart-list">
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  )
}