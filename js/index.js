import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";
 
//Función que crea todas las tarjetas de producto a partir del JSON
const renderizarProductos = () => {
    const contenedor = document.getElementById("contenedor-tarjetas");
 
    fetch("./data/productos.json")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((producto) => {
 
                // Creo la tarjeta y sus partes
                const tarjeta = document.createElement("article");
                tarjeta.classList.add("card", "text-dark");
 
                const imagen = document.createElement("img");
                imagen.src = `./${producto.img}`;
                imagen.alt = producto.nombre;
 
                const titulo = document.createElement("h3");
                titulo.textContent = producto.nombre;
 
                const descripcion = document.createElement("p");
                descripcion.textContent = producto.descripcion;
 
                const precio = document.createElement("p");
                precio.textContent = `$${producto.precio}`;
 
                const boton = document.createElement("button");
                boton.classList.add("btn", "bg-secondary", "text-primary");
                boton.textContent = "Agregar al carrito";
 
                // El evento click usa el producto de esta vuelta del for each
                boton.addEventListener("click", () => agregarAlCarrito(producto));
 
                // Armo la tarjeta completa
                tarjeta.appendChild(imagen);
                tarjeta.appendChild(titulo);
                tarjeta.appendChild(descripcion);
                tarjeta.appendChild(precio);
                tarjeta.appendChild(boton);
 
                contenedor.appendChild(tarjeta);
            });
        })
        .catch((error) => console.log(error));
};
 
// Espero a que el HTML esté completamente cargado antes de tocar el DOM
document.addEventListener("DOMContentLoaded", () => {
    const carrito = obtenerCarrito();
    actualizarContador(carrito);
    renderizarProductos();
});
 