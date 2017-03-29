
function crearPendiente () {
var elementosListaCrearPendientesSemana = document.getElementById("usuarioCrearPendientesSemana").value;

var lista = document.createElement("li");
var textoLista = document.createTextNode(elementosListaCrearPendientesSemana);
lista.appendChild(textoLista);
document.getElementById("pendientesSemana").appendChild(lista);

var botonBorrar = document.createElement("button");
}

function crearPendientesOtraSemana () {
var elementosListaCrearPendientesOtraSemana = document.getElementById("infoPendientesOtraSemana").value;

var lista = document.createElement("li");
var textoLista = document.createTextNode(elementosListaCrearPendientesOtraSemana);
lista.appendChild(textoLista);
document.getElementById("pendientesOtraSemana").appendChild(lista);
}

function borrarPendiente() {
  var borrar = document.getElementById("pendientesSemana");
  borrar.removeChild(borrar.childNodes[0]);
}


function crearLista () {
var crearLista = document.getElementById("crearNuevaLista").value;

  var lista = document.createElement("li");
  var textoLista = document.createTextNode(crearLista);
  lista.appendChild(textoLista);
  document.getElementById("contenedor").appendChild(lista);
}
