import { useCart } from "../../context/CartContext"
import "./Cart.css"

export const CartItem = ({ item }) => {
  const { removeItem } = useCart()
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-img" />
      <div className="cart-item-info">
        <h4>{item.name}</h4>
        <p className="cart-item-price">${item.price}</p>
      </div>
      <button className="btn-danger" onClick={() => removeItem(item.id)}>
        Eliminar
      </button>
    </div>
  )
}