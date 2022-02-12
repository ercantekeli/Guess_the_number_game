let holdNumber = Math.floor(Math.random() * 101);
console.log(holdNumber);

let takenNumber = document.getElementById("number");
let counter = 0;
let magicHat = document.getElementById("hat");
let resultNumber = document.getElementById("r_number");
let attemptNumber = document.getElementById("attempt");
let buttonCheck = document.getElementById("c_button");
let info = document.getElementById('info');



buttonCheck.addEventListener("click", () => {

    if (holdNumber > Number(takenNumber.value)) {
        info.innerText = `Please Choose a Number Between ${takenNumber.value} - 100`
        counter++;
    }else if(holdNumber < Number(takenNumber.value)) {
        info.innerText = `Please Choose a Number Between 0 - ${takenNumber.value}`
        counter++;
    }else if(holdNumber == Number(takenNumber.value)){
        counter++;
        info.style.display = "none"
        magicHat.style.display = "block";
        attemptNumber.innerText = "Your attempt number: " + counter;
        resultNumber.innerText = "Holded number: " + holdNumber;
    };
});


