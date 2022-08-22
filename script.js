var s = "her email is bisola@gmail.com, phone number is 08155183042. Thanks support!";
console.log(s)

var bisi = s.substring(13,19)
var number = s.substring(47,58)
var mailbisi = s.substring(13,29)
console.log(bisi)
console.log(number)
console.log(mailbisi)

var namee = s.slice(s.indexOf('b'),s.indexOf('@'));
console.log(namee)

var email = s.slice(s.indexOf('b'),s.indexOf(','));
console.log(email)

//Number, parseInt, parseFloat
Number("60");
let y = "85";
console.log(Number(y));

undefined
//the parseint methos parses a string and returns the first no value in a string and returns it as an integar
let size_tim = "65 32 20";
console.log(parseInt(size_tim));

undefined
let size = "65kg";

let weight = "56.7kg";
console.log(parseFloat(weight));

let height = 30;
console.log(height.toString() + "cm");


let t = 30.674;
console.log(t.toFixed(2));
