var myName ='Nicole';
var myNumber = 16;
var myString ='16';
var myBoolean=false;
var myNameArray= ['n','i','c','o','l','e'];
var myArray= [16,'16', 'k','a','p','p','e','r'];
var myFullName='nicole'+'kapper';
var myNumber = 1 + 99;
var longWord = 'supercalifragilisticexpialidocious';
var students = [
  'Vee',
  'Sophia',
  'Malini',
  'Ethan',
  'Nicole',
  'Ani',
  'Sarah',
  'Ivy',
  'Hunter',
  'Emily',
  'Daniela',
  'Carly',
  'Sophie',
  'Allison',
  'Germaine'
];
var studentsToday = 14;

var date = new Date();
var hour = date.getHours();

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday [date.getDay()];

console.log (myName);
console.log (myNumber);
console.log (myString);
console.log (myBoolean);
console.log (myNameArray);
console.log (myFullName);
console.log (myArray);
console.log (myNumber);

console.log (myName [0]);
console.log (myName [myName.length -1]);

console.log (longWord);

if ( studentsToday == students.length ) {
  console.log("roll call!!!!!");
}
else {
  console.log("oh no missing some kiddos");
}

for (var i =0; i < myNameArray.length; i++){
  console.log (myNameArray[i] + 'is #'+ i);
}

if (hour > 19 && hour < 21){
  consule.log ('it is between 7 and 9:40 pm');
}else {
  console.log ('it is not between 7 and 9:40 pm')
}

if ( n == "Monday") {
  console.log("fresh start" );
}
else if ( n=="Tuesday") {
  console.log("only just begun");
}
else if (n=="Wednesday") {
  console.log("hump dayyyyy");
}
else if ( n=="Thursday") {
  console.log("one more day");
}
else if ( n=="Friday") {
  console.log("wine and dine");
}else if ( n=="Saturday") {
  console.log("party the night away");
}else if ( n=="Sunday") {
  console.log("chill vibes");
}
else {
  console.log("crap");
}
var myFavs
var favRestaurant= [ 'Nix ',' The Plum ',' Banter ']
var favAnimals= ['flamingo ',' frog ',' humans ']
var favPlaces= [' Bedroom ', ' bookstore ', 'Sky Ting ' ]
var favPokemon= [' Mesprit ',' Charmander ',' Meganium ']

var myFaves= [favRestaurant+favAnimals+favPlaces+favPokemon];
console.log (myFaves);


var favLoops = [
  favRestaurant,
  favAnimals,
  favPlaces,
  favPokemon,
];

for ( var i = 0; i < favLoops.length; i++ ) {
  console.log( favLoops[i] + ' is in index ' + i );
}
