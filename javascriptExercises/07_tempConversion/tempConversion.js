//Farenheight to Celsius
const ftoc = function(faren) {
//[°C] = ([°F] − 32) × 5⁄9

let celc = (faren - 32) * 5/9;
return Math.round(celc * 10) / 10;

};

//Celcius to Farenheight
const ctof = function(celc) {
//[°F] = [°C] × 9⁄5 + 32

let faren = celc * 9/5 + 32;
return Math.round(faren * 10) /10;

};

module.exports = {
  ftoc,
  ctof
};
