
const fs = require("fs");
require('colors');
const colorss = require('colors/safe');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
	try{
		
		let salida = consola = "";
		
		for (let i = 1; i <= hasta; i++) {
			salida += `${base} x ${i} = ${base * i}\n`;
			consola += `${base} ${'x'.green.bold} ${i} ${'='.green.bold} ${base * i}\n`;
		}
		
		if (listar) {
			console.log("==========================".green);
			console.log("Tabla del:".green, colorss.red(base).bold);
			console.log("==========================".green);
			console.log(consola);
		}

		// fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
		// 	if (err) throw err;

		//   	console.log(`tabla-${base}.txt creado`);
		// });

		fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
		// console.log(`tabla-${base}.txt creado`);
		return `tabla-${base}.txt`;
	} catch(err){
		throw err;
	}
}

module.exports = {
	crearArchivo
}