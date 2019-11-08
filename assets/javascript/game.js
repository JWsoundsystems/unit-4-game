let crystalScore = randomNumberGenerator(19, 120);
let crystals = [];
let playerScore = 0;
let wins = 0;
let losses = 0;

function addToDocument () {
    $("#crystal-score").html(crystalScore);
    $("#player-score").html(playerScore);
    $("#button1").val(crystals[0]);
    $("#button2").val(crystals[1]);
    $("#button3").val(crystals[2]);
    $("#button4").val(crystals[3]);
    $("#wins").html(`${wins}`);
    $("#losses").html(`${losses}`);
}

function randomNumberGenerator (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function buttonValue() {
for (let i=0; i<4; i++) {
    crystals.push(randomNumberGenerator(1, 12));
}
}

buttonValue();
                                        
addToDocument();

function clickHandlers () {
    $("button").click(function(){
        console.log($(this).val());
        let crystalNumber = parseInt($(this).val()); 
        playerScore += crystalNumber;    

        if (playerScore > crystalScore) {
            console.log("You lose!");
            losses++;
            playerScore === 0;
            reset();
            alert("You Lose!");
        }
        
        if (playerScore === crystalScore) {
            console.log("You Win!");
            wins++;
            playerScore === 0;
            reset();
            alert("You Win!");
        }
      
addToDocument();

    });
}

function reset() {
    crystalScore = randomNumberGenerator(19, 120);
    playerScore = 0;
    crystals = [];
    console.log(crystals);
    buttonValue();
}

clickHandlers()