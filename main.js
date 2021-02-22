const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

const elements = [hole, fieldCharacter, fieldCharacter, fieldCharacter]

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

//Print map function
pMap = (map, w, h) => {
    for (i = 0; i < height; i++) {
        for (j = 0; j < width; j++){
            process.stdout.write(map[j][i])
        }
        console.log();
    }
}

//Place hat somewhere on map
const gX = Math.round(Math.random()*(width-1));
const gY = Math.round(Math.random()*(height-1));
 
map[gX][gY] = hat;

pMap(map, width, height);

//Define a checkState function
cState = (map, w, h, hat) => {
    //Returns 1 if won, 0 if not yet.
    var condition = 1;
    for (i = 0; i < height; i++) {
        for (j = 0; j < width; j++){
            condition = map[i][j] == hat ? 0 : 1; 
        }
    }
    return condition;
}

console.log(cState(map, width, height, hat));