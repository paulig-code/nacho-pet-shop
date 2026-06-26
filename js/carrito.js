import { eliminarProducto, vaciarCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

const renderizarCarrito = () => {
    const carrito = obtenerCarrito();

    const contenedor = document.getElementById("contenedor-carrito");
    const divAcciones = document.getElementById("acciones-carrito");
    const divResumen = document.getElementById("resumen-carrito");

    contenedor.innerHTML = "";
    divAcciones.innerHTML = "";
    divResumen.innerHTML = "";

    // Si no hay productos, muestro un mensaje y corto la función acá.
    if (!carrito.length) {
        const mensaje = document.createElement("p");
        mensaje.classList.add("mensaje-carrito-vacio");
        mensaje.textContent = "Tu carrito está vacío 🐾";
        contenedor.appendChild(mensaje);
        return;
    }

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
            renderizarCarrito();
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

    // Calculo el total a pagar sumando el precio de cada producto del carrito.
    // reduce recorre el array y va acumulando un valor: empieza en 0 (el acumulador)
    // y en cada vuelta le suma el precio del producto actual.
    const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);

    const parrafoTotal = document.createElement("p");
    parrafoTotal.classList.add("total-carrito");
    parrafoTotal.textContent = `Total a pagar: $${total}`;

    divResumen.appendChild(parrafoTotal);
};

document.addEventListener("DOMContentLoaded", () => {
    const carrito = obtenerCarrito();
    actualizarContador(carrito);
    renderizarCarrito();
});