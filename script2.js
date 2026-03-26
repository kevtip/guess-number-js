let edad = prompt("¿Cuántos años tienes?"); // pedir edad
edad = Number(edad); //castin de texto a nro

//condicional
if (edad >= 18) {
  alert("Puedes votar 🗳️");
} else {
  alert("Aún no puedes votar 🧒");
}

let temperatura = Number(prompt("¿Qué temperatura hace hoy?"));

if (temperatura < 15) {
  alert("Hace frío, ponte abrigo 🧥");
} else if (temperatura <= 25) {
  alert("Clima templado, usa casaca ligera 🧢");
} else {
  alert("Hace calor, usa polo y gorra ☀️");
}

if (edad < 13) {
  alert("Eres un niño 🧒");
} else if (edad <= 17) {
  alert("Eres un adolescente 👦");
} else {
  alert("Eres un adulto 👨‍🦱");
}

if (edad > 18 && temperatura < 15) {
  alert("Adulto con frío: lleva abrigo extra 🧣");
}

/**Una tienda online aplica descuentos según el total de la compra. 
El usuario ingresa el precio total con *prompt()*. 
El programa muestra el precio final con *alert()*:
- Si el total es *mayor a $100: aplica **20% de descuento*.
- Si el total está *entre $50 y $100* (ambos incluidos): aplica *10% de descuento*.
- Si el total es *menor a $50*: sin descuento.
 
Mostrar el precio final con un mensaje como: "Tu precio final es: $XX"

El éxito se mide en tres casos: 
- al ingresar 120 deben ver 96
- al ingresar 80 deben ver 72
- al ingresar 30 deben ver 30. */

// Pedir el total al usuario (convertido a número)
let total = Number(prompt("Ingrese el total de la compra:"));

// Variable para el precio final
let precioFinal;

// Condiciones
if (total > 100) {
  precioFinal = total * 0.8; // 20% de descuento
} else if (total >= 50 && total <= 100) {
  precioFinal = total * 0.9; // 10% de descuento
} else {
  precioFinal = total; // sin descuento
}

// Mostrar resultado
alert("El precio final es: $" + precioFinal);