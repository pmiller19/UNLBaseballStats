let modalTitle = document.querySelector('.modal-title');
let tPlus = document.getElementById('throwing-plus');
let confirmNote = document.querySelector('.modal-text');
let toastBody = document.querySelector('.toast');

//test comment



//global probably bad practice
let name = '';
let play = '';
let type = '';
let num = '';

/**
 * Firebase database stuff
 * 
 */
document.addEventListener("DOMContentLoaded", event =>{

    document.body.style.overflow = 'hidden';

    //get rid of the loading page

    var d = new Date();


    let app = firebase.app();

    let date = d.getMonth() + 1 + '-' + d.getDate() + '-' + d.getFullYear();

    

});//ends the on document load

//function to update database

function continueLastDay(){
    $('.loadingScreen').fadeOut();
    document.body.style.overflow = 'scroll';

    //show last day toast
    showToast('last day continued')
}

function startNewDay(){
    $('.loadingScreen').fadeOut();
    document.body.style.overflow = 'scroll';

    //show new day toast
    showToast('new day started');
}


function cardPressed(namePressed){
    name = namePressed.id;
    modalTitle.textContent = name;
}

function statButtonPress(clicked){
    play = clicked.id;
    modalTitle.textContent = name + ' ' + play + ' ' + type;

}

function confirmPressed(){
    showToast(name + ' ' + play + ' ' + type); 
    
    //grab the data with a document snapshot

    db = firebase.firestore();

    db.collection("Players").doc(name)
  .get()
  .then(function(doc) {
    if (doc.exists) {
      console.log("Document data:", doc.data().day.awarenessM); 
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch(function(error) {
    console.log("Error getting document:", error);
  });

}

function showToast(string){
    //set the toast text
    let toastText = document.getElementById('toastText');
    toastText.textContent = string;
    //show the toast
    $('.toastContainer').fadeIn();
    //wait 750ms and then hide the toast
    setTimeout(() =>{
        $('.toastContainer').fadeOut();
    }, 1000);
}




function populateDatabase(date, db){
    for(var i=0; i<7; i++){
        db.collection("Players").doc(playerList[i]).set({
            day: {
                date: date,
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
                fieldingM:0,
                awarenessP: 0,
                awarenessM: 0
            }
        });
    }
}//end of populate database









