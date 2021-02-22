const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

const elements = [hole, fieldCharacter, pathCharacter]

//Initialize the map
const width = prompt("Enter map width: ")
const height = prompt("Enter map height: ")
var map = new Array(width);
for (i = 0; i < width; i++){
    map[i] = new Array(height);
}

for (i = 0; i < width; i++) {
    for (j = 0; j < height; j++){
        map[i][j] = elements[Math.round(Math.random()*2)];
    }
}
