let happy = document.getElementById('happy');
let sad = document.getElementById('sad');
let angry = document.getElementById('angry');
let fine = document.getElementById('fine');

let outcome = document.getElementById('outcome');


function moodClicked(mood){
    if (mood === "happy"){
        outcome.textContent = "You are happy!";
    } else if (mood === "sad"){
        outcome.textContent = "You are sad!";
    } else if (mood === "angry"){            
        outcome.textContent = "You are angry!";
    } else if (mood === "fine"){
        outcome.textContent = "You are fine!";
    }
}

// happy.addEventListener("click", function (){
//     moodClicked("happy");
// })

happy.addEventListener("click", () => moodClicked("Happy"));
sad.addEventListener("click", () => moodClicked("Sad"));
angry.addEventListener("click", () => moodClicked("Angry"));
fine.addEventListener("click", () => moodClicked("Just Fine"));


function moodClicked(mood){
    outcome.textContent = `you are feeling ${mood}`;
    localStorage.setItem('mood', mood); // this saves it to local storage
}

window.onload = () => {
    let savedMood = localStorage.getItem('mood');
    if(savedMood){
        outcome.textContent = `you are feeling ${savedMood}`;
    }
}