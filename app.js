// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


     function asignarTextoElemento (elemento,texto){
        let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML = texto;
}

    function agregarAmigo(){
        let amigoSecreto = document.getElementById('amigo').value;
        document.getElementById('añadir');
        
        console.log(amigoSecreto);
        console.log(amigos);
      
        if(amigoSecreto == 0){
            alert('ingresa un nombre');
        }else{
            amigos.push(amigoSecreto);
            limpiarCaja();
            asignarTextoElemento('ul',amigoSecreto);
        }     
}

function limpiarCaja(){
    document.querySelector('#amigo').value='';
    }

    for(let i = 0; amigos.length; i++){
        console.log(amigos[i]);
    }


// for(let i = 0; agregarAmigo.length; i++){
 //  console.log(agregarAmigo[i]);
// }

// if(amigoSecreto == 'ana'){
   // alert('acertaste');
// }else{
   // if(amigos.includes(amigoSecreto)){
     //   return agregarAmigo();
    //}else{
       // amigos.push(amigoSecreto);
       // return amigoSecreto;
    //}
//}