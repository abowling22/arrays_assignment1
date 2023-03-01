var color_Palette = ["red", "green", "blue", "yellow"];

var ticket_Prices = ["1", "2", "5", "10"];

var isSmelly = ["true", "false", "true", "true"];

// This command is pushing the bronze variable at the end of the array
color_Palette.push("bronze");

// This command is adding the variables of 25 and 84 to beginning of the array
ticket_Prices.unshift("25", "84");

// This command is popping at the final variable in the "isSmelly" array
isSmelly.pop()

console.log(color_Palette, ticket_Prices, isSmelly);

// arrays in javascript start with an index of 0 and move up by incriments of 1. Index positions are important to understand as variables can be called by their indexing position.
