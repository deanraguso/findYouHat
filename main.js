const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

//Initialize the map
width = prompt("Enter map width: ")
height = prompt("Enter map height: ")

