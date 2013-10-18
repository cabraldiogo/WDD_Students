/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 10/18/13
 * Time: 7:25 PM
 * To change this template use File | Settings | File Templates.
 */

(function(){
//console.log("Main Js running");


    var names = ["Diogo", "Gabriel", "Kareem", "Antonio", "Scott"];
    var people = [];

    function populateHTML(){



    }

    for( var i= 0; i<3;i++){
        var index = Math.floor(Math.random()*names.length);
        var rowNumber = i+1;
        var person = new Person(names[index],rowNumber);

        people.push(person);

        names.splice(index,1);

        document.querySelector("#r"+rowNumber+"c1").innerHTML = people[i].name;
        document.querySelector("#r"+rowNumber+"c2").innerHTML = "Enter Job here";

    }

})();