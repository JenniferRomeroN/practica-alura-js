let drawNumber = [];
let maxNumber = 10;
let randomNumber = generateNumberRandom();
let retryButton = document.getElementById('retry');
let newGame = document.getElementById('new');
let attemps = 0; // Inicializamos los intentos


console.log(randomNumber);

function asingElementText(element, text) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
}

retryButton.addEventListener("click", function () {
    let userNumber = parseInt(document.getElementById('userValues').value);
    attemps++;

    if (userNumber === randomNumber) {
        asingElementText('p', `You got the number right ${attemps ===1 ?  'on' : 'in'} ${attemps} ${attemps === 1 ? 'try' : 'tries'}!`);
        document.getElementById('new').removeAttribute('disabled');
        retryButton.setAttribute('disabled', 'true'); // Desactivar botón de intento
    } else if (userNumber > randomNumber) {
        asingElementText('p', `The number is lower. Attempts: ${attemps}`);
    } else if (userNumber < randomNumber) {
        asingElementText('p', `The number is higher. Attempts: ${attemps}`);
    }

    // Verificar si se han agotado los intentos
    if (attemps >= 3 && userNumber !== randomNumber) {
        asingElementText('p', `Game over! The secret number was: ${randomNumber}`);
        retryButton.setAttribute('disabled', 'true'); // Desactivar botón de intento
        document.getElementById('new').removeAttribute('disabled'); // Habilitar nuevo juego
        
    }

    cleanSpace();
});

function cleanSpace() {
    document.getElementById('userValues').value = '';
}

function generateNumberRandom() {
    let generatedNumber = Math.floor(Math.random() * maxNumber) + 1;
    console.log(generatedNumber);
    console.log(drawNumber);

    //si ya sorteamos todos los numeros
    if(drawNumber.length == maxNumber){
        //
        asingElementText('p', 'ya se sortearon todos los numeros posibles');
    } else{

        //si el numero generado esta en la lista hacemos operacion
        if(drawNumber.includes(generatedNumber)){
            return generateNumberRandom();
        } else{
            drawNumber.push(generatedNumber);
            return generatedNumber;
        }
    }
}

function initialConditions() {
    asingElementText('h1', 'Secret number game');
    asingElementText('p', `Choose a random number ${maxNumber}`);
    randomNumber = generateNumberRandom();
    attemps = 0; // Reiniciar intentos
    retryButton.removeAttribute('disabled'); // Habilitar botón de intento
    console.log(randomNumber); // Mostrar el número secreto en la consola (para pruebas)
}

newGame.addEventListener("click", function () {
    cleanSpace();
    initialConditions();
    document.getElementById('new').setAttribute('disabled', 'true'); // Deshabilitar botón de nuevo juego
});

initialConditions();


