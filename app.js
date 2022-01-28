"use strict"

// Botones de control sobre formularios
const boton_insertar=document.querySelector("#añadir");
const boton_editar=document.querySelector("#editar_prod");

// Botones ordenación
const boton_ordenar_precio=document.querySelector("#ordenarPrecio");
const boton_ordenar_fecha=document.querySelector("#ordenarFecha");

// Formularios
const form_añadir=document.querySelector("#añadir_formulario");
const form_editar=document.querySelector("#editar_formulario");
// const form_editar = document.querySelector("#libro-editar");

// Datos de inserción del nuevo producto
const nombre=document.querySelector("#nombre_producto");
const precio=document.querySelector("#precio_producto");
const descripcion=document.querySelector("#descripcion_producto");
const imagen=document.querySelector("#imagen_producto");
const categoria=document.querySelector("#categoria_producto");
const original=document.querySelector("#original");
const boton_añadir=document.querySelector("#añadir_prod");

// Inputs para editar
const editarNombre = document.querySelector("#editarNombre");
const editarPrecio = document.querySelector("#editarPrecio");
const editarDescripcion = document.querySelector("#editarDescripcion");
const editarImagen = document.querySelector("#editarImagen");
const editarCategoria = document.querySelector("#editarCategoria");
const editarOriginal = document.querySelector("#editarOriginal")
const b_editar = document.querySelector("#editar_prod");
// Div editar
const editar_modal=document.querySelector("#editarModal");
// Hidden para modificar fila
const editarFila=document.querySelector("#modificar_fila");

// Tabla productos
const tabla_prod=document.querySelector("#tienda-list");

// Busqueda
const inputBusqueda=document.querySelector("#inputBuscar");
const enviarBusqueda=document.querySelector("#enviarBusqueda");


// Mostrar la busqueda
enviarBusqueda.addEventListener("click",
    (evento)=>{
        evento.preventDefault();
        const producto=Object.values(sessionStorage).map(
			(prod)=>{
				return JSON.parse(prod);
			}
		)
		const filtrarProducto=producto.filter(
			(prod)=>{
				return prod["descripcion"].includes(inputBusqueda.value.trim());
			}
		);
		tabla_prod.innerHTML="";
		filtrarProducto.forEach(
			(prod)=>{
				tabla_prod.appendChild(añadir_prod(prod));
			}
		)
    }
);


// Mostrar el formulario para añadir
boton_insertar.addEventListener("click",
    ()=>{
        if(form_añadir.classList.contains("d-none")){
            form_añadir.classList.remove("d-none");
            form_añadir.classList.add("d-flex");
        }else{
            form_añadir.classList.remove("d-flex");
            form_añadir.classList.add("d-none");
        }
    }
);


// Ordenar por precio (DESCENTE)
boton_ordenar_precio.addEventListener("click",
    ()=>{
        const producto=Object.values(sessionStorage).map(
            (prod)=>{
                return JSON.parse(prod);
            }
        )
		const productoOrdenadoPrecio=producto.sort(
			(a,b)=>{
				return b["precio"]-a["precio"]
			}
		)
		tabla_prod.innerHTML="";
		productoOrdenadoPrecio.forEach(
			(criterio)=>{
				tabla_prod.appendChild(añadir_prod(criterio));
			}
		)
    }
)


// Ordenar por fecha (ASCENDESCENTE)
boton_ordenar_fecha.addEventListener("click",
    ()=>{
        console.log("");
        const producto=Object.values(sessionStorage).map(
            (prod)=>{
                return JSON.parse(prod);
            }
        )
		const productoOrdenadoFecha=producto.sort(
			(a,b)=>{
				return a["fecha"].localeCompare(b["fecha"])
			}
		)
		tabla_prod.innerHTML="";
		productoOrdenadoFecha.forEach(
			(criterio)=>{
				tabla_prod.appendChild(añadir_prod(criterio));
			}
		)
    }
)


// Introducir datos en el formulario de editar
const editar_prod=(tienda)=>{
    return()=>{
        const producto=JSON.parse(sessionStorage.getItem(tienda));
        console.log(tienda);
        console.log(producto);
        editarNombre.value=producto["nombre"];
        editarPrecio.value=producto["precio"];
        editarDescripcion.value=producto["descripcion"];
        editarImagen.value=producto["imagen"];
        editarCategoria.value=producto["categoria"];
        if(producto["original"]===true){
            editarOriginal.checked=true;
        }else{
            editarOriginal.checked=false;
        }
        editarFila.value=tienda;
    }
}


// Añadir un nuevo producto
const añadir_prod=(tienda)=>{
    let nueva_fila=document.createElement("tr");
    nueva_fila.id=tienda["nombre"].toUpperCase().replaceAll(" ","");

    // Td para el nombre del producto
    let col_nombre=document.createElement("td");
    col_nombre.innerText=tienda["nombre"];
    col_nombre.classList.add("text-center","align-middle");
    // Lo meto en el tr
    nueva_fila.appendChild(col_nombre);


    // Td para el precio del producto
    let col_precio=document.createElement("td");
    col_precio.innerText=tienda["precio"];
    col_precio.classList.add("text-center","align-middle");
    // Lo meto en el tr
    nueva_fila.appendChild(col_precio);


    // Td para el descripción del producto
    let col_descripcion=document.createElement("td");
    col_descripcion.innerText=tienda["descripcion"];
    col_descripcion.classList.add("text-center","align-middle");
    // Lo meto en el tr
    nueva_fila.appendChild(col_descripcion);


    // Creo el img para el td del producto
    let imagen_prod=document.createElement("img");
    imagen_prod.src=tienda["imagen"];
    imagen_prod.classList.add("w-50");
    // Td para la imagen del producto
    let col_imagen=document.createElement("td");
    col_imagen.appendChild(imagen_prod);
    col_imagen.classList.add("w-25","text-center","align-middle");
    // Lo meto en el tr
    nueva_fila.appendChild(col_imagen);

    // Td para el descripción del producto
    let col_fecha=document.createElement("td");
    col_fecha.innerText=tienda["fecha"];
    col_fecha.classList.add("text-center","align-middle");
    // Lo meto en el tr
    nueva_fila.appendChild(col_fecha);


    // Td para la categoria del producto
    let col_categoria=document.createElement("td");
    col_categoria.innerText=tienda["categoria"];
    col_categoria.classList.add("text-center","align-middle");
    // Lo meto en el tr
    nueva_fila.appendChild(col_categoria);


    // Creo el img para el td de la originalidad del producto
    let imagen_original=document.createElement("img");;
    if(tienda["original"]===true){
        imagen_original.src="assets/correcto.png";
        imagen_original.classList.add("w-50");
    }else{
        imagen_original.src="assets/incorrecto.png";
        imagen_original.classList.add("w-50");
    }
    // Td para la imagen de la originalidad del producto
    let col_original=document.createElement("td");
    col_original.appendChild(imagen_original);
    col_original.classList.add("div_imagen","text-center","align-middle");
    // Lo meto en el tr
    nueva_fila.appendChild(col_original);


    //====================================================================================================================
    // Boton para comprar el producto
	let botonComprar = document.createElement("a");
	botonComprar.innerText = "Comprar";
	botonComprar.href = "https://www.nbastore.eu/en/?utm_campaign=NBA+-+Pure+Brand+-+EU+-+EN|11568360658&utm_medium=ppc&ks_id=7083_kw25084053&utm_term=nba%20shop&matchtype=e&utm_source=g&target=kwd-96172876&pcrid=478007889025&adposition=&CMP=PPC-NBAStoreBrand&_s=gppc&gclid=Cj0KCQiA_8OPBhDtARIsAKQu0gbQQ0ULiRdtjqw5T1Zthf7sjzUZtYQNeGyepK0_i6WtpEO4QXdNrKAaAuhmEALw_wcB";
    botonComprar.classList.add("btn","btn-primary");

    let col_comprar=document.createElement("td");
    col_comprar.appendChild(botonComprar);
    col_comprar.classList.add("text-center","align-middle");
    // Lo meto en el tr
    nueva_fila.appendChild(col_comprar);


    //====================================================================================================================
    // Boton para editar el producto
	let botonEditar = document.createElement("a");
	botonEditar.innerText = "Editar";
	botonEditar.href = "#";
    botonEditar.addEventListener("click",
        ()=>{
            if(form_editar.classList.contains("d-none")){
                form_editar.classList.remove("d-none");
                form_añadir.classList.add("d-flex");
            }else{
                form_añadir.classList.remove("d-flex");
                form_editar.classList.add("d-none");
            }
        }
    );
    botonEditar.addEventListener("click",editar_prod(nueva_fila.id,nueva_fila))
	botonEditar.classList.add("btn","btn-success");

    let col_editar = document.createElement("td");
	col_editar.appendChild(botonEditar);
	col_editar.classList.add("text-center","align-middle");
    nueva_fila.appendChild(col_editar);


    //====================================================================================================================
    // Boton para borrar el producto
	let botonBorrar = document.createElement("a");
	botonBorrar.innerText = "Borrar";
	botonBorrar.href = "#";
	botonBorrar.classList.add("btn","btn-danger");

    botonBorrar.addEventListener("click",borrarProducto(nueva_fila.id));

    let colBorrar = document.createElement("td");
	colBorrar.appendChild(botonBorrar);
	colBorrar.classList.add("text-center","align-middle");
    nueva_fila.appendChild(colBorrar);

    return nueva_fila;
}



// Botón para añadir nuevo producto
boton_añadir.addEventListener("click",
    (evento)=>{
        evento.preventDefault();
        
        if(nombre.value.trim().length<5){
            mensajeError("Nombre no válido");
        }else if(precio.value.trim()==="" || isNaN(precio.value.trim()) || parseFloat(precio.value.trim())<=0){
            mensajeError("Precio no válido");
        }else if(descripcion.value.trim().length===""){
            mensajeError("Descripción no válida");
        }else if(imagen.value.trim().length===""){
            mensajeError("Imagen no válido");
        }else if(categoria.value.trim().length===""){
            mensajeError("Categoria no válido");
        }else{
            let fecha=new Date();
            let año=fecha.getFullYear();
            let mes=fecha.getMonth()+1;
            let dia=fecha.getDate();

            let fecha_actual=`${año}-`+`${mes}-`+`${dia}`

            let original_bool=false;
            if(original.value==="true"){
                original_bool=true;
            }

            const info_prof={
                "nombre":nombre.value.trim(),
                "precio":precio.value.trim(),
                "descripcion":descripcion.value.trim(),
                "imagen":imagen.value.trim(),
                "fecha":fecha_actual,
                "categoria":categoria.value.trim(),
                "original":original_bool
            };

            const nuevo_prod=añadir_prod(info_prof);
            tabla_prod.appendChild(nuevo_prod);
            sessionStorage.setItem(nombre.value.trim().toUpperCase().replaceAll(" ",""),JSON.stringify(info_prof));
            form_añadir.children[0].reset();
            document.documentElement.scrollTop = document.documentElement.scrollHeight;
            form_añadir.classList.remove("d-flex");
            form_añadir.classList.add("d-none");
			// mensajeOk("Añadido correctamente");
        }
    }
)


b_editar.addEventListener("click",
    (evento)=>{
        evento.preventDefault();

        if(editarNombre.value.trim().length<5){
            mensajeError("Nombre no válido");
        }else if(editarPrecio.value.trim()==="" || isNaN(precio.value.trim()) || parseFloat(precio.value.trim())<=0){
            mensajeError("Precio no válido");
        }else if(editarDescripcion.value.trim().length===""){
            mensajeError("Descripción no válida");
        }else if(editarImagen.value.trim().length===""){
            mensajeError("Imagen no válido");
        }else if(editarCategoria.value.trim().length===""){
            mensajeError("Categoria no válido");
        }else{
            let fecha=new Date();
            let año=fecha.getFullYear();
            let mes=fecha.getMonth()+1;
            let dia=fecha.getDate();

            let fecha_actual=`${año}-`+`${mes}-`+`${dia}`;

            let original="";
            if(editarOriginal.checked==true){
                original=true;
            }else{
                original=false;
            }

            const info_editada_prod={
                "nombre":editarNombre.value.trim(),
                "precio":editarPrecio.value.trim(),
                "descripcion":editarDescripcion.value.trim(),
                "imagen":editarImagen.value.trim(),
                "fecha":fecha_actual,
                "categoria":editarCategoria.value.trim(),
                "original":original
            };


            sessionStorage.removeItem(editarFila.value);
            sessionStorage.setItem(editarNombre.value.trim().toUpperCase().replaceAll(" ",""),JSON.stringify(info_editada_prod));
            tabla_prod.innerHTML="";
            Object.values(sessionStorage).forEach(
                (producto)=>{
                    tabla_prod.appendChild(añadir_prod(JSON.parse(producto)));
                }
            )
            form_editar.classList.remove("d-flex");
            form_editar.classList.add("d-none");
			// mensajeOk("Editado correctamente");
        }
    }
);





// Borrar productos de la tabla
const borrarProducto=(idTr)=>{
    return()=>{
        const borrarTr=document.querySelector(`#${idTr}`);
        borrarTr.remove();
        sessionStorage.removeItem(idTr);
        console.log(borrarTr);
    }
}


if(sessionStorage.length===0){
    tienda.forEach(
        (producto)=>{
            sessionStorage.setItem(producto["nombre"].toUpperCase().replaceAll(" ",""),JSON.stringify(producto));
        }
    )
}

Object.values(sessionStorage).forEach(
    (producto)=>{
        tabla_prod.appendChild(añadir_prod(JSON.parse(producto)));
    }
)