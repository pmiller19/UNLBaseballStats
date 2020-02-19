let modalTitle = document.querySelector(".modal-title");
let tPlus = document.getElementById("throwing-plus");
let confirmNote = document.querySelector(".modal-text");
let toastBody = document.querySelector(".toast");
var d = new Date();

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

let playerPositions = [5, 6, 3, 6, 3, 4, 5, 10];

let db;

//global probably bad practice
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

  let year = d.getYear();
  let day = d.getDate();
  let month = d.getMonth() + 1;

  db.collection("Players")
    .doc(input)
    .set({
      day: {
        year: year,
        month: month,
        date: day,
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
        Number: inputNumber
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
  alert(
    "Are you sure you want to reset the entire database? \n If not, exit the window."
  );
  condensedDate = d.getMonth() + 1 + "" + d.getDate() + d.getFullYear();
  let year = d.getYear();
  let day = d.getDate();
  let month = d.getMonth() + 1;
  console.log("month: ", day);
  //var shortDate = d.getMonth() + 1 + "" + d.getDate() + d.getFullYear();

  for (var i = 0; i < playerList.length; i++) {
    db.collection("Players")
      .doc(playerList[i])
      .set({
        // position: playerPositions[i],
        // isVisible: true,
        // [22020]: {
        //   year: 2020,
        //   month: 2,
        //   day: 11,
        //   picksP: 0,
        //   picksN: 0,
        //   competitiveP: 0,
        //   competitiveN: 0,
        //   divingP: 0,
        //   divingN: 0,
        //   groundP: 0,
        //   groundN: 0,
        //   throwingP: 0,
        //   throwingN: 0,
        //   fieldingP: 0,
        //   fieldingN: 0,
        //   awarenessP: 0,
        //   awarenessN: 0
        // }
      });
  }
} //end of populate database
