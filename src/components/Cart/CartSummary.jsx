import { useCart } from "../../context/CartContext"
import "./Cart.css"

export const CartSummary = () => {
  const { cart, getCartTotal, clearCart, checkout } = useCart()
  if (!cart.length) return null
  return (
    <div className="cart-summary">
      <h3>Total: <span className="cart-total">${getCartTotal()}</span></h3>
      <div className="cart-actions">
        <button className="btn-secondary" onClick={clearCart}>Vaciar carrito</button>
        <button className="btn-primary" onClick={checkout}>Finalizar compra 🎉</button>
      </div>
    </div>
  )
}