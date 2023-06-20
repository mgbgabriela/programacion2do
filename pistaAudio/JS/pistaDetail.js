    let params = [];

    load();

    async function load() {

        processParams();
        let response = await fetch (`/pista/${params["index"]}`);
        if(response.ok){
        let p = await response.json();
        document.getElementById("identificador").innerHTML = p.identificador;
        document.getElementById("titulo").innerHTML = p.titulo;
        document.getElementById("duracion").innerHTML = p.duracion;
        document.getElementById("interprete").innerHTML = p.interprete; 
    }else {
       throw new BadRequestException('La pista no fue encontrada'); //no me lo toma
    }
    }
    function processParams(){
        let urlParametros = window.location.search.substring(1); //index=1&titulo="aaa"
        //esto tendra la url
        let arrayParametros = urlParametros.split("&"); //[index=1,titulo="aaa"]
        for(i=0; i<arrayParametros.length;i++){
            let tempParam =arrayParametros[i].split("="); //en la primer vuelta tendra ["index","1",] en la otra["titulo","aaa"]
            params[tempParam[0]]=tempParam[1]; //param[index]=1//param[titulo]="aaa"


        }

    }