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
                recorrerAmigos();
            }  
            
    }    

   function limpiarCaja(){
    document.querySelector('#amigo').value='';
} 
    
    function recorrerAmigos(){
       //let listadoDeAmigos = document.querySelector('.name-list');

        for(let i = 0;i<amigos.length; i++){
            let listado = document.createElement('li');
             listado.textContent = amigos[i];
            let elementoNombreLista = document.querySelector('.name-list');
            elementoNombreLista.append(listado);

    }
}