let btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click", agregar);

let btnDuracion = document.querySelector("#btnDuracion");
btnDuracion.addEventListener("click", duracion);

let pistas = [];

function agregar (){
    let identificador =  parseInt (document.querySelector('#Identificador').value);
    let titulo = document.getElementById('Titulo').value;
    let duracion = parseInt(document.getElementById('Duracion').value);
    let interprete = document.getElementById('Interprete').value;


    let renglon = {
        "Identificador": identificador,
        "Titulo" :titulo,
        "Duracion": duracion,
        "Interprete" : interprete
    }

    pistas.push(renglon);

    mostrarPistas();
}

function mostrarPistas(){
    let html = "";

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
        document.querySelector("#tblPistas").innerHTML= html;

    
}

function duracion (){
let total = 0;
let max = {
    "titulo": " ",
    "duración": 0
};

for (let i =0;  i < pistas.lenght; i++){
    total += pistas[i].duracion;
    if (pistas[i].duracion>max.Duracion){
        max.duracion = pistas[i].duracion;
        max.titulo = pistas [i].titulo;
    }
}
document.querySelector("#pistas").innerHTML = `
<p>Duracion total: ${total} </p>
<p>Titulo de la pista más larga es : ${max.titulo} con una duración de : ${max.duración}</p>

`
}