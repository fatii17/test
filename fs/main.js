let materias = [];

	function escribir(materias) {
		const divMaterias = document.getElementById('divMaterias');
		limpiar();

		for (let i = 0; i < materias.length;i++) {

		const promedio= materias[i].notas.reduce((acu, notas) => acu + notas, 0) /materias[i].notas.length;
		        console.log(promedio)

		 	const materiasHTML = `<div class="carta">

						<span onclick="eliminar(${i})" class ="eliminarx">x</span>
						<span>nombre: ${materias[i].nombre}</span>
						<span>codigo: ${materias[i].codigo}</span> 
						<span>docente: ${materias[i].docente}</span>
						<span>hssemanales: ${materias[i].hssemanales}</span>
						<span>notas: ${materias[i].notas}</span>
						<span>promedio: ${promedio}</span>
					</div>`	
					divMaterias.innerHTML += materiasHTML;
					
	}
		}

		function eliminar(index){
			materias.splice(index, 1);
			escribir(materias);

		}
			
		function limpiar (){
			const divMaterias = document.getElementById('divMaterias');
			divMaterias.innerHTML = "";
		}
		function eliminarTodos(){
			materias = [];
			limpiar();
		}
		


	function alerta() {
  				const codigo = document.getElementById('codigo').value;
  				const nombre = document.getElementById('nombre').value;
  				const docente= document.getElementById('docente').value;
  				const hsCatedras = document.getElementById('hsCatedras').value;
  				let notas= [...document.getElementsByName('nota')];
  				console.log(notas)


  				notas = notas.map(nota => parseInt(nota.value));
  				console.log(notas)

				const materia = {
					codigo,
					nombre,
					docente,
					hsCatedras,
				}

				materias.push(materia);

				//escribir(materias);
			}

	 function agregarNotas(){
		 	const divNotas = document.getElementById('divNotas');
		 	const NotasHTML = `<label> notas: <input name="nota" type="number" placeholder="notas"></label>`

		 	divNotas.innerHTML += NotasHTML;
}

	function obtenerMateria(){
		const url="http://192.168.0.178:3010/api/materias/"

		axios.get(url)
		.then((resp)=>{
			console.log(url)
		//escribir(//resp.data.materia);
			//resp.data.materias
		})
		.catch((error)=>{

		})
}

	function guardar(datos){
		const url="http://192.168.0.178:3010/api/materias/"

		axios.post(url, datos)
		.then((resp)=>{
				console.lop(resp.data)
				obtenerMateria()
	})
	.catch((error)=>{
		alerta("ocurrio un error")
		console.log(error)
	})
}


