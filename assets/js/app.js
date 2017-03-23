var alumnas = [{nombre:"Arabela",apellido:"Rojas",rol:"T.A",cumpleanios:"23 de enero"},
           {nombre:"Michelle", apellido : "Seguil", rol : "T.A", cumpleanios : "25 de noviembre" },
           {nombre:"Meche",apellido:"Zubieta",rol:"T.A",cumpleanios:"02 de marzo" },
           {nombre:"Papu",apellido:"Rivariola",rol:"Psicóloga",cumpleanios:"10 de octubre" },
           {nombre:"Gian",apellido:"Corzo",rol:"Profesor",cumpleanios:"23 de enero"}];

var datos = document.getElementById('datos')

/*function mostrarChicas(nombre,apellido,rol,cumple){
  return "<ul>" + "<li>" + "Nombre: " + nombre + "</li>" +
                  "<li>" + "Apellido: " + apellido+ "</li>" +
                  "<li>" + "Rol: " + rol+ "</li>" +
                  "<li>" + "Cumpleaños: " + cumple + "</li>" + "</ul>"
} */

datos.innerHTML="";
  alumnas.forEach(function(e){
    datos.innerHTML += "<ul>" + "<li>" + "Nombre: " + e.nombre + "</li>" +
                                "<li>" + "Apellido: " + e.apellido+ "</li>" +
                                "<li>" + "Rol: " + e.rol+ "</li>" +
                                "<li>" + "Cumpleaños: " + e.cumpleanios + "</li>" + "</ul>"})
