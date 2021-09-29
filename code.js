function play_craps() {
    console.log("play_craps() started"); 
    var die1 = Math.ceil(Math.random() * 6); //selected random number between 0 and 1, multiply by 6 and rounded to the nearest number for 1st die//
    var die2 = Math.ceil(Math.random() * 6); //selected random number between 0 and 1, multiply by 6 and rounded to the nearest number for 2nd die//
    var sum = die1 + die2; //adds both the 1st and 2nd dice numbers//
    document.getElementById("die1Res").innerHTML = die1; //shows the variable of the 1st die on the website//
    document.getElementById("die2Res").innerHTML = die2; //shows the variable of the 2nd die on the website//
    document.getElementById("sum1Res").innerHTML = sum; //shows the sum of the 2 dice on the webiste//
    if (sum == 7 || sum == 11) {
        document.getElementById("final1Res").innerHTML =
            "CRAPS - you lose"; //if the sum of the dice is 7 or 11, there will be a message saying "CRAPS - you lose" underneath the sum//
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("final1Res").innerHTML =
            "Doubles - you win"; //if the 1st and 2nd die 
    }
    else {
        document.getElementById("final1Res").innerHTML =
            "Draw - You did not win or lose, please try again!";

    }
}


function blastoff() {
    var currTime = 50;
    document.getElementById("countDownTimer").innerHTML = currTime;
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 5000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 10000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 15000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 20000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 25000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 30000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 35000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 40000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime;
    }, 45000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = "Blastoff!";
    }, 50000);
}