// Crear variables 
let Negativos = 0;
let Positivos = 0;
let Mult15 = 0;

// Inicio del ciclo for suministrando el índice
for (let i = 1; i <= 5; i++) {
    // Pregunta al usuario para que brinde la información
    let num = parseInt(prompt("Ingresa el valor entero"+ " # "+" "+ i));
    
    // Verificación de cantidad negativa
    if (num < 0) {
        Negativos++;
    } else if (num > 0) { // Verificación de cantidad positiva
        Positivos++;
    }
    
    // Verificación si es múltiplo de 15
    if (num % 15 === 0) {
        Mult15++;
    }
}

