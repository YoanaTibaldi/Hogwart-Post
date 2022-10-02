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
    imagen: '/assets/libros/libro-spells.jpg',
    titulo: "Libro estandar de hechizos",
    desc: '"Las palabras son, en mi no tan humilde opinión, nuestra más inagotable fuente de magia, capaces de infringir daño y de remediarlo." —  Albus Dumbledore',
    nucleo: 'Descripción: "Una guía indispensable para tus necesidades mágicas básicas."',
    fabricante: "Autor: Miranda Azor",
    madera: "Editorial: Merge Books",  
  },
  varita_hermione : {
    imagen: '/assets/libros/libro-dark-forces.png',
    titulo: "Las fuerzas oscuras: una guía para la autoprotección",
    desc: '"Las palabras son, en mi no tan humilde opinión, nuestra más inagotable fuente de magia, capaces de infringir daño y de remediarlo." —  Albus Dumbledore',
    nucleo: 'Descripción: "Este libro ofrece una base excelente en defensa personal mágica."',
    fabricante: "Autor: Quentin Trimble",
    madera: "Editorial: Anónima", 
  },
  varita_victor : {
    imagen: '/assets/libros/libro-historiademagia.jpg',
    titulo: "Historia de magia",
    desc: '"Las palabras son, en mi no tan humilde opinión, nuestra más inagotable fuente de magia, capaces de infringir daño y de remediarlo." —  Albus Dumbledore',
    nucleo: 'Descripción: "Bathilda Bagshot se embarcó en el viaje del conocimiento mágico hace décadas. Siempre le han fascinado los misterios y las curiosidades del mundo mágico. Una historia de la magia examina momentos y hechos significativos desde el principio de los tiempos hasta el siglo XIX, lo que convierte a este libro en un pieza esencial de la literatura mágica."',
    fabricante: "Autor: Batilda Bagshot",
    madera: "Editorial: Anónima", 
  },
  varita_malfoy : {
    imagen: '/assets/libros/libro-begginer.jpg',
    titulo: "Una guía para principiantes sobre la transformación",
    desc: '"Las palabras son, en mi no tan humilde opinión, nuestra más inagotable fuente de magia, capaces de infringir daño y de remediarlo." —  Albus Dumbledore',
    nucleo: 'Descripción: "El punto de partida ideal para todo estudiante de Transformación"',
    fabricante: "Autor: Emeric Switch ",
    madera: "Editorial: Anónima", 
  },
  varita_fleur : {
    imagen: '/assets/libros/libro-monstruo.jpg',
    titulo: "El Monstruoso libro de los Monstruos",
    desc: '"Las palabras son, en mi no tan humilde opinión, nuestra más inagotable fuente de magia, capaces de infringir daño y de remediarlo." —  Albus Dumbledore',
    nucleo: 'Descripción: "Una guía viciosa de criaturas monstruosas"',
    fabricante: "Autor: Eduardo Lima ",
    madera: "Editorial: Anónima", 
  },
  varita_seraphina : {
    imagen: '/assets/libros/libro-quidditch.jpg',
    titulo: "Quidditch a través de los años",
    desc: '"Las palabras son, en mi no tan humilde opinión, nuestra más inagotable fuente de magia, capaces de infringir daño y de remediarlo." —  Albus Dumbledore',
    nucleo: 'Descripción: " La obra definitiva sobre los orígenes y la historia del Quidditch. Muy recomendable."',
    fabricante: "Autor: Kennilworthy Whisp",
    madera: "Editorial: Anónima", 
  }



}