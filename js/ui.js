// Actualiza el número que se ve al lado del ícono del carrito en el header.
// Recibe el carrito por parámetro porque este archivo no sabe cuántos productos hay.
export const actualizarContador = (carrito) => {
    const contador = document.getElementById("contador-carrito");
    if (contador) {
        contador.textContent = carrito.length;
    }
};

// Muestra un mensaje al usuario. Por ahora usa alert(), pero si en el futuro
// se agrega una librería de notificaciones más linda, solo se cambia acá adentro
// y todos los lugares que usan mostrarMensaje se actualizan solos.
export const mostrarMensaje = (mensaje) => {
    alert(mensaje);
};