let numberMustBeFind = Math.floor(Math.random() * 100 + 1);
let opportunities = 5;
let maxRange = 100;
let minRange = 1;
function logic() {
    let enteredNum = +document.getElementById("num").value;
    opportunities -= 1;
    if (opportunities === 0) {
        document.querySelector('h1').innerHTML = "You Lose Bovur😂. It was " + numberMustBeFind;
        disableInput();
        return;
    }
    if (enteredNum === numberMustBeFind) {
        document.querySelector('h1').innerHTML = "Winner Winner Chicken Dinner!!!🎉🎊🎖️";
        disableInput();
        return;
    } else if ((enteredNum > 100 || enteredNum < 1)) {
        document.querySelector('h1').innerHTML = "You Must Enter Given Range!!! Read Condition😧.You Have Left " + opportunities + " Attempt(s).Try again";
        enteredNum = document.getElementById("num").value;
    } else {
        if (enteredNum > numberMustBeFind) {
            maxRange = enteredNum;
            document.querySelector('h1').innerHTML = "You Can't Find Tog'ov.  You Have Left " + opportunities + " Attempt(s). Keep Going!!! Enter number between " + minRange + " 🡪 " + maxRange;
        } else if (enteredNum < numberMustBeFind) {
            minRange = enteredNum;
            document.querySelector('h1').innerHTML = "You Can't Find Annay. You Have Left " + opportunities + " Attempt(s). Keep Going!!!  Enter number between " + minRange + " 🡪 " + maxRange;
        }
    }
}

function disableInput() {
    document.getElementById("num").disabled = true;
    document.querySelector('button').disabled = true;
}