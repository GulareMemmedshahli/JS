function fullname() {
  return "Gulare Memmedsahli";
}
console.log("1", fullname());

//2
function fullName2(name, surname) {
  return name + "" + surname;
}
console.log("2", fullName2("Gulare", "Memmedsahli"));

//3
function addNumbers(number1, number2) {
  return number1 + number2;
}
console.log("3", addNumbers(10, 11));

//4
function areaOfRectangle(en, uzunluq) {
  return en * uzunluq;
}
console.log("4", areaOfRectangle(12, 4));
//5
function perimeterOfRectangle(en, uzunluq) {
  return 2 * (en + uzunluq);
}
console.log("5", perimeterOfRectangle(12, 4));

//6
function VolumOfRectPrism(a, b, c) {
  return a * b * c;
}
console.log("6", VolumOfRectPrism(3, 5, 9));

//7
function areaOfCircle(r) {
  return Math.PI * r * r;
}
console.log("7", areaOfCircle(3, 5, 9));

//8
function circumOfCircle(r) {
  return Math.PI * r * 2;
}
console.log("8", circumOfCircle(5));

//9
function sixliq(m, V) {
  return m / V;
}
console.log("9", sixliq(135, 5));

//10
function cevrici(C) {
  return (C * 9) / 5 + 32;
}
console.log("10", cevrici(100));

//11
function hesablayici(ceki, boy) {
  let bmi = (ceki / boy) * boy;

  if (bmi < 18.5) {
    return "cekiniz azdir";
  } else if (18.5 < bmi && bmi < 24.9) {
    return "normal ceki";
  } else if (25 < bmi && bmi < 29.9) {
    return "artiq ceki";
  } else {
    return "obez";
  }
}
console.log("11", hesablayici(25, 1.65));

//12
function CheckSeason(ay) {
  if (ay == "dekabr" || ay == "yanvar" || ay == "fevral") {
    return "qis";
  }
  if (ay == "mart" || ay == "aprel" || ay == "may") {
    return "yaz";
  }
  if (ay == "iyun" || ay == "iyul" || ay == "avqust") {
    return "yay";
  }
  if (ay == "sentyabr" || ay == "oktyabr" || ay == "noyabr") {
    return "payiz";
  } else {
  }
}
console.log("12", CheckSeason("yanvar"));

//13
function max(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  }
}
console.log("13", max(12, 122, 54));

//14
let array = [1, 5, 8, 9];

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printArray(array);

//min secir
function min(x, y, z) {
  if (x < z && x < y) {
    return x;
  }
  if (y < z && y < x) {
    return y;
  }
  if (z < y && z < x) {
    return z;
  }
}
console.log("min goster", min(1, 3, 5));

//15
let array1 = [12, 22, 34, 2];
function reverseArray(arrr) {
  let arraybos = [];
  for (let i = arrr.length - 1; i >= 0; i--) {
    arraybos.push(arrr[i]);
  }
  return arraybos;
}
console.log(reverseArray(array1));

//yas hesabla
function yashesablama(yas) {
  return 2022 - yas;
}

console.log(yashesablama(12));

//array
const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
];
function olkeler(olke) {
    let yeniolke=[];
  for (i = 0; i < olke.length; i++) {
    if (olke[i].length == 5) {
      yeniolke.push(olke[i]);
    }
  }
return yeniolke;
}
console.log(olkeler(countries))

//calculator

// let firstNumber = document.getElementById("first-number");
// let secondtNumber = document.getElementById("second-number");
// let operation = document.getElementById("operation");
// let calc = document.getElementById("calc");
// let output = document.getElementById("output");

// function calculate() {
//     let result;
//   switch (operation.value) {
//     case "topla":
//       result = Number(firstNumber.value) + Number(secondtNumber.value);
//       break;
//     case "cix":
//       result = Number(firstNumber.value) - Number(secondtNumber.value);
//       break;
//     case "vur":
//       result = Number(firstNumber.value) * Number(secondtNumber.value);
//       break;
//     case "bol":
//       result = Number(firstNumber.value) / Number(secondtNumber.value);
//       break;

//     default:
//       alert("duzgun deyil");
//       break;
//   }
//   output.innerText=result;
// }
// calc.addEventListener("click",calculate);


//16
let element=[4,5,2,1,7];
function addElement(){
    element.push(12);
    return element;
}
console.log("16",addElement(element));


