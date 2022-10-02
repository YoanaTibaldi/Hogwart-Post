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
    imagen: '/assets/pociones/calderodelaton.jpg',
    titulo: "Caldero de Latón",
    desc: '" Las pociones no son para los impacientes, pero sus efectos suelen ser difíciles de deshacer por alguien que no sea un experto en pociones. Esta rama de la magia conlleva cierta mística y, por lo tanto, estatus"',
    fabricante: "Fabricante: Tienda de Calderos de Potage",
    madera: "Sea lo que sea que estés preparando, desde el Draft of Living Death hasta la Poción del olvido , este caldero es ideal para brujas y magos de todas las habilidades ",
    // nucleo: "Nucleo: Plumas de Fénix"
  },
  varita_hermione : {
    imagen: '/assets/pociones/ampolla.jpg',
    titulo: "Ampolla de Vidrio",
    desc: '" Las pociones no son para los impacientes, pero sus efectos suelen ser difíciles de deshacer por alguien que no sea un experto en pociones. Esta rama de la magia conlleva cierta mística y, por lo tanto, estatus"',
    fabricante: "Fabricante: Wiseacre ",
    madera: "Las ampollas se utilizan para contener todo tipo de pociones.",
    // nucleo: "Nucleo: Fibra de corazón de dragón"
  },
  varita_victor : {
    imagen: '/assets/pociones/sanguijuela.jpg',
    titulo: "Sanguijuela",
    desc: '" Las pociones no son para los impacientes, pero sus efectos suelen ser difíciles de deshacer por alguien que no sea un experto en pociones. Esta rama de la magia conlleva cierta mística y, por lo tanto, estatus"',
    fabricante: "Fabricante: Mykew Gregorovitch",
    madera: "La sanguijuela medicinal: popular entre los curanderos muggles (que creen que las criaturas chupasangre pueden tratar enfermedades) y útil para los magos en la elaboración de pociones",
    // nucleo: "Nucleo: Fibra de corazón de dragón"
  },
  varita_malfoy : {
    imagen: '/assets/pociones/sangredesalamandra.jpg',
    titulo: "Sangre de Salamandra",
    desc: '" Las pociones no son para los impacientes, pero sus efectos suelen ser difíciles de deshacer por alguien que no sea un experto en pociones. Esta rama de la magia conlleva cierta mística y, por lo tanto, estatus"',
    fabricante: "Fabricante: Mykew Gregorovitch",
    madera: "Tiene propiedades curativas y rejuvenecedoras, y, como tal, podría usarse para preparar pociones fortalecedoras",
    // nucleo: "Nucleo: Cabello de unicornio"
  },
  varita_fleur : {
    imagen: '/assets/pociones/lavanda.jpg',
    titulo: "Lavanda",
    desc: '" Las pociones no son para los impacientes, pero sus efectos suelen ser difíciles de deshacer por alguien que no sea un experto en pociones. Esta rama de la magia conlleva cierta mística y, por lo tanto, estatus"',
    fabricante: "Fabricante: Garrick Ollivander",
    madera: "Usos: Somnífero, Poción de aliento de fuego, calmante, repelente de insectos",
    // nucleo: "Nucleo: Cabello de Veela"
  },
  varita_seraphina : {
    imagen: '/assets/pociones/bezoar.jpg',
    titulo: "Bezoar",
    desc: '" Las pociones no son para los impacientes, pero sus efectos suelen ser difíciles de deshacer por alguien que no sea un experto en pociones. Esta rama de la magia conlleva cierta mística y, por lo tanto, estatus"',
    fabricante: "Fabricante: Violetta Beauvais",
    madera: '" Este objeto generalmente está hecho de pelo, fibra vegetal o materia similar no digerible que permanece en el intestino de un animal y forma una bola dura o "piedra". Los bezoares también son notablemente raros"',
    // nucleo: "Nucleo: Cabello de Rougarou"
  }



}