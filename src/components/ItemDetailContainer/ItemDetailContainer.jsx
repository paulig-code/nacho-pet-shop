import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../data/productos"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {
  const { id } = useParams()
  const [itemDetail, setItemDetail] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setItemDetail(null)
    setLoading(true)
    setItemDetail(getProductById(id))
    setLoading(false)
  }, [id])

  if (loading) return <p>Cargando...</p>
  if (!itemDetail) return <p>Producto no encontrado</p>

  return (
    <section>
      <h1>Detalle del producto</h1>
      <div className="products-container">
        <ItemDetail item={itemDetail} />
      </div>
    </section>
  )
}