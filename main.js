let hasItems = false;
let wakePerson = false; 
let enterTower = true;


let island = function(){
    let answer = prompt("You find yourself on an Island.   You see a tower 100 meters away.   To the south you see a dock with one old boat.")
    answer = answer.toLowerCase()
    if (answer.includes("go")){
        if (answer.includes("tower")){
            tower()           
        } else if (answer.includes("south")  || answer.includes("boat")){
            boat()
        } else {
            alert("Oh oh..You can't go there")
            island()
        }
    } else if (answer.includes("look")){
        if (answer.includes("around")){
            island();
        } else if (answer.includes("at")){
            if (answer.includes("tower")){
                alert("The tower looks old and crooked")
                island()
            }
        }

    }
}

let tower = function(){
    if (enterTower == true){
        let answer = prompt("You walk to the watchtower to look for help.  It doesnt look like its been in use for a while... ")
    } else {
        let answer = prompt("You go inside the watchtower and see someone sleeping.   What do you want to do?")
    }
    answer = answer.toLowerCase()
    if (answer.includes("look")){
        if (answer.includes("tower")){
            alert("The tower is mostly empty, except for some furniture a map and a set of keys on the wall.")
            tower()
        } else if (answer.includes("enter")){
            alert("You entered the tower")
            
        }
    }
}


let insideTower = function(){
    let answer = prompt("")
    alert("inside the tower")
}

let boat = function(){
    alert("you're at the boat")
}

island()