/*functions to ues inside halloween exercise*/

/*un function es un modulo que describe un algoritmo simple*/
/*suele tener PARÁMETROS, en este caso imagen*/
/*un parametro es ña variable sobre la que actua el mödulo*/
/*por otra parte javascript es orientado a objetos y el objeto principal es document la pagina*/
function mostrar(imagen){
    document.getElementById(imagen).style.visibility="visible"
}
function ocultar(imagen){
document.getElementById(imagen).style.visibility="hidden"
}
function sonar(sonido){
    document.getElementById(sonido).play();
    }
    function parar(sonido){
        document.getElementById(sonido).pause();
    }
