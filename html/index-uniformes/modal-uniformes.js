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
  // document.getElementById("madera").innerHTML = data.madera
  // document.getElementById("nucleo").innerHTML = data.nucleo
  document.getElementById("counter").innerHTML = puntos
  

}

const varitas = {
  varita_phoenix : {
    imagen: '/assets/uniformes/uniform-slytherin.jpg',
    titulo: "Casa Slytherin",
    desc: '"O tal vez en Slytherin, harás tus verdaderos amigos. Esa gente astuta utiliza cualquier medio para lograr sus fines. — Sombrero Seleccionador"',
    fabricante: "Contiene: Un par de guantes, una bufanda, una corbata, un uniforme escolar, un par de medias y un gorrito",
    // madera: "Madera: Acebo",
    // nucleo: "Nucleo: Plumas de Fénix"
  },
  varita_hermione : {
    imagen: '/assets/uniformes/uniform-hufflepuff.jpg',
    titulo: "Casa Hufflepuff",
    desc: '"Puedes pertenecer a Hufflepuff donde son justos y leales. Esos perseverantes Hufflepuff de verdad no temen el trabajo pesado." —El Sombrero Seleccionador',
    fabricante: "Contiene: Un par de guantes, una bufanda, una corbata, un uniforme escolar, un par de medias y un gorrito",
    // madera: "Madera: Vine",
    // nucleo: "Nucleo: Fibra de corazón de dragón"
  },
  varita_victor : {
    imagen: '/assets/uniformes/uniform-ravenclaw.jpg',
    titulo: "Casa Ravenclaw",
    desc: '"O tal vez a la antigua sabiduría de Ravenclaw, si tienes una mente dispuesta, porque los de inteligencia y erudición siempre encontrarán allí a sus semejantes." —Sombrero Seleccionador',
    fabricante: "Contiene: Un par de guantes, una bufanda, una corbata, un uniforme escolar, un par de medias y un gorrito",
    // madera: "Madera: Carpe",
    // nucleo: "Nucleo: Fibra de corazón de dragón"
  },
  varita_malfoy : {
    imagen: '/assets/uniformes/uniform-gryffindor.jpg',
    titulo: "Casa Gryffidor",
    desc: '"Puedes pertenecer a Gryffindor, donde habitan los valientes. Su osadía, temple y caballerosidad ponen aparte a los de Gryffindor.." — Sombrero Seleccionador',
    fabricante: "Contiene: Un par de guantes, una bufanda, una corbata, un uniforme escolar, un par de medias y un gorrito",
    // madera: "Madera: Hawthorn",
    // nucleo: "Nucleo: Cabello de unicornio"
  },




}