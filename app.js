let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafio';

function intentoDeUsuario() {
 alert('El boton fue clicado');
}

function mostrarAlerta() {
 let ciudad = prompt('Por favor, ingrese el nombre de una ciudad de Brasil:');
 alert(`Estuve en  ${ciudad}  y me acorde de ti.`);
}

function mensaje() {
    alert('¡Yo amo JS!');
}

function sumaDosNumeros(){
    let num1 = parseInt(prompt('Ingrese el primer numero: '));
    let num2 = parseInt(prompt('Ingrese el segundo numero: '));
    let resultado = num1 + num2;
    alert(`${num1} + ${num2} es igual a ${resultado}`);

}
