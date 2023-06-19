import { Controller, Get } from '@nestjs/common';
import { PistaService } from './pista.service';
import { timeStamp } from 'console';

@Controller('pista')
export class PistaController {
    constructor (private pistaService:PistaService){}

    @Get()
public getPistas():String{
    return this.pistaService.getPistas();

}
}
