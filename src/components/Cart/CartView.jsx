import { CartList } from "./CartList"
import { CartSummary } from "./CartSummary"
import "./Cart.css"

export const CartView = () => {
  return (
    <section className="cart-view">
      <h1>Tu carrito</h1>
      <CartList />
      <CartSummary />
    </section>
  )
}