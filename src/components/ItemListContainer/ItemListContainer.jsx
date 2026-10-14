import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"

export const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const { category } = useParams()

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          setProducts(data.filter((p) => p.category === category))
        } else {
          setProducts(data)
        }
      })
  }, [category])

  return (
    <section>
      <h1>{category ? `Categoría: ${category}` : "Todos los productos"}</h1>
      <ItemList products={products} />
    </section>
  )
}