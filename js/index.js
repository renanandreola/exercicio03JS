//var state = "RS";
//if(state === "RS") {
  //document.body.append("Barbaridade tchê")
//}

var animal = prompt("Digite o nome de um animal");
var animalSelected = "";
animal = animal.toLowerCase();

if(animal === "gato") {
  animalSelected = "CAT";
}else if(animal === "cachorro") {
    animalSelected = "DOG";
}else if(animal === "pássaro") {
    animalSelected = "BIRD";
}else if(animal === "sapo") {
    animalSelected = "FROG";
}else if(animal === "leão") {
    animalSelected = "LION";
}else if(animal === "cavalo") {
    animalSelected = "HORSE";
}else if(animal === "crocodilo") {
    animalSelected = "CROCODILE";
}else if(animal === "rato") {
    animalSelected = "MOUSE";
}
if(animalSelected === "") {
document.body.append("Sorry, i couldn't find this animal!");
}else {
document.body.append("This animal in english is " + animalSelected)
}
