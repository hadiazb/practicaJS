var nombre = ""
var apellido = ""

function lastLetter(){
  nombre = document.getElementById('name').value
  apellido = document.getElementById('lastname').value
  var nombreCompleto = nombre + " " + apellido
  var cantidadCaracteres = nombreCompleto.length
  var ultimaLetra = nombreCompleto.charAt(cantidadCaracteres - 1)
  document.getElementById('respuesta').innerHTML = "Esta es la ultima letra de  tu nombre completo:  " + ultimaLetra
}
