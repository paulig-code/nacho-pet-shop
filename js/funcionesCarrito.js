// Este archivo se encarga de la lógica de manipular el array del carrito
// (agregar, eliminar, vaciar) y de avisarle al storage que persista los cambios.

import { 
    guardarCarrito, 
    obtenerCarrito, 
    vaciarCarritoStorage 
} from "./storage.js";

import { actualizarContador, mostrarMensaje } from "./ui.js";

// Agrega un producto al carrito.
export const agregarAlCarrito = (producto) => {
    const carrito = obtenerCarrito();

    carrito.push(producto);
    guardarCarrito(carrito);

    actualizarContador(carrito);
    mostrarMensaje(`${producto.nombre} agregado al carrito 🛒`);
};

// Elimina un producto del carrito según su posición (índice) en el array.
export const eliminarProducto = (indice) => {
    const carrito = obtenerCarrito();

    carrito.splice(indice, 1);
    guardarCarrito(carrito);

    actualizarContador(carrito);
    mostrarMensaje("Producto eliminado del carrito");
};

// Vacía el carrito por completo.
export const vaciarCarrito = () => {
    vaciarCarritoStorage();

    actualizarContador([]);
    mostrarMensaje("Carrito vaciado");
};