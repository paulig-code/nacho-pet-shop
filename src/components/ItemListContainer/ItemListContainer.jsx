import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProducts, getByCategory } from "../../data/productos"
import { ItemList } from "../ItemList/ItemList"

export const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const { category } = useParams()

  useEffect(() => {
    if (category) {
      setProducts(getByCategory(category))
    } else {
      setProducts(getProducts())
    }
  }, [category])

  return (
    <section>
      <h1>{category ? `Categoría: ${category}` : "Todos los productos"}</h1>
      <ItemList products={products} />
    </section>
  )
}