// number--1
// Feet to Mile

function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;

}

var convert = feetToMile(120000);
console.log(convert);


// number--2
// wood Calculator

function woodCalculator(chair, table, bed){
    var chairNumber = chair * 1;
    var tableNumber = table * 3;
    var bedNumber = bed * 5;
    var totalWood = chairNumber + tableNumber + bedNumber;
    return totalWood;
}
var result = woodCalculator(2, 3, 5);
console.log(result);

// number--3
// brick Calculator

function brickCalculator(floor) {
    let totalBrick;

    if (floor <= 10) {
        totalBrick = floor * 15 * 1000;
    } else if (floor <= 20) {
        totalBrick = (10 * 15 * 1000) + ((floor - 10) * 12 * 1000);
    } else {
        totalBrick = (10 * 15 * 1000) + (10 * 12 * 1000) + ((floor - 20) * 10 * 1000);
    }

    return totalBrick;
}

console.log(brickCalculator(40));

// number--4
// tiny friend

function tinyFriend(friends) {
    let tiny = friends[0];

    for (let i = 0; i < friends.length; i++) {
        let name = friends[i];
        if (name.length < tiny.length) {
            tiny = name;
        }
    }

    return tiny;
}

let friendList = ["Pintu", "Jahedul", "ovi", "Rayhan"];
console.log(tinyFriend(friendList));
