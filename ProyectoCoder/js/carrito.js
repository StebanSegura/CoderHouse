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
    }

    //Mostrar los productos guardados
    insertarCarrito(producto){
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <img src="${producto.imagen}" width=100>
                </td>
                <td>${producto.titulo}</td>
                <td>${producto.precio}</td>
                <td>
                    <input type="number" class="form-control cantidad" min="1" value=${producto.cantidad}>
                </td>
                <td id='subtotales'>${producto.precio * producto.cantidad}</td>
                <td>
                    <a href="#" class="borrar-producto fas fa-times-circle" style="font-size:30px" data-id="${producto.id}"></a>
                </td>
            `;
            listaProductos.appendChild(row);
        };
    }

}