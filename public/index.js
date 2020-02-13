let modalTitle = document.querySelector(".modal-title");
let tPlus = document.getElementById("throwing-plus");
let confirmNote = document.querySelector(".modal-text");
let toastBody = document.querySelector(".toast");

let playerList = [
  "Chick",
  "Schwellenbach",
  "Boynton",
  "Gillin",
  "Rosebury",
  "Hallmark",
  "Banjoff",
  "Scum"
];

let db;

//global probably bad practice
let name = "";
let play = [];
let type = "";
let num = "";
let dateNumber;

/**
 * Firebase database stuff
 *
 */
document.addEventListener("DOMContentLoaded", event => {
  //get rid of the loading page

  var d = new Date();
  dateNumber = d.getMonth() + 1 + "-" + d.getDate() + "-" + d.getFullYear();

  document.body.style.overflow = "scroll";

  let app = firebase.app();
  db = firebase.firestore();

  //only run this if you want to clear out the entire database
  // console.log("-------------");
  // populateDatabase(dateNumber);
  // console.log("formatted");
}); //ends the on document load

//function to update database

function continueLastDay() {
  $(".loadingScreen").fadeOut();
  document.body.style.overflow = "scroll";

  //show last day toast
  showToast("last day continued");
}

function startNewDay() {
  $(".loadingScreen").fadeOut();
  document.body.style.overflow = "scroll";

  //show new day toast
  showToast("new day started");
}

function inputPlayerName() {
  var input = document.getElementById("name").value;
  var inputHeight = document.getElementById("height").value;
  var inputWeight = document.getElementById("weight").value;
  var inputNumber = document.getElementById("number").value;

  db.collection("Players")
    .doc(input)
    .set({
      day: {
        date: null,
        picksP: 0,
        picksM: 0,
        competitiveP: 0,
        competitiveM: 0,
        divingP: 0,
        divingM: 0,
        groundP: 0,
        groundM: 0,
        throwingP: 0,
        throwingM: 0,
        fieldingP: 0,
        fieldingM: 0,
        awarenessP: 0,
        AwarenessM: 0,
        Weight: inputWeight,
        Height: inputHeight,
        Number: inputNumber,
        Position: 0
      }
    });

  $(".addPlayers").fadeOut();
  document.body.style.overflow = "scroll";

  //show player added toast
  showToast("player added");
}

document.addEventListener("DOMContentLoaded", event => {
  // var d = new Date();
  // var dateString = d.getMonth() + 1 + "-" + d.getDate() + "-" + d.getFullYear();
  // populateDatabase(dateString);
});

function loadStats() {
  console.log("poop");
}

function cardPressed(namePressed) {
  name = namePressed.id;
  modalTitle.textContent = name;
  console.log("pressed");
}

function statButtonPress(clicked) {
  play.unshift(clicked.id);
  //build modal top
  //mod
  //modalTitle.textContent = name + " " + play + " " + type;
  modalTitle.textContent = modalTitle.textContent + ", " + play[0];
}

function showToast(string) {
  //set the toast text
  let toastText = document.getElementById("toastText");
  toastText.textContent = string;
  //show the toast
  $(".toastContainer").fadeIn();
  //wait 750ms and then hide the toast
  setTimeout(() => {
    $(".toastContainer").fadeOut();
  }, 1000);
}

function populateDatabase(dateString) {
  for (var i = 0; i < playerList.length; i++) {
    db.collection("Players")
      .doc(playerList[i])
      .set({
        isVisible: true,
        292020: {
          date: dateString,
          picksP: 0,
          picksN: 0,
          competitiveP: 0,
          competitiveN: 0,
          divingP: 0,
          divingN: 0,
          groundP: 0,
          groundN: 0,
          throwingP: 0,
          throwingN: 0,
          fieldingP: 0,
          fieldingN: 0,
          awarenessP: 0,
          awarenessN: 0
        },
        2102020: {
          date: dateString,
          picksP: 0,
          picksN: 0,
          competitiveP: 0,
          competitiveN: 0,
          divingP: 0,
          divingN: 0,
          groundP: 0,
          groundN: 0,
          throwingP: 0,
          throwingN: 0,
          fieldingP: 0,
          fieldingN: 0,
          awarenessP: 0,
          awarenessN: 0
        },
        2112020: {
          date: dateString,
          picksP: 0,
          picksN: 0,
          competitiveP: 0,
          competitiveN: 0,
          divingP: 0,
          divingN: 0,
          groundP: 0,
          groundN: 0,
          throwingP: 0,
          throwingN: 0,
          fieldingP: 0,
          fieldingN: 0,
          awarenessP: 0,
          awarenessN: 0
        }
      });
  }
} //end of populate database
