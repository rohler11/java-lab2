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

// Write a for loop that starts at 0 and iterates by increments of 1 while i is less than the length of the lifeEvents array. Each iteration of the loop should log a new sentence from the lifeEvents array. You should only have one console.log method.

for(let event of lifeEvents) {
    console.log(event)
}

// for(let i=0, i < lifeEvents.length, i++) {
//     console.log(lifeEvents[i]);
// }
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

