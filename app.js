// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
// let amigosAleatorios = 10;

// function asignarTextoElemento (elemento,texto){
   // let elementoHTML = document.querySelector(elemento);
   // elementoHTML.innerHTML = texto;
// }

    function agregarAmigo(){
        let amigoSecreto = document.getElementById('amigo').value;
        document.getElementById('añadir');
        
        console.log(amigoSecreto);
        console.log(amigos);
        //console.log(amigoSecreto[0]);

        if(amigoSecreto == 'ana'){
            alert('acertaste');
        }else{
            if(amigos.includes(amigoSecreto)){
                return agregarAmigo();
            }else{
                amigos.push(amigoSecreto);
                return amigoSecreto;
            }
        }
}


