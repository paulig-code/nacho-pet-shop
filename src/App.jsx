import { Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartView } from "./components/Cart/CartView"

export const App = () => {
  return (
    <CartProvider>
      <div className="app-wrapper">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartView />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}