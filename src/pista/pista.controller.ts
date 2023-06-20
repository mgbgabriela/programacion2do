import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Delete} from '@nestjs/common';
import { PistaService } from './pista.service';

@Controller('pista')
export class PistaController {
    constructor (private pistaService:PistaService){}

    @Get('pistas')
     public getPistas():any{
     return this.pistaService.getPistas();

}
    @Get(':id')
        public getPistasById(@Param('id', ParseIntPipe)id:number):any{
       return this.pistaService.getPistaById(id);
        }


    @Post('agregar')
        public agregarPista(@Body()body:any):string{
            return this.pistaService.agregarPista(body);

        }

        @Put('modificar/:id')
        public modificarPista(@Body() body:any,@Param('id', ParseIntPipe) id:number):any {
            return this.pistaService.modificarPista(id,body);
        }

        @Delete('eliminar/:id')
        public eliminarPista(@Param('id', ParseIntPipe)id:number):any{
            return this.pistaService.eliminarPista(id);
        }
}



