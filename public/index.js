let modalTitle = document.querySelector('.modal-title');
let tPlus = document.getElementById('throwing-plus');
let confirmNote = document.querySelector('.modal-text');
let toastBody = document.querySelector('.toast');

let playerList = ['Chick', 'Schwellenbach', 'Boynton', 'Gillin', 'Rosebury', 'Hallmark', 'Banjoff'];

let db;

alert('poop');

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
    db = firebase.firestore();
    let date = d.getMonth() + 1 + '-' + d.getDate() + '-' + d.getFullYear();

    populateDatabase(date);


    

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
    console.log('pressed');
}

function statButtonPress(clicked){
    play = clicked.id;
    modalTitle.textContent = name + ' ' + play + ' ' + type;
}

function confirmPressed(){
    showToast(name + ' ' + play + ' ' + type); 

    //get current value

    changeDatabaseVal();
}


function changeDatabaseVal(){

    var data= 1;

    var docRef = db.collection("Players").doc(name);
    docRef.get().then(function(doc) {
        if (doc.exists) {

            //get the current value
            data = doc.data().day[play];

            let fieldUpdate = 'day.' + play;

            console.log(fieldUpdate);

            console.log(fieldUpdate)

            console.log(play, data);



            docRef.update({
                [`day.${play}`]: data+1
            });


            console.log('updated', data);
            

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




function populateDatabase(date){
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
                AwarenessM: 0,
                Weight: 275,
                Height: "6'4",
                Number: 10000,
                Position: 0
            }
        });
    }
}//end of populate database









