/* ===============================================================
     CARRITO
  =============================================================== */
class Carrito {

    //Anadir Producto
    comprarProducto(e) {
        e.preventDefault();
        if (e.target.classList.contains('agregar-carrito')) {

            const producto = e.target.parentElement.parentElement;
            this.leerDatosProducto(producto);     
        }
    }


    leerDatosProducto(producto) {

        const infoProducto = {

            imagen: producto.querySelector('img'),
            titulo: producto.querySelector('h6'),
            precio: producto.querySelector('.precio span'),
            id: producto.querySelector('a').getAttribute('data-id'),
            cantidad: 1

        }
        this.insertarCarrito(infoProducto)
    }

    //Muestra producto seleccionado en carrito
    insertarCarrito(producto){
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="" width=60>
            </td>
            <td>${producto.titulo}</td>
            <td>${producto.precio}</td>
            <td>
                <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
            </td>
        `;
        console.log(producto.imagen);
        console.log(producto.titulo);
        console.log(producto.precio);

        listaProductos.appendChild(row);
    }
}