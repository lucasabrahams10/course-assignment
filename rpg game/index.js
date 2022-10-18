function Human(name, age){
    this.name= "name";
    this.age = "age";
    this.strenght = 24; 
    this.experience = 5;
    this.health = 200;
}
function Monster(name, age){
    this.name= "name";
    this.age = "age";
    this.strenght = 24; 
    this.experience = 150;
    this.health = 2;
}

const Lara = new Human("Lara",27);
const Anta  = new Monster("Anna", 37);
const Stina  = new Monster("Stina", 37);
const Joe  = new Monster("Anna", 37);

let playTheGame = confirm("spela");
while (playTheGame) {


console.log(`${Lara.name} wants to perform great deeds in the kingdom, 
and has heard of a dragon terrorizing the area. 
He is in a great mode with ${Lara.health} in health and ${Lara.strength} in strenght`);

console.log(`Suddenly a monster with the name ${Anna.name} appers,
 and seems to be in a terribly bad mood. He draws his nail club and goes on the attack!`);

if (Lara.health > 0){
    Lara.health = Lara.health - Anna.strenght;
    console.log("Eliana fick ont, och har nu " + Lara.health +"i hälsa");
}

else if  (Anna.health > 0){ 
    Anna.health = Anna.health - Lara.strenght;
    console.log("Elie fick ont, och har nu " + Anna.health + "i hälsa");
}

 else if (Anna.health < 0) {
    console.log("Anna slutande spela")
}
  

else {
    console.log("båda tröttande och gick hem")
    playTheGame = false;
}  
playTheGame = confirm("vill du spela")

}
