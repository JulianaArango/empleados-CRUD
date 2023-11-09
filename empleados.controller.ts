import { Controller, Get } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';

@Controller('empleados')
export class EmpleadosController {
    constructor(private readonly servicio:EmpleadosController){}

    @Get (':id')
getEmpleado(@Param('id') id): string {
    return this.servicio.getEmpleadoById(id);
}
}