let btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click",agregar);

let btnDuracion = document.querySelector("#btnDuracion");
btnDuracion.addEventListener("click", duracion);

let pistas = [];

load();

async function load(){
        let promesa = fetch('/pista/pistas');
        console.log(promesa);
        let respuesta = await promesa;
        console.log(respuesta);
        if(respuesta.ok){
        let renglon = await respuesta.json();
        console.log(renglon);
        pistas = renglon;
        mostrarPistas();
        }

    }

    function agregar (){
        let identificador = parseInt(document.querySelector("#identificador").value);
        let titulo = document.getElementById("titulo").value;
        let duracion = parseInt(document.getElementById("duracion").value);
        let interprete = document.getElementById("interprete").value;


        let renglon ={
            "identificador": identificador,
            "titulo": titulo,
            "duracion": duracion,
            "interprete": interprete
        }

        pistas.push(renglon);

        mostrarPistas();
    }

    function mostrarPistas(){
        let html ="";

        for (let rg of pistas){
            html +=`
            <tr>
                <td>${rg.identificador}</td>
                <td>${rg.titulo}</td>
                <td>${rg.duracion}</td>
                <td>${rg.interprete}</td>
            </tr>
            `;
        }
            document.querySelector("#tbPistas").innerHTML=html;
    }


    function duracion(){
console.log("Funcion Duracion")
        let total = 0;
        for(let i= 0; i < pistas.length; i++){
        total += pistas[i].duracion;
    }
        let max = pistas[0].duracion;
        for (let r of pistas){ 
           if (max < r.duracion)
           max=r.duracion;
           
        } 
        
    
    document.querySelector("#total").innerHTML = `
    <p> Duracion total: ${total}</p>
    <p> La pista más larga tiene una duracion de: ${max}</p>
    `;
    
}