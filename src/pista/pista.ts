export class Pista {
    private identificador: number;
    private titulo: string;
    private duracion: number; 
    private interprete: string;

    constructor(id:number,tit:string,dur:number,int:string) {
     this.identificador=id;
     this.titulo=tit;
     this.duracion=dur;
     this.interprete=int;   
    }

     public getIdentificador():number {
        return this.identificador
    };
    public getTitulo():string {
        return this.titulo
    };
    public getDuracion():number {
        return this.duracion
    };
    public getInterprete():string {
        return this.interprete
    };

    }
