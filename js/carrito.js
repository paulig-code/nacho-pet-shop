import { eliminarProducto, vaciarCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

const renderizarCarrito = () => {
    const carrito = obtenerCarrito();

    const contenedor = document.getElementById("contenedor-carrito");
    const divAcciones = document.getElementById("acciones-carrito");

    contenedor.innerHTML = "";
    divAcciones.innerHTML = "";

    // Si no hay productos, muestro un mensaje y corto la función acá.
    if (!carrito.length) {
        const mensaje = document.createElement("p");
        mensaje.classList.add("mensaje-carrito-vacio");
        mensaje.textContent = "Tu carrito está vacío 🐾";
        contenedor.appendChild(mensaje);
        return;
    }

    // Recorro el carrito y armo una tarjeta por cada producto.
    // Uso el parámetro opcional "index" del forEach para saber qué posición
    // eliminar cuando se haga click en el botón de cada tarjeta.
    carrito.forEach((producto, index) => {

        const tarjeta = document.createElement("article");
        tarjeta.classList.add("card", "text-dark");

        const imagen = document.createElement("img");
        imagen.src = `../${producto.img}`;
        imagen.alt = producto.nombre;

        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;

        const precio = document.createElement("p");
        precio.textContent = `$${producto.precio}`;

        const btnEliminar = document.createElement("button");
        btnEliminar.classList.add("btn", "bg-secondary", "text-primary");
        btnEliminar.textContent = "Eliminar";

        btnEliminar.addEventListener("click", () => {
            eliminarProducto(index);
            renderizarCarrito(); // vuelvo a pintar todo con la info actualizada
        });

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(btnEliminar);

        contenedor.appendChild(tarjeta);
    });

    // Como hay productos, agrego el botón de vaciar carrito.
    const btnVaciar = document.createElement("button");
    btnVaciar.classList.add("btn", "bg-secondary", "text-dark");
    btnVaciar.textContent = "Vaciar carrito";

    btnVaciar.addEventListener("click", () => {
        vaciarCarrito();
        renderizarCarrito();
    });

    divAcciones.appendChild(btnVaciar);
};

document.addEventListener("DOMContentLoaded", () => {
    const carrito = obtenerCarrito();
    actualizarContador(carrito);
    renderizarCarrito();
});