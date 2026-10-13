const products = [
  {
    id: 1,
    name: "Croquetas Premium",
    price: 500,
    category: "alimento",
    image: "/img/croquetas.png",
    description: "Alimento balanceado para perros adultos.",
  },
  {
    id: 2,
    name: "Huesos de cuero",
    price: 150,
    category: "snack",
    image: "/img/huesos.png",
    description: "Snack natural para mantener los dientes limpios.",
  },
  {
    id: 3,
    name: "Pelota de goma",
    price: 200,
    category: "juguete",
    image: "/img/pelota.png",
    description: "Pelota resistente ideal para jugar en el parque.",
  },
  {
    id: 4,
    name: "Collar ajustable",
    price: 350,
    category: "accesorio",
    image: "/img/collar.png",
    description: "Collar de nylon resistente con hebilla de seguridad.",
  },
  {
    id: 5,
    name: "Cama para mascotas",
    price: 900,
    category: "accesorio",
    image: "/img/cama.png",
    description: "Cama acolchada ultra cómoda para el descanso.",
  },
  {
    id: 6,
    name: "Shampoo antipulgas",
    price: 280,
    category: "higiene",
    image: "/img/shampoo.png",
    description: "Shampoo natural con extracto de neem.",
  },
]

export const getProducts = () => products
export const getProductById = (id) => products.find((p) => p.id === parseInt(id))
export const getByCategory = (category) => products.filter((p) => p.category === category)