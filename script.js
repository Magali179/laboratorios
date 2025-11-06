// Crear un archivo script.js

// - Vincular el archivo al HTML del formulario

// - Añadir interactividad: Todo lo cargado en el formulario debe reflejarse en 
// la tabla inferior al terminar de rellenar cada campo (sin necesidad de botones)

// - En la página de "Acerca de" hacer un botón de "Leer más". Deberá mostrarse el
//  currículum de manera abreviada y al hacer clic en el botón de leer más, 
// deberá revelarse el CV completo (rellenar con Lorem Ipsum si es necesario)

// Obtener referencias a los campos del formulario
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const correo = document.getElementById('correo');
const tel = document.getElementById('tel');
const edad = document.getElementById('edad');
const direccion = document.getElementById('direc'); // Nota: el ID en HTML es 'direc'
const provincia = document.getElementById('provincia');
const codigop = document.getElementById('codigopostal'); // Nota: el ID en HTML es 'codigopostal'
const selectProvincia = document.querySelector('select[name="provincia"]');
const radioContact = document.querySelectorAll('input[name="contact"]');
const checkboxSuscrip = document.querySelectorAll('input[name="suscrip"]');

// Obtener referencias a las celdas de la tabla
const tablaCeldas = document.querySelectorAll('tbody td:nth-child(2)');

// Función para actualizar la tabla
function actualizarTabla() {
    console.log("Actualizando tabla...");
    
    // Actualizar campos de texto simples
    tablaCeldas[0].textContent = nombre.value;
    tablaCeldas[1].textContent = apellido.value;
    tablaCeldas[2].textContent = correo.value;
    tablaCeldas[3].textContent = tel.value;
    tablaCeldas[4].textContent = edad.value;
    tablaCeldas[5].textContent = direccion.value;
    
    // Actualizar provincia (combinar input text y select)
    const provinciaTexto = provincia.value || selectProvincia.value;
    tablaCeldas[6].textContent = provinciaTexto;
    
    tablaCeldas[7].textContent = codigop.value;
    
    // Actualizar preferencia de contacto (radio buttons)
    let contactoSeleccionado = '';
    radioContact.forEach(radio => {
        if (radio.checked) {
            const textoContacto = radio.nextSibling.textContent.trim();
            contactoSeleccionado = textoContacto;
        }
    });
    tablaCeldas[8].textContent = contactoSeleccionado;
    
    // Actualizar preferencia de suscripción (checkboxes)
    let suscripcionesSeleccionadas = [];
    checkboxSuscrip.forEach(checkbox => {
        if (checkbox.checked) {
            const textoSuscripcion = checkbox.nextSibling.textContent.trim();
            suscripcionesSeleccionadas.push(textoSuscripcion);
        }
    });
    tablaCeldas[9].textContent = suscripcionesSeleccionadas.join(', ');
}

// Agregar event listeners para campos de texto
nombre.addEventListener('input', function() {
    console.log("nombre changed:", this.value);
    actualizarTabla();
});

apellido.addEventListener('input', function() {
    console.log("apellido changed:", this.value);
    actualizarTabla();
});

correo.addEventListener('input', function() {
    console.log("Correo changed:", this.value);
    actualizarTabla();
});

tel.addEventListener('input', function() {
    console.log("tel changed:", this.value);
    actualizarTabla();
});

edad.addEventListener('input', function() {
    console.log("edad changed:", this.value);
    actualizarTabla();
});

direccion.addEventListener('input', function() {
    console.log("direc changed:", this.value);
    actualizarTabla();
});

provincia.addEventListener('input', function() {
    console.log("provincia changed:", this.value);
    actualizarTabla();
});

codigop.addEventListener('input', function() {
    console.log("codigopostal changed:", this.value);
    actualizarTabla();
});

// Agregar event listener para el select (usa 'change' en lugar de 'input')
selectProvincia.addEventListener('change', function() {
    console.log("Provincia seleccionada changed:", this.value);
    actualizarTabla();
});

// Agregar event listeners para radio buttons
radioContact.forEach(radio => {
    radio.addEventListener('change', actualizarTabla);
});

// Agregar event listeners para checkboxes
checkboxSuscrip.forEach(checkbox => {
    checkbox.addEventListener('change', actualizarTabla);
});

// Ejecutar la función al cargar la página para mostrar valores iniciales
actualizarTabla();


