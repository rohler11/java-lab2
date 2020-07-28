let name = "Rachel Ohler";
let age = "26";
let birthday = "July 31st";
let detroitGC = false;
let lifeEvents = ["I was raised in Clare, MI", "I went to Kendall College of Art and Design", "I went to Japan last fall", "I'm a stinky loser"]

if(detroitGC) {
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan.
    I am currently ${age} years old and my birthday is on ${birthday}`);
} else {
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan.
    I am currently ${age} years old and my birthday is on ${birthday}`);
}
// i did this differently from what was asked
for(let event of lifeEvents) {
    console.log(event)
}

let counter = 0

while(true) {
    let randomNumber = Math.floor((Math.random() * 10) + 1);
    if(randomNumber != 5) {
        counter++;
        console.log(`${randomNumber} !==5`) 
    } else {
        counter++;
        console.log(`5 === 5. It took ${counter} iterations to randomly generate the number 5`)
        break;
    }
}
// from scratch with help V V V

// "use strict";

// let name = "Rachel Ohler";
// let age = "26";
// let birthday = "July 31st";
// let detroitGC = false;
// let lifeEvents = ["I was raised in Clare, MI", "I went to Kendall College of Art and Design", "I went to Japan last fall", "I'm a Twitch streamer (sort of)"];

// if(detroitGC) {
//     console.log(`My ${name} and I am a student at Grand Circus in Detroit, Michigan.
//     I am currently ${age} years old and my birthday is on ${birthday}`)
// } else {
//     console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan.
//     I am currently ${age} years old and my birthday is on ${birthday}`);
// }

// for(let i = 0; i < lifeEvents.length; i++) {
//     console.log(lifeEvents[i])
// }

// Extended work

// let counter = 0;

// while(true) {
//     let randomNumber = Math.floor(Math.random() * 10 + 1);
//     if (randomNumber !== 5) {
//         counter++;
//         console.log(`${randomNumber} !== 5`)
//     }
//     else {
//         counter++;
//         console.log(`5 === 5. It took ${counter}this many iterations to randomly generate 5`)
//         break;
//     }
// }

// Extended work V V V

// let hours = 40;
// let wage = 10;

// if(hours <= 40) {
//     let paycheck = hours * wage;
//     console.log(paycheck);
// } 
// else {
//     let overtime = (hours - 40) * (wage * 1.5);
//     let paycheck = 40 * wage + overtime;
//     console.log(paycheck)
// }

// Bonus Work

// let hours = 40;
// let wage = 10;

// if(hours <= 40) {
//     let paycheck = hours * wage;
//     let weeks = 1000000 / paycheck;
//     console.log(`With wage =${wage} and hours =${hours} it would take ${weeks} weeks.`);
// } 
// else {
//     let overtime = (hours - 40) * (wage * 1.5);
//     let paycheck = 40 * wage + overtime;
//     let weeks = Math.ceil(1000000 / paycheck);
//     console.log(`With wage =${wage} and hours =${hours} it would take ${weeks} weeks.`);
// }