var modal = document.getElementById("myModal");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
// btn.onclick = function() {
// }

const btnIncrementar = document.querySelector('#btnUp');
const btnDecrementar = document.querySelector('#btnDown');
const num            = document.querySelector('#counter');

const confirmacion   = document.querySelector('#btnConfirm');

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  puntos = 1;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

confirmacion.addEventListener('click', () =>{
  modal.style.display = "none";
})




let puntos = 1;


btnIncrementar.addEventListener( 'click', () => {

    puntos++;
    document.querySelector('#counter').innerHTML = puntos;
    puntos.innerHTML = num;


})
btnDecrementar.addEventListener( 'click', () => {

  puntos--;
  document.querySelector('#counter').innerHTML = puntos;
  puntos.innerHTML = num;


})



function cargarModal(data) {

  modal.style.display = "block";

  document.getElementById("imagen").src = data.imagen
  document.getElementById("titulo").innerHTML = data.titulo
  document.getElementById("desc").innerHTML = data.desc
  document.getElementById("fabricante").innerHTML = data.fabricante
  document.getElementById("madera").innerHTML = data.madera
  document.getElementById("nucleo").innerHTML = data.nucleo
  document.getElementById("counter").innerHTML = puntos
  

}

const varitas = {
  varita_phoenix : {
    imagen: '/assets/varita-HP.jpg',
    titulo: "Phoenix Feather",
    desc: '"La varita elige al mago... no siempre está claro por qué." — Ollivander',
    fabricante: "Fabricante: Garrick Ollivander",
    madera: "Madera: Acebo",
    nucleo: "Nucleo: Plumas de Fénix"
  },
  varita_hermione : {
    imagen: '/assets/varita_Hermione.jpg',
    titulo: "Dragon Heartstring",
    desc: '"La varita elige al mago... no siempre está claro por qué." — Ollivander',
    fabricante: "Fabricante: Garrick Ollivander",
    madera: "Madera: Vine",
    nucleo: "Nucleo: Fibra de corazón de dragón"
  },
  varita_victor : {
    imagen: '/assets/varita-Victor.jpg',
    titulo: "Dragon Heartstring-Carpe",
    desc: '"La varita elige al mago... no siempre está claro por qué." — Ollivander',
    fabricante: "Fabricante: Mykew Gregorovitch",
    madera: "Madera: Carpe",
    nucleo: "Nucleo: Fibra de corazón de dragón"
  },
  varita_malfoy : {
    imagen: '/assets/varita-malfoy.jpg',
    titulo: "Unicorn Hair",
    desc: '"La varita elige al mago... no siempre está claro por qué." — Ollivander',
    fabricante: "Fabricante: Garrick Ollivander",
    madera: "Madera: Hawthorn",
    nucleo: "Nucleo: Cabello de unicornio"
  },
  varita_fleur : {
    imagen: '/assets/varita-fleur.jpg',
    titulo: "Veela Hair",
    desc: '"La varita elige al mago... no siempre está claro por qué." — Ollivander',
    fabricante: "Fabricante: Garrick Ollivander",
    madera: "Madera: Rosewood",
    nucleo: "Nucleo: Cabello de Veela"
  },
  varita_seraphina : {
    imagen: '/assets/varita-seraphine.jpg',
    titulo: "Rougarou Hair",
    desc: '"La varita elige al mago... no siempre está claro por qué." — Ollivander',
    fabricante: "Fabricante: Violetta Beauvais",
    madera: "Madera: Swamp mayhaw",
    nucleo: "Nucleo: Cabello de Rougarou"
  }



}