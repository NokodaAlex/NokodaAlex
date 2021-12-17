var context= new AudioContext();
 
function jsNota(frecuencia){
        let o= context.createOscillator();
        g=context.createGain();
        o.connect(g);
//        o.type="sine";
//          o.type="square";
        o.type="triangle";
//        o.type="sawtooth";
        o.frequency.value=frecuencia;
        g.connect(context.destination);
        o.start(0);
        g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime +1.5);
    }


    async function getNotas(datos)
    {
    	const response = await fetch('notes.php', { method: 'POST', body: datos});
    	const notas = await response.json();
    	console.log(notas);
    	pintarCosas(notas);
    }

    function pintarCosas(datos)
    {
    	botonera.innerHTML = '';
    	/* GENERAR ARRAY CON CADA LETRA PARA ASIGNARLE AL BOTON QUE LE CORRESPONDE*/
    	let asbtn = ["1","2","3","4","5","6","7","8","9","0","'?","¿¡","Q","W","E","R","T","Y","U","I","O","P","¨´","*+","A","S","D","F","G","H","J","K","L","Ñ","[{","]}","<>","Z","X","C","V","B","N","M",";,",":.","_-"];

    		var i = 0;
			var largo = datos.length-1;
			while (i <= largo){
				var clase = `${datos[i].id}`;
				clase=clase.substr(1);
				botonera.innerHTML += `
				<button onclick="jsNota(${datos[i].hz})" class="btn btn-dark ${clase}">${datos[i].hz} (${asbtn[i]})</button>
				`;
				i++;
				;
			}

			var i2 = 1;
			while ( i2 <= largo){
				eval("var N" + i2 + " = document.querySelector('.n" + i2 +"')");
				i2++;
			}
//			console.log(N1);

			const tocarTecla = (idTecla, nota) => {
				const tecla = document.querySelector(idTecla);
				tecla.classList.add("active");
				setTimeout(() => tecla.classList.remove("active"), 100);
			};


//console.log("xd")
			let unaVez = false;

			window.addEventListener("keydown", ({ keyCode }) => {
				const teclaPresionada = datos.filter(({ key }) => key === keyCode);
				//console.log(teclaPresionada);
				//console.log("-----");
				if (teclaPresionada[0]) {
				  const { id, nota, hz} = teclaPresionada[0];
				  tocarTecla(id, nota, hz);
				  jsNota(hz);
				  //console.log(hz)
				  console.log("xd")
				}
			});
			
    }

//console.log('A ver 7w7');

var formulario = document.getElementById('formulario');
var respuesta = document.getElementById('respuesta');
var botonera = document.getElementById('botonera');

formulario.addEventListener('submit', function(e){
	e.preventDefault();
	console.log('Me diste Click');

	var datos = new FormData(formulario);
//	console.log(datos.get('temp'))
//	console.log(datos.get('scale'))

	fetch('post.php?busqueda=1', {
		method: 'POST',
		body: datos
	})
		.then(res => res.json())
		.then(data => {
			console.log(data.mensaje)
			if (data.mensaje === 'error') {
				respuesta.innerHTML = `
				<div class="alert alert-danger" role="alert">
					<h4>Llena todos los campos</h4>
				</div>`
			}else{
				respuesta.innerHTML = `
				<div class="alert alert-primary" role="alert">
					<h4>${data.mensaje}</h4>
				</div>`;
			
			} // Aqui acaba el else

		}) // Aqui acaba el Segundo Then

getNotas(datos);

	//SegundoFetch

	/*fetch('notes.php', {
		method: 'POST',
		body: datos
	})
		.then(res => res.json())
		.then(data => teclas = data)
		.then(data => {
//			console.log(data)
			var i = 0;
			var largo = data.length-1;
			while (i <= largo){
				botonera.innerHTML += `
				<button onclick="jsNota(${data[i].hz})" class="btn btn-dark ${data[i].id}">${data[i].hz}</button>
				`;
				i++;
				;
			}

			var i2 = 1;
			while ( i2 <= largo){
				eval("var N" + i2 + " = document.querySelector('.n" + i2 +"')");
				i2++;
			}
			console.log(N1)
			console.log(teclas)

			const tocarTecla = (idTecla, nota) => {
				const tecla = document.querySelector(idTecla);
				tecla.classList.add("active");
				setTimeout(() => tecla.classList.remove("active"), 100);
			};

			teclas.forEach(({ id, nota}) => {
				console.log(id)
				const tecla = document.querySelector('.n2');
				console.log(tecla)
				tecla.addEventListener("click", () => tocarTecla(id, nota));
			});

			window.addEventListener("keydown", ({ keyCode }) => {
				const teclaPresionada = teclas.filter(({ key }) => key === keyCode);
				if (teclaPresionada[0]) {
				  const { id, nota, hz} = teclaPresionada[0];
				  tocarTecla(id, nota, hz);
				  jsNota(hz);
			}
		});
		})*/

}) //Aqui acaba la funcion "addEventListener" :O