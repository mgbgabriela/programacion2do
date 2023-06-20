import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import *as fs from 'fs';
import { Pista } from './pista';

@Injectable()
export class PistaService {
    private static readonly CANT_PISTAS =10;
    private listaPistas = [];
   
    constructor() {
        this.loadPistas();
    }


    private loadPistas():void {
        let archivo=fs.readFileSync('pista.csv','utf-8');
        let datos:string[][]=[];
        let dato:string[]=[];
        let linea:string;
        let lineas:string[]=archivo.split('\n');
        for (let i=0; i<lineas.length; i++){
            linea= lineas[i].replace('\r','');
            dato=linea.split(',');
            datos.push(dato);
        }
        for(let i=0; i<datos.length; i++) {
            let id= parseInt(datos[i][0]);
            let dur= parseInt(datos [i][2]);
            
            let pista = new Pista(id,datos[i][1],dur,datos[i][3]);
            /*{
                "identificador": datos[i][0],
                "titulo": datos[i][1],
                "duracion": datos [i][2],
                "interprete": datos [i][3]
            }
*/
    this.listaPistas.push(pista);
    }
 }
   
    public getPistas():any{  
        /*for (let i =0; i<PistaService.CANT_PISTAS;i++){
            let pista = {
                    "identificador": i,
                    "titulo":  `titulo ${i}`,
                    "duracion": Math.floor(Math.random()*300),
                    "interprete": Math.floor(Math.random()*4)
                }
        this.listaPistas.push(pista);
    }*/
    return this.listaPistas;
}
    public getPistaById(id:number):any{
        let pista = this.listaPistas.find(p=> p.identificador === id)
        if(!pista){
            throw new NotFoundException(`No se encontro la pista con id ${id}`);
        }
        return pista;
}

        public agregarPista(body:any){
            let id=parseInt(body.identificador);
            let dur=parseInt(body.duracion);
            let pista = new Pista(id,body.titulo,dur,body.interprete);
            
            if(pista.getIdentificador()&&pista.getTitulo()&&pista.getInterprete()){    
            this.listaPistas.push(pista);
            fs.appendFileSync('pista.csv',`\n${pista.getIdentificador()},${pista.getTitulo()},${pista.getDuracion()},${pista.getInterprete()}`);
            return 'OK';
        }
        else{
            throw new BadRequestException('Elemento nulo');
            return  'Elemento no agregado, faltan datos';
        }
    }
}
