// ========================================
// FUNCIONALIDAD FORMULARIO Y PAGINA ACERCA DE

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // VALIDACIÓN AUTOMÁTICA DE CAMPOS
    // ========================================
    
    // Aplicar validación a todos los campos input del formulario
    // Compatible con Chrome, Firefox, Safari, Edge
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('blur', function() {
            // Verificar si el campo es válido
            if (!this.checkValidity()) {
                // Método 1: Intentar con reportValidity (funciona en la mayoría)
                if (typeof this.reportValidity === 'function') {
                    this.reportValidity();
                } else {
                    // Método 2: Fallback para navegadores más antiguos
                    // Agregar clase de error visual
                    this.classList.add('campo-invalido');
                    
                    // Mostrar mensaje de validación personalizado
                    const mensajeError = this.validationMessage;
                    if (mensajeError) {
                        alert(mensajeError);
                    }
                }
            } else {
                // Remover clase de error si el campo es válido
                this.classList.remove('campo-invalido');
            }
        });
        
        // También validar cuando el usuario escribe (opcional, mejora la UX)
        input.addEventListener('input', function() {
            if (this.checkValidity()) {
                this.classList.remove('campo-invalido');
            }
        });
    });
    
    // ========================================
    // BLOQUEAR AVANCE A SIGUIENTE CAMPO
    // ========================================
    
    // Función para prevenir que el usuario avance si el campo actual no es válido
    document.querySelectorAll('input, select, textarea').forEach((campo, index, todosCampos) => {
        
        // Evento cuando intenta salir del campo (Tab, Enter, click en otro campo)
        campo.addEventListener('keydown', function(e) {
            // Si presiona Tab o Enter
            if (e.key === 'Tab' || e.key === 'Enter') {
                // Verificar si el campo actual es válido
                if (!this.checkValidity()) {
                    e.preventDefault(); // Bloquear el avance
                    
                    // Mostrar mensaje de error
                    if (typeof this.reportValidity === 'function') {
                        this.reportValidity();
                    } else {
                        alert('Por favor, complete correctamente este campo antes de continuar.');
                    }
                    
                    // Agregar clase visual de error
                    this.classList.add('campo-invalido');
                    
                    // Mantener el foco en el campo actual
                    this.focus();
                }
            }
        });
        
        // Prevenir click en otro campo si el actual no es válido
        campo.addEventListener('blur', function(e) {
            if (!this.checkValidity() && this.value.trim() !== '') {
                // Si el campo tiene contenido pero es inválido
                setTimeout(() => {
                    this.focus(); // Devolver el foco al campo inválido
                    this.classList.add('campo-invalido');
                }, 0);
            }
        });
        
        // Permitir navegación cuando el campo se corrige
        campo.addEventListener('input', function() {
            if (this.checkValidity()) {
                this.classList.remove('campo-invalido');
            }
        });
    });
    
    // ========================================
    // FUNCIONALIDAD FORMULARIO
    // ========================================
    
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
            
            // Usar el valor del input text de provincia (que tiene el datalist)
            const provinciaTexto = provincia.value || (selectProvincia ? selectProvincia.value : '');
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
        
        // Agregar eventos de input a cada campo de texto de la tabla
        nombre.addEventListener('input', actualizarTabla);
        apellido.addEventListener('input', actualizarTabla);
        correo.addEventListener('input', actualizarTabla);
        tel.addEventListener('input', actualizarTabla);
        edad.addEventListener('input', actualizarTabla);
        direccion.addEventListener('input', actualizarTabla);
        provincia.addEventListener('input', actualizarTabla);
        codigop.addEventListener('input', actualizarTabla);
        
        if (selectProvincia) {
            selectProvincia.addEventListener('change', actualizarTabla);
        }
        
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


