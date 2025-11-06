// Crear un archivo script.js

// - Vincular el archivo al HTML del formulario

// - Añadir interactividad: Todo lo cargado en el formulario debe reflejarse en 
// la tabla inferior al terminar de rellenar cada campo (sin necesidad de botones)

// - En la página de "Acerca de" hacer un botón de "Leer más". Deberá mostrarse el
//  currículum de manera abreviada y al hacer clic en el botón de leer más, 
// deberá revelarse el CV completo (rellenar con Lorem Ipsum si es necesario)



// var nombre = document.getElementById("nombre").value;
// console.log(nombre);

// Even listeners para campos de texto
nombre.addEventListener('input', function() {
        console.log("Input changed:", this.value);
        actualizarTabla();
    });

apellido.addEventListener('input', function() {
        console.log("Input changed:", this.value);
        actualizarTabla();
    });
correo.addEventListener('input', function() {
        console.log("Input changed:", this.value);
        actualizarTabla();
    })
tel.addEventListener('input', function() {
        console.log("Input changed:", this.value);
        actualizarTabla();
    })
edad.addEventListener('input', function() {
        console.log("Input changed:", this.value);
        actualizarTabla();
    })
direc.addEventListener('input', function() {
        console.log("Input changed:", this.value);
        actualizarTabla();
    })
provincia.addEventListener('input', function() {
        console.log("Input changed:", this.value);
        actualizarTabla();
    })
    // al select provincia
selectProvincia.addEventListener('change', actualizarTabla);
       

codigopostal.addEventListener('input', function() {
        console.log("Input changed:", this.value);
        actualizarTabla();
    })

//even listeners radio button
radioContact.forEach(radio => {
    radio.addEventListener('change', actualizarTabla);
});

// even listeners check boxes
checkboxSuscrip.forEach(checkbox => {
    checkbox.addEventListener('change', actualizarTabla);
});


