import "./Item.css"

export const Item = ({ name, price, description, image, children }) => {
  return (
    <article className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
      {children}
    </article>
  )
}
