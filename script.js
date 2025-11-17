// Crear un archivo script.js

// - Vincular el archivo al HTML del formulario

// - Añadir interactividad: Todo lo cargado en el formulario debe reflejarse en 
// la tabla inferior al terminar de rellenar cada campo (sin necesidad de botones)

// - En la página de "Acerca de" hacer un botón de "Leer más". Deberá mostrarse el
//  currículum de manera abreviada y al hacer clic en el botón de leer más, 
// deberá revelarse el CV completo (rellenar con Lorem Ipsum si es necesario)

// ========================================
// FUNCIONALIDAD FORMULARIO Y PAGINA ACERCA DE

document.addEventListener('DOMContentLoaded', function() {
    
    // Verificar si estamos en la pagina del formulario
    const nombre = document.getElementById('nombre');
    
    if (nombre) {
        console.log("Pagina de formulario detectada");
        
        const apellido = document.getElementById('apellido');
        const correo = document.getElementById('correo');
        const tel = document.getElementById('tel');
        const edad = document.getElementById('edad');
        const direccion = document.getElementById('direc');
        const provincia = document.getElementById('provincia');
        const codigop = document.getElementById('codigopostal');
        const selectProvincia = document.querySelector('select[name="provincia"]');
        const radioContact = document.querySelectorAll('input[name="contact"]');
        const checkboxSuscrip = document.querySelectorAll('input[name="suscrip"]');
        
        const tablaCeldas = document.querySelectorAll('tbody td:nth-child(2)');
        
        function actualizarTabla() {
            console.log("Actualizando tabla...");
            
            tablaCeldas[0].textContent = nombre.value;
            tablaCeldas[1].textContent = apellido.value;
            tablaCeldas[2].textContent = correo.value;
            tablaCeldas[3].textContent = tel.value;
            tablaCeldas[4].textContent = edad.value;
            tablaCeldas[5].textContent = direccion.value;
            
            const provinciaTexto = provincia.value || selectProvincia.value;
            tablaCeldas[6].textContent = provinciaTexto;
            
            tablaCeldas[7].textContent = codigop.value;
            
            let contactoSeleccionado = '';
            radioContact.forEach(radio => {
                if (radio.checked) {
                    const textoContacto = radio.nextSibling.textContent.trim();
                    contactoSeleccionado = textoContacto;
                }
            });
            tablaCeldas[8].textContent = contactoSeleccionado;
            
            let suscripcionesSeleccionadas = [];
            checkboxSuscrip.forEach(checkbox => {
                if (checkbox.checked) {
                    const textoSuscripcion = checkbox.nextSibling.textContent.trim();
                    suscripcionesSeleccionadas.push(textoSuscripcion);
                }
            });
            tablaCeldas[9].textContent = suscripcionesSeleccionadas.join(', ');
        }
        //agragar elementos de imput a cada campo de texto de la tabla
        nombre.addEventListener('input', actualizarTabla);
        apellido.addEventListener('input', actualizarTabla);
        correo.addEventListener('input', actualizarTabla);
        
        tel.addEventListener('input', actualizarTabla);
        edad.addEventListener('input', actualizarTabla);
        direccion.addEventListener('input', actualizarTabla);
        provincia.addEventListener('input', actualizarTabla);
        codigop.addEventListener('input', actualizarTabla);
        selectProvincia.addEventListener('change', actualizarTabla);
        
        radioContact.forEach(radio => {
            radio.addEventListener('change', actualizarTabla);
        });
        
        checkboxSuscrip.forEach(checkbox => {
            checkbox.addEventListener('change', actualizarTabla);
        });
        
        actualizarTabla();
    }
    
    // FUNCIONALIDAD LEER MAS - Pagina Acerca de
    
    const btnLeerMas = document.getElementById('btnLeerMas');
    
    if (btnLeerMas) {
        console.log("Pagina Acerca de detectada");
        
        const cvCompleto = document.querySelector('.cv-completo');
        
        btnLeerMas.addEventListener('click', function() {
            console.log('Click en boton Leer mas');
            
            if (cvCompleto.style.display === 'none' || cvCompleto.style.display === '') {
                cvCompleto.style.display = 'block';
                btnLeerMas.textContent = 'Leer menos';
                console.log('Mostrando CV completo');
            } else {
                cvCompleto.style.display = 'none';
                btnLeerMas.textContent = 'Leer mas';
                console.log('Ocultando CV completo');
            }
        });
    }
});


