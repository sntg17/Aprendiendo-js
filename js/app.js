


let nombreUsuario = "Carlos";
let edadUsuario = 18;
const institucion = "Centro de Formación";

console.log(nombreUsuario);
console.log(edadUsuario);
console.log(institucion);


let nombrePrueba = "Camiseta"; // String: texto
let precioPrueba = 75000; // Number: número
let disponiblePrueba = true; // Boolean: verdadero/falso
let categoriasPrueba = ["Ropa", "Accesorios"]; // Array
let productoPrueba = { nombre: "Buso", precio: 120000 }; // Object
let observacion = null; // ausencia intencional de valor


let precioOp = 50000;
let cantidadOp = 3;
let subtotalOp = precioOp * cantidadOp;
let descuentoOp = 10000;
let totalOp = subtotalOp - descuentoOp;

console.log("Subtotal operador:", subtotalOp);
console.log("Total operador:", totalOp);


let edadPrueba = 20;
if (edadPrueba >= 18) {
    console.log("Puede ingresar");
} else {
    console.log("No puede ingresar");
}


function saludar() {
    alert("Bienvenidos a nuestra página");
}


function calcularTotalDemo(precio, cantidad) {
    return precio * cantidad;
}
let resultadoDemo = calcularTotalDemo(25000, 3);
console.log("Resultado función calcularTotalDemo:", resultadoDemo);


const listaProductos = ["Camiseta", "Pantalón", "Buso", "Gorra"];
console.log("Primer producto:", listaProductos[0]);

listaProductos.forEach(function(producto) {
    console.log("Producto en arreglo:", producto);
});


const itemObjeto = {
    nombre: "Camiseta",
    precio: 70000,
    categoria: "Ropa",
    disponible: true
};
console.log("Objeto nombre:", itemObjeto.nombre);
console.log("Objeto precio:", itemObjeto.precio);


const botonCambiar = document.getElementById("btnCambiar");
if (botonCambiar) {
    botonCambiar.addEventListener("click", function() {
        alert("Hiciste clic en el botón");
    });
}


const elemMensaje = document.getElementById("mensaje");
if (elemMensaje) {
    elemMensaje.textContent = "Ya estoy utilizando JavaScript";
    elemMensaje.style.color = "blue";
}


localStorage.setItem("usuario", "Carlos");
let nombreGuardado = localStorage.getItem("usuario");
console.log("Nombre guardado en LocalStorage:", nombreGuardado);

const objetoCarritoDemo = { nombre: "Camiseta", cantidad: 2 };
localStorage.setItem("carritoDemo", JSON.stringify(objetoCarritoDemo));
const carritoRecuperado = JSON.parse(localStorage.getItem("carritoDemo")) || {};


// 3.3 Catálogo Dinámico
const productosCatalogo = [
    { nombre: "Camiseta", precio: 70000 },
    { nombre: "Buso", precio: 120000 },
    { nombre: "Gorra", precio: 35000 }
];

const contenedorCatalogo = document.getElementById("catalogo");

function mostrarProductosCatalogo() {
    if (!contenedorCatalogo) return;
    contenedorCatalogo.innerHTML = "";
    productosCatalogo.forEach(function(producto) {
        const tarjeta = document.createElement("div");
        const titulo = document.createElement("h3");
        const precio = document.createElement("p");

        titulo.textContent = producto.nombre;
        precio.textContent = "Precio: $" + producto.precio;

        tarjeta.appendChild(titulo);
        tarjeta.appendChild(precio);
        contenedorCatalogo.appendChild(tarjeta);
    });
}
mostrarProductosCatalogo();


const listaNombresBuscador = ["Camiseta", "Buso", "Gorra", "Pantalón", "Chaqueta"];
const campoBuscar = document.getElementById("buscar");
const resultadosBuscador = document.getElementById("resultados");

if (campoBuscar && resultadosBuscador) {
    campoBuscar.addEventListener("input", function() {
        const texto = campoBuscar.value.toLowerCase();
        const encontrados = listaNombresBuscador.filter(function(nombre) {
            return nombre.toLowerCase().includes(texto);
        });

        resultadosBuscador.innerHTML = "";
        encontrados.forEach(function(nombre) {
            const elemento = document.createElement("p");
            elemento.textContent = nombre;
            resultadosBuscador.appendChild(elemento);
        });
    });
}


// 3.5 Formulario
const formularioContacto = document.getElementById("formulario");

if (formularioContacto) {
    formularioContacto.addEventListener("submit", function(evento) {
        evento.preventDefault();

        const nombreInput = document.getElementById("nombre").value.trim();
        const correoInput = document.getElementById("correo").value.trim();
        const respuestaForm = document.getElementById("respuesta");

        if (nombreInput === "" || correoInput === "") {
            respuestaForm.textContent = "Todos los campos son obligatorios";
            return;
        }

        respuestaForm.textContent = "Formulario validado correctamente";
        formularioContacto.reset();
    });
}



const productosTienda = [
    { id: 1, nombre: "Camiseta", precio: 70000 },
    { id: 2, nombre: "Buso", precio: 120000 },
    { id: 3, nombre: "Gorra", precio: 35000 }
];

let carrito = [];


function mostrarProductosTienda() {
    const contenedor = document.getElementById("productos");
    if (!contenedor) return;

    contenedor.innerHTML = "";
    productosTienda.forEach(function(producto) {
        const tarjeta = document.createElement("div");
        const titulo = document.createElement("h3");
        const precio = document.createElement("p");
        const boton = document.createElement("button");

        titulo.textContent = producto.nombre;
        precio.textContent = "$" + producto.precio;
        boton.textContent = "Agregar";

        boton.addEventListener("click", function() {
            agregarProducto(producto.id);
        });

        tarjeta.appendChild(titulo);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(boton);
        contenedor.appendChild(tarjeta);
    });
}


function agregarProducto(id) {
    const producto = productosTienda.find(function(item) {
        return item.id === id;
    });

    const existente = carrito.find(function(item) {
        return item.id === id;
    });

    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1
        });
    }

    mostrarCarrito();
}


function mostrarCarrito() {
    const contenedor = document.getElementById("carrito");
    if (!contenedor) return;

    contenedor.innerHTML = "";
    let total = 0;

    carrito.forEach(function(producto) {
        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;

        const linea = document.createElement("p");
        linea.textContent = producto.nombre + " - Cantidad: " + producto.cantidad + " - Subtotal: $" + subtotal;
        contenedor.appendChild(linea);
    });

    const elemTotal = document.getElementById("total");
    if (elemTotal) {
        elemTotal.textContent = "Total: $" + total;
    }
}


mostrarProductosTienda();
mostrarCarrito();
```[cite: 5, 7, 8, 9, 10, 11, 12, 13, 14]

