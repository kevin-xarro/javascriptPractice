// const birthYear = 1993;

// let century;

//     if (birthYear <= 2000) {
//         century = 20;
//     }
//     else{
//         century = 21;
//     }

// // console.log(`The current century is `)
// console.log(century);


//type conversion
// const inputYear = '1991';
// console.log(inputYear + 18);
// console.log(Number(inputYear) + 18);
// console.log(Number(inputYear) , inputYear);
// console.log(typeof NaN);
// console.log(String(23), 23);

// type coercion is when javascript converts a type into another to perform an operation
// console.log(`I am ` + 23 + ` years old!`);
// console.log('23' - '10');
// console.log('23' * '2');

//Falsey Values
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log(Boolean('jONAS'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 10;
// if(money) {
//     console.log("Dont spend it all :)");
// } else{
//     console.log('You should get a job!');
// }

// let height =123;
// if (height){
//     console.log(`YAY! Height is defined!`);
// } else {
//     console.log(`Height is UNDEFINED!`)
// }

// const age = `18`;
// if( age === 18) console.log(`Age is 18! (strict)`);
// if( age == 18) console.log(`Age is 18! (loose)`);

// const favourite = Number(prompt("Whats your favourite number ?"));
// console.log(favourite);
// console.log(typeof favourite);
// if (favourite === 23) {
//     console.log(`23 is an amazing number!`)
// } else if (favourite === 7) {
//     console.log(`7 is also a good number!`)
// } else if (favourite === 9) {
//     console.log(`9 is an amazing choice!`)
// } else {
//     console.log(`Number is not 23, 7 or 9!`)
// }

// const hasDriversLicence = true;
// const hasGoodVision = true;
// const isTired = false;


// console.log(hasDriversLicence && hasGoodVision);
// console.log(hasDriversLicence || hasGoodVision);
// console.log(!hasDriversLicence);

// console.log(hasDriversLicence && hasGoodVision && isTired);

// if (hasDriversLicence && hasGoodVision && !isTired) {
//     console.log(`Sarah is able to drive!`)
// } else {
//     console.log(`Someone else should drive!`);
// }

/* Write your code below. Good luck! 🙂 */

// const dolphinOne = 96;
// const dolphineTwo = 108;
// const dolphoneThree = 89;

// const koalaOne = 88;
// const koalaTwo = 91;
// const koalaThree = 110;

// const scoreDolphins = (dolphinOne + dolphoneThree + dolphineTwo) / 3;
// const scoreKoalas = (koalaThree + koalaTwo + koalaOne) / 3;

// if (scoreKoalas > scoreDolphins) {
//     console.log("Koalas win the trophy")
// } else if (scoreDolphins > scoreKoalas) {
//     console.log("Dolphins win the trophy")
// } else {
//     console.log("Both win the trophy")
// }


//SWITCH STATEMENT

// const day = `tuesday`;
// switch (day) {
//     case 'monday': //day === 'monday'
//         console.log('I plan my course structure!');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos!');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples!');
//         break;
//     case 'friday':
//         console.log('record videos!')
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('not a valid day!');

// }


// if (day == 'monday') {
//     console.log('I plan my course structure!');
//     console.log('Go to coding meetup');
// }
// else if (day == 'tuesday') {
//     console.log('Prepare theory videos!');
// }
// else if (day == 'wednesday' || day == 'thursday') {
//     console.log('write code examples!')
// }
// else if (day == 'friday') {
//     console.log('record videos!')
// }
// else if (day == 'saturday' || day == 'sunday') {
//     console.log('Enjoy the weekend :D');
// }
// else {
//     console.log('not a valid day!');
// }

//expression
// 3 + 4
// 1991
// true && false & !false

// let str = `hello`;
// if (23 > 10) {
//     str = `23 is bigger than 10`;
// }

// console.log(str);


// CONDITIONAL OPERATOR

const age = 23;
age >= 18 ? console.log(`I would like some wine!`) :
    console.log(`I would like to drink some water!`);