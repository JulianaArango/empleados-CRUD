import { Injectable } from '@nestjs/common';
import { EmpleadosModel, empleadosModel } from './empleadosModel';
@Injectable()
export class EmpleadosService {
    getEmpleado(): string {
        return 'Maria Gomez';
      }
      getEmpleadoById(id):string{
        return 'juan perez con el id:' + id
      }
}



@Injectable()
export class EmpleadosService {

  
  empleados = [];

  constructor() {
   
    let emple = {
      "id": 1,
      "name": "Carlos",
      "age": "38"
    }
    this.empleados.push(emple);
    emple = {
      "id": 2,
      "name": "pablo",
      "age": "30"
    }
    this.eliminarEmpleados.push(emple);

  }

  getEmpleado() {
    return this.empleados;
  }

  agregarEmpleado(modelo: EmpleadosModel) {
    let emple = {
      "id": modelo.id,
      "name": modelo.name,
      "age": modelo.age
    }
    
    this.empleados.push(emple);
    return "Empleado agregado exitosamente";
  }


  modificarEmpleado(id: string, modelo: EmpleadosModel) {
{
      // Buscamos si el usuario existe
      let emple = this.empleados.find(empleados => empleados.id == id);
      if(emple){
        // Modificamos el id si viene en el objeto updateUserDto, sino le dejamos el que original
        emple.id = updateEmpleadosModel.id ? updateEmpleadosModel.id : emple.id;
        // Modificamos el name si viene en el objeto updateUserDto, sino le dejamos el que original
        emple.name = updateEmpleadosDto.name ? updateEmpleadosDto.name : emple.name;
       
        return emple;
      }
      return null;
    }
  
    return "Empleado modificado correctamente"
  }

  eliminarEmpleadoo(id: string) {

      let emple = this.empleados.findIndex(empleados => empleados.id == id);
     
      if(EmpleadosModel != -1){
        this.empleados.splice(EmpleadosModel, 1);
        return true;
      }
      return false;
    }
    }

    return "Empleado eliminado correctamente"
  }

}

