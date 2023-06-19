import { Controller, Get, Param } from '@nestjs/common';
import { PistaService } from './pista.service';

@Controller('pista')
export class PistaController {
    constructor (private pistaService:PistaService){}

    @Get('pistas')
     public getPistas():any{
     return this.pistaService.getPistas();

}
    @Get(':id')
        public getPistasById(@Param('id')id:number):any{
       return this.pistaService.getPistaById(id);

}

}
