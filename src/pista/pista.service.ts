import { Injectable } from '@nestjs/common';

@Injectable()
export class PistaService {
    private static readonly CANT_PISTAS =10;
    public getPistas():any{
        let listaPistas = [];
        for (let i =0; i<PistaService.CANT_PISTAS;i++){
            let pista = {
                    "identificador": i,
                    "titulo":  `titulo ${i}`,
                    "duracion": Math.floor(Math.random()*300),
                    "interprete": Math.floor(Math.random()*4)
                }
        listaPistas.push(pista);
    }
    return listaPistas;
}
}
