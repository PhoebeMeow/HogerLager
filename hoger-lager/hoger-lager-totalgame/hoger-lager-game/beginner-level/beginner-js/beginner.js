console.log('Beginner loaded');

let playerPnts = 200;       //een let kan veranderen daarom heb ik deze gebruikt voor de punten telling.
let computerPnts = 0;

showWelcomeScreen();    //de reden dat ik hem hier heb staan is zodat deze als eerst wordt getoond op mijn pagina.

function showWelcomeScreen() {     //de showWelcomeScreen is een functie die je welkom heet op de pagina.
    alert('Welkom bij Hoger - Lager, je moet 18+ zijn om de game te starten.');   //met deze alert meldt het in een popup dat je 18 jaar of ouder moet zijn om de game te starten.
    checkAge();     
    let userName = prompt('Wat is jou naam?');      //hierin vraag je de naam van de gebruiker.
    document.querySelector(".user-name").innerHTML = userName + " :";       //deze querySelector laat in de class .user-name zien het antwoord op de prompt hierboven.
}
function checkAge() {       //de checkAge checked je leeftijd om te zien of je oud genoeg bent om deze website te gebruiken.
    const playerAge = prompt('Hoe oud ben je?');      //een const kan niet veranderen en daarom heb ik hem gebruikt voor de leeftijd.
    let oldEnough = false;
    if (playerAge >= 18) {      //ik heb 2 if statements gebruikt voor als je ouder bent dan 18 dat je dan kan spelen en als je jonger bent dan 18 dat je dat niet kan.
        oldEnough = true;
    }
    if (oldEnough == true) {    //in deze if statement kan je zien dat ik de function startGameLoop heb opgeroepen, maar dit gebeurt alleen als je 18 of ouder bent.
        startGameLoop();
    }
    console.log(oldEnough);
}

function startGameLoop() {      //dit is de function die zorgt dat je de game kan spelen.

    function changePlayerPoints() {
        document.querySelector(".player-points").innerHTML = playerPnts;        //deze laat de punten van de speler in html zien, net zoals hieronder maar dan voor de computer.
    }

    function changeComputerPoints() {
        document.querySelector(".computer-points").innerHTML = computerPnts;    //de punten van de computer zijn alleen te zien nadat je op een knop hebt gedrukt.
    }

    function  generateNumber() {        //deze functie veranderd de getallen van de speler en de computer.
        let generatedNumber = Math.ceil(Math.random() * 10);
        return generatedNumber;
    }

    function generateResult() {
        if (userChoice == "higher") {   //Dit is de if-statement voor de userchoice 'higher', hieronder staat wat er gebeurd als het bijvoorbeeld gelijkspel is.
            if (newNumber == oldNumber) {
            document.querySelector(".win-lose-results").innerHTML = "Het is gelijkspel";    //dit is zodat de speler kan zien wanneer het gelijk spel is.
            playerPnts += 0;
            computerPnts -= 0;
            } else if (newNumber > oldNumber) {
            document.querySelector(".win-lose-results").innerHTML = "Je hebt gewonnen";
            playerPnts += 5;
            computerPnts -= 15;
         } else {
            document.querySelector(".win-lose-results").innerHTML = "Je hebt verloren";
            playerPnts -= 8;
            computerPnts += 10;
            }   
        } 
        //Hieronder staat de if-statement voor de userchoice 'lower', het werkt hetzelfde als hierboven.
        if (userChoice == "lower") {
            if (newNumber == oldNumber) {
            document.querySelector(".win-lose-results").innerHTML = "Het is gelijkspel";
            } else if (newNumber < oldNumber) {
            document.querySelector(".win-lose-results").innerHTML = "Je hebt gewonnen";
            playerPnts += 5;
            computerPnts -= 15;
            } else {
            document.querySelector(".win-lose-results").innerHTML = "Je hebt verloren";
            playerPnts -= 8;
            computerPnts += 10;
            }   
        }  


        changePlayerPoints();
        changeComputerPoints();

        console.log(computerPnts);
        console.log(playerPnts);
    }

    let oldNumber = generateNumber();
    let userChoice;
    let newNumber = generateNumber();

    const btnHigher = document.querySelector('.btn-higher');
    btnHigher.addEventListener('click', function() {    //deze eventlistener gebeurd alleen als je op de higher button klikt.
        if (playerPnts > 0) {
            userChoice = "higher";
            document.querySelector(".computer-number").innerHTML = oldNumber;
            newNumber = generateNumber();
            document.querySelector(".player-number").innerHTML = newNumber;

            generateResult();
            oldNumber = generateNumber();
        } else {        //als de speler geen punten over heeft dan eindigt het spel.
            alert('Game Over');
        }
    });

    const btnLower = document.querySelector('.btn-lower');
    btnLower.addEventListener('click', function() {     //deze event listener gebeurd alleen als je op de button lower klikt.
        if (playerPnts > 0) {
            userChoice = "lower";
            document.querySelector(".computer-number").innerHTML = oldNumber;
            newNumber = generateNumber();
            document.querySelector(".player-number").innerHTML = newNumber;

            generateResult();
            oldNumber = generateNumber();
        } else {
            alert('Game Over');
        }
    });

    oldNumber = generateNumber();
    document.querySelector(".computer-number").innerHTML = oldNumber;

    changePlayerPoints();

}