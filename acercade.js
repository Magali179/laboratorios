console.log("Script cargado correctamente");

const btnLeerMas = document.getElementById('btnLeerMas');
console.log("Boton:", btnLeerMas);

if (btnLeerMas) {
    const cvCompleto = document.querySelector('.cv-completo');
    console.log("CV completo:", cvCompleto);
    
    btnLeerMas.onclick = function() {
        if (cvCompleto.style.display === 'none' || cvCompleto.style.display === '') {
            cvCompleto.style.display = 'block';
            btnLeerMas.textContent = 'Leer menos';
        } else {
            cvCompleto.style.display = 'none';
            btnLeerMas.textContent = 'Leer más';
        }
    };
}


<article>
          <h3>Mis hobbies</h3>
          <p class="sangria">
            En mi vida diaria hay varias actividades que me gustan realizar.
            Pero las dos más relevantes son: una rutina semanal de entrenamiento
            físico y el aprendizaje constante de nuevos conociminetos de temas
            de interes personal y profesional. Partiendo de la base de que me
            dedico a la docencia, siempre estoy en la búsqueda de nuevas
            herramientas y recursos que me permitan mejorar mi desempeño laboral
            y enriquecer mi intelecto. Por dicho motivo, suelo realizar cursos
            de formación y capacitaciones, desde hace años. Ya que la educación
            es un proceso dinámico y en constante evolución. Esa busqueda
            constante me llevó a descubrir el mundo de la programación web. Así
            fue como comencé a aprender HTML y CSS, y me fascinó la idea de
            crear páginas web interactivas y atractivas. Disfruto mucho del
            proceso de diseño y desarrollo de sitios web, y me encanta ver cómo
            mis ideas cobran vida en la pantalla. Así fue como comencé a dar mis
            primeros pasos en una Tecnicatura en la Universidad Nacional del
            Comahue.
          </p>
        </article>