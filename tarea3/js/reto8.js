const inventario = [];

function agregarAccesorio() {
    const nombre = document.getElementById('nombre').value;
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const precio = parseFloat(document.getElementById('precio').value);

    if (nombre === '' || isNaN(cantidad) || cantidad <= 0 || isNaN(precio) || precio <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Debe completar todos los datos',
            showClass: {
                popup: `animate_animated animate__bounceIn`
            },
            hideClass: {
                popup: `animate_animated animate__bounceOut`
            }
        });
    } else {
        inventario.push({ nombre, cantidad, precio });

        const selectAccesorio = document.getElementById('seleccionarAccesorio');
        const option = document.createElement('option');
        option.value = nombre;
        option.text = nombre;
        selectAccesorio.appendChild(option);

        borrar();

        Swal.fire({
            icon: 'success',
            title: 'Accesorio agregado al inventario',
            showClass: {
                popup: `animate_animated animate__bounceIn`
            },
            hideClass: {
                popup: `animate_animated animate__bounceOut`
            }
        });
    }
}

function consultarInventario() {
    const nombreSeleccionado = document.getElementById('seleccionarAccesorio').value;
    const resultado = document.getElementById('resultado');

    const accesorioSeleccionado = inventario.find(item => item.nombre === nombreSeleccionado);

    if (accesorioSeleccionado) {
        const { nombre, cantidad, precio } = accesorioSeleccionado;
        resultado.innerHTML = `
            <h3>Detalle del accesorio</h3>
            <p>Nombre: ${nombre}</p>
            <p>Cantidad: ${cantidad}</p>
            <p>Precio Unitario: ₡${precio}</p>


        `;
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Por favor Primero seleccione un accesorio del inventario',
            showClass: {
                popup: `animate_animated animate__bounceIn`
            },
            hideClass: {
                popup: `animate_animated animate__bounceOut`
            }
        });
    }
}

function borrar() {
    document.getElementById('nombre').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('precio').value = '';
    console.log("Borrado exitoso");
}

function recargarPagina() {
    location.reload();
}
