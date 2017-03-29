
function crearPendiente () {
var elementosListaCrearPendientesSemana = document.getElementById("usuarioCrearPendientesSemana").value;

var lista = document.createElement("li");
var textoLista = document.createTextNode(elementosListaCrearPendientesSemana);
lista.appendChild(textoLista);
document.getElementById("pendientesSemana").appendChild(lista);

}

function crearPendientesOtraSemana () {
var elementosListaCrearPendientesOtraSemana = document.getElementById("infoPendientesOtraSemana").value;

var lista = document.createElement("li");
var textoLista = document.createTextNode(elementosListaCrearPendientesOtraSemana);
lista.appendChild(textoLista);
document.getElementById("pendientesOtraSemana").appendChild(lista);
}

/* function crearLista () {

  var lista = document.createElement("li");
  var textoLista = document.createTextNode(elementos.value);
  lista.appendChild(textoLista);
  document.getElementById("pendientesSemana").appendChild(lista);
} */
