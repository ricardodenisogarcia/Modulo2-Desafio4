# Modulo2-Desafio4
Para este desafío, te proponemos que pases este test. Para eso, tenés que crear tres clases que se relacionen entre sí de esta forma:

1- Edificio, que debe tener:

un constructor que reciba un array de Piso y lo guarde en una propiedad.
un método addDepartamentoToPiso(nombreDePiso:string, departamento:Departamento) que reciba un Departamento y lo ubique en el piso con el nombre indicado, si no existe un piso con ese nombre debe mostrar un error.
un método getDepartamentosByPiso(nombreDePiso:string) que devuelva todos los Departamento(s) de un piso.
2- Piso, que debe tener:

un constructor debe recibir el nombre de ese piso con formato de texto. Por ejemplo: "primer piso" y guardarlo en una propiedad nombre para poder usarla posteriormente.
un método pushDepartamento y getDepartamentos para agregar departamentos y obtener el listado completo de los departamentos de ese piso (ambos usan una propiedad interna departamentos para guardar y leer).
3- Departamento:

el constructor debe recibir el nombre de ese departamento con formato de texto. Por ejemplo: "mi depto".
debe tener un método getName() que devuelva el nombre del departamento.
