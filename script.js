console.log('¡Hola desde JavaScript!');
let nombre= "Kevin Lindsey";
let edad = 27;
let estaAprendiendo = true; 
console.log(nombre);
console.log(edad);
console.log(estaAprendiendo);

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof estaAprendiendo);

const curso = "Code 101";
const maxIntentos = 10; 

console.log(curso);
console.log(maxIntentos);

//maxIntentos=20;

//entrada usuario//
let nombreUsuario = prompt("Cómo te llamas?");
let edadUsuario = prompt("Cuántos años tienes?");

//salida usuario//
alert("hola "+ nombreUsuario+ " tienes " + edadUsuario+ " años");

//verificacion en consola 
console.log("Nombre: "+ nombreUsuario);
console.log("Nombre: "+ edadUsuario);

console.log(typeof nombreUsuario);
console.log(typeof edadUsuario);

// --- Operadores aritméticos ---
let a = 20;
let b = 7;

console.log('Suma:', a + b);        // 27
console.log('Resta:', a - b);       // 13
console.log('Multiplicación:', a * b);        
console.log('División:', a / b);      
console.log('Módulo:', a % b);        

// que resultado da
console.log('5' + 3);    // ¿53 o 8?
console.log(5 + 3);      // ¿53 o 8?
console.log('5' - 3);    // ¿Qué pasa aquí? el - no concatena como el +, el - obliga a convertirse en nro

// Forma 1: Concatenación con +
let saludo1 = 'Hola ' + nombreUsuario + ', tienes ' + edadUsuario + ' años.';
console.log(saludo1);

// Forma 2: Template literals con `` (backticks)
let saludo2 = `Hola ${nombreUsuario} tienes ${edadUsuario} años`;
console.log(saludo2);

//calculadora de edad 
let anioActual =2026;
let anioNacimiento = anioActual-Number(edadUsuario);
console.log(`Naciste en el año ${anioNacimiento}`);

let ciudad = prompt("De qué ciudad eres?");
let mensaje = `Hola ${nombreUsuario} tienes ${edadUsuario} años y eres de la ciudad de ${ciudad}`;
console.log(mensaje);


