// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


     function agregarAmigo(){
        let amigoSecreto = document.getElementById('amigo').value.trim();
        document.getElementById('añadir');
               
        console.log(amigoSecreto);
        console.log(amigos);
    
        if(amigoSecreto.trim() === ''){
            alert('ingresa un nombre');
        }else{if(amigos.includes(amigoSecreto)){
            alert('ingresar otro nombre');
            return;
        }else{   
               amigos.push(amigoSecreto);
                recorrerAmigos();
                limpiarCaja();
        }
        
     }  
            
    }

   function limpiarCaja(){
    document.querySelector('#amigo').value='';
   }
    
   function sortearAmigo(){

        document.getElementById('sortearAmigo');
        let amigoGenerado = String(Math.floor(Math.random()*amigos.length));
        console.log(amigos);
        console.log(amigoGenerado);

        let resultadoAmigo = document.getElementById('resultado');
        resultadoAmigo.innerHTML= amigos[amigoGenerado];
    }

        function recorrerAmigos(){

        let elementoNombreLista = document.querySelector('.name-list');
        elementoNombreLista.innerHTML='';
        
        for(let i = 0;i<amigos.length; i++){

        let listado = document.createElement('li');
        listado.textContent = amigos[i];
        elementoNombreLista.append(listado);
             
}
}