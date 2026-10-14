import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {
  const { id } = useParams()
  const [itemDetail, setItemDetail] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setItemDetail(null)
    setLoading(true)
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        setItemDetail(data.find((p) => p.id === parseInt(id)))
        setLoading(false)
      })
  }, [id])

  if (loading) return <p>Cargando...</p>
  if (!itemDetail) return <p>Producto no encontrado</p>

  return (
    <section>
      <h1>Detalles del producto</h1>
      <div className="products-container">
        <ItemDetail item={itemDetail} />
      </div>
    </section>
  )
}