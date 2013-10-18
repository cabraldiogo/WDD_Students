/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 10/15/13
 * Time: 8:53 PM
 * To change this template use File | Settings | File Templates.
 */


/**
 * GUESSING GAME:
 *
 * Created By:  DIOGO CABRAL
 * Date: 10/15/2013
 *
 * GUESSING GAME
 */

//Game variables
(function () {

    var inputNumber = 0;
    var chancesRemain = 3;
    var guesses = 0;
    var statusInfo = "";

// object that contain all the html elements
    var dom = {

        input: document.querySelector("#input"),
        output: document.querySelector("#output"),
        button: document.querySelector("#btn")
    };

    //Generates a number between 1 and 10
    var genNumber = Math.floor(Math.random()* 10 +1);
    //console.log(genNumber);

    //Event that calls the clickFn function enter the button is clicked
    dom.button.addEventListener("click",clickFn);

    //Function to disable the button when the game is over
    function disableButton(){
        dom.button.removeEventListener("click",clickFn);
        console.log("disable button");
    }

    function clickFn(){

        //console.log(dom.input.value);
        //console.log("click function");
        validation();
    }

    //function that validates if the input is a number between 1 and 10. If so, this function calls the play function
    function validation(){

        inputNumber = parseInt(dom.input.value);

        if(isNaN(inputNumber)){
            dom.output.innerHTML = "Only numbers are accepted";


        }else if(inputNumber < 1 || inputNumber >10){
            dom.output.innerHTML = "You need to enter a number between 1 and 10";

        } else{
            play();
        }



    }
    //function play. It increases the guesses number, decreases the chances remaining, and give messages if the guess
    // number is too low or too high. If the guess number matchs the random number or if the player uses 3 chances, the game is over
    function play(){
        chancesRemain--;
        guesses++;
        statusInfo = "Chance " + guesses + " is over.  You have " + chancesRemain + " more chances";

        inputNumber = parseInt(dom.input.value);

        if(inputNumber < genNumber){
            dom.output.innerHTML = "Your guess was to low. " + statusInfo;


        } else if(inputNumber > genNumber){
            dom.output.innerHTML = "Your guess was to high. " + statusInfo;

        }else if(inputNumber === genNumber){
            dom.output.innerHTML = "You win. Your guess is correct";
            disableButton();

        } if(guesses >2){
            dom.output.innerHTML = "Game over!";
            disableButton();
        }



    }




})();
