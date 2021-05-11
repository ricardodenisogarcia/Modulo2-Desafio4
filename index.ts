class Departamento {
  nombre: string;
  dueño: string;
  constructor(nombre: string, dueño: string) {
    this.nombre = nombre;
    this.dueño = dueño;
  }
  getName() {
    return this.nombre;
  }
}
class Piso {
  nombre: string;
  departamentos: Departamento[];
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  pushDepartamento(nombre: string, dueño: string) {
    var nuevoDepto = new Departamento(nombre, dueño);
    // console.log(nuevoDepto); //
    return this.departamentos.push(nuevoDepto);
  }
  getDepartamentos() {
    return this.departamentos;
  }
}
//un constructor que reciba un array de Piso y lo guarde en una propiedad.
//un método addDepartamentoToPiso(nombreDePiso:string, departamento:Departamento)
//que reciba un Departamento y lo ubique en el piso con el nombre indicado,
//si no existe un piso con ese nombre debe mostrar un error.
/*class Edificio {
  pisos:string[];
  constructor(Piso:string[]){}
  function addDepartamentoToPiso(nombreDePiso:string, departamento:Departamento){
  var pisoIndicado = Piso.find(function(item:any){
    if(item.nombre == nombreDePiso){
      return item
        }else{return console.log("El piso no existe")}
  });
  return Piso[pisoIndicado].departamentos.push(departamento)
  };
//un método getDepartamentosByPiso(nombreDePiso:string) que devuelva todos los Departamento(s) de un piso.
function getDepartamentosByPiso(nombreDePiso:string){
  var pisoCorrecto = Piso.find(function(item:any){
if(item.nombre == nombreDePiso){
  return item
}
  });
  return Piso[pisoCorrecto].departamentos
}
  

}
*/
var depto1 = new Departamento("Mi piso", "Ricardito");
console.log(depto1);
console.log(depto1.getName());
var piso7 = new Piso("Septimo piso");
console.log("soy el piso7", piso7);
piso7.pushDepartamento("Septimo D", "Susana");
console.log("soy el piso 7 actualizado", piso7.getDepartamentos);
