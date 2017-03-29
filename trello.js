function Lista (titulo, listaPendientes, cajaTexto) {
  this.titulo = titulo;
  this.listaPendientes = listaPendientes;
  this.cajaTexto = cajaTexto;
}

var nuevasListas = [];

function todasLasListas () {

  var tituloLista = document.getElementById("titulo");
  var listaDeLosPendientes = document.getElementById("pendientesSemana");
  var inputUsuario = document.getElementById("usuarioCrearPendientesSemana");

var listaCreada = new Lista (tituloLista.value, listaDeLosPendientes.value, inputUsuario.value)
nuevasListas.push(listaCreada);
 crearLista();
}


function crearPendiente () {
  var elementosListaCrearPendientesSemana = document.getElementById("usuarioCrearPendientesSemana").value;

  var lista = document.createElement("li");
  var textoLista = document.createTextNode(elementosListaCrearPendientesSemana);
    lista.appendChild(textoLista);
    document.getElementById("pendientesSemana").appendChild(lista);

  var botonBorrar = document.createElement("button");
  borrarContenido();
}

function crearPendientesOtraSemana () {
  var elementosListaCrearPendientesOtraSemana = document.getElementById("infoPendientesOtraSemana").value;

  var lista = document.createElement("li");
  var textoLista = document.createTextNode(elementosListaCrearPendientesOtraSemana);
    lista.appendChild(textoLista);
    document.getElementById("pendientesOtraSemana").appendChild(lista);
    borrarContenido();
}

function borrarPendienteUno() {
  var borrar = document.getElementById("pendientesSemana");
    borrar.removeChild(borrar.childNodes[0]);
}

function borrarPendienteDos() {
  var borrar = document.getElementById("pendientesOtraSemana");
    borrar.removeChild(borrar.childNodes[0]);
}

function crearLista () {
  var crearLista = document.getElementById("crearNuevaLista").value;

  var lista = document.createElement("section");
  var textoLista = document.createTextNode(crearLista);
    lista.appendChild(textoLista);
    document.getElementById("contenedor").appendChild(lista);

}

function borrarContenido () {
   var stringVacio = "";
   document.getElementById("usuarioCrearPendientesSemana").value = stringVacio;
   document.getElementById("infoPendientesOtraSemana").value = stringVacio;
   document.getElementById("Nombre de la lista").value = stringVacio;
}
