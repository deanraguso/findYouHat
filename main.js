const prompt = require('prompt-sync')({sigint: true});

//Define a checkState function
cState = (map, w, h, hat) => {
    //Returns 1 if won, 0 if not yet.
    var condition = 0;
    for (i = 0; i < height; i++) {
        for (j = 0; j < width; j++){
            if(map[i][j] == hat){
                condition = 1;
            }
        }
    }
    return condition;
}

//Move function - changes game state - returns 1 if move was legal, 0 if not
moveF = (map, w, h, move, x, y) => {
    
    //initialize future move to current x and y
    futX = x;
    futY = y;

    //Check Requested move is valid
    futX = move == 'a' ? futX - 1 : move == 'd' ? futX + 1 : futX;
    futY = move == 'w' ? futY - 1 : move == 's' ? futY + 1 : futY;

    //Check it's on the map
    if (futX < 0 || futX >= w) return 0;
    if (futY < 0 || futY >= h) return 0;
 
    //Check it's not moving into a hole
    if (map[futX][futY] == hole) return 0;

    //Move should be valid, so make the move;
    map[futX][futY] = pathCharacter;
    return 1;
}

// Perform breadth first search on map copy
//pass it a path array, returns the best path using a breadth first search.
pathFinder = (map, w, h, sx, sy, hat, path) => {
    testMap = JSON.parse(JSON.stringify(map));
    pMap(testMap, w, h);
}

// Check state is winnable
isWinnable = (map, w, h, hat) => {
    return true;
}








const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

const elements = [hole, fieldCharacter, fieldCharacter, fieldCharacter]

//Initialize the map
const width = prompt("Enter map width: ")
const height = prompt("Enter map height: ")
var map = new Array(width);

do {
    for (i = 0; i < width; i++){
        map[i] = new Array(height);
    }

    for (i = 0; i < width; i++) {
        for (j = 0; j < height; j++){
            map[i][j] = elements[Math.round(Math.random()*2)];
        }
    }
} while (cState(map,width, height, hat) && isWinnable(map, width, height, hat));//Until you have found a valid map state.

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










//Create a game loop and character
iX = Math.min(width-1, width-gX)
iY = Math.min(height-1, height-gY)
map[iX][iY] = pathCharacter;

var xpos = iX;
var ypos = iY;

path = [];
pathFinder(map, width, height, xpos, ypos, hat, path);

while(cState(map, width, height, hat)){
    pMap(map, width, height);
    var move = prompt("Enter a move (w,s,a,d): ");

    var x = xpos;
    var y = ypos;

    //Manage moves
    if(moveF(map, width, height, move, x, y)){
        xpos = move == 'd' ? xpos + 1: move == 'a' ? xpos -1 : xpos;
        ypos = move == 'w' ? ypos - 1: move == 's' ? ypos +1 : ypos;
    }
}  

console.log("You win!");

