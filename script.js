// var nombre = document.getElementById("nombre").value;
// console.log(nombre);

nombre.addEventListener('input', function() {
        console.log("Input changed:", this.value);
    });

apellido.addEventListener('input', function() {
        console.log("Input changed:", this.value);
    });