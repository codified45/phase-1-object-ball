
const gameObject = function() {
        const nbaTeams = {
            home: {
                teamName: "Brooklyn Nets",
                colors: ["White", "Black"],
                players: {
                    "Alan Anderson": {
                        number: 0,
                        shoe: 16,
                        points: 22,
                        rebounds: 12,
                        assists: 12,
                        steals: 3,
                        blocks: 1,
                        slamDunks: 1,
                    },
                    "Reggie Evans": {
                        number: 30,
                        shoe: 14,
                        points: 12,
                        rebounds: 12,
                        assists: 12,
                        steals: 12,
                        blocks: 12,
                        slamDunks: 7,
                    },
                    "Brook Lopez": {
                        number: 11,
                        shoe: 17,
                        points: 17,
                        rebounds: 19,
                        assists: 10,
                        steals: 3,
                        blocks: 1,
                        slamDunks: 15,
                    },
                    "Mason Plumlee": {
                        number: 1,
                        shoe: 19,
                        points: 26,
                        rebounds: 12,
                        assists: 6,
                        steals: 3,
                        blocks: 8,
                        slamDunks: 5,
                    },
                    "Jason Terry": {
                        number: 31,
                        shoe: 15,
                        points: 19,
                        rebounds: 2,
                        assists: 2,
                        steals: 4,
                        blocks: 11,
                        slamDunks: 1,
                    },
                },
            },
            away: {
                teamName: "Charlotte Hornets",
                colors: ["Turquoise", "Purple"],
                players: {
                    "Jeff Adrien": {
                        number: 4,
                        shoe: 18,
                        points: 10,
                        rebounds: 1,
                        assists: 1,
                        steals: 2,
                        blocks: 7,
                        slamDunks: 2,
                    },
                    "Bismak Biyombo": {
                        number: 0,
                        shoe: 16,
                        points: 12,
                        rebounds: 4,
                        assists: 7,
                        steals: 7,
                        blocks: 15,
                        slamDunks: 10,
                    },
                    "DeSagna Diop": {
                        number: 2,
                        shoe: 14,
                        points: 24,
                        rebounds: 12,
                        assists: 12,
                        steals: 4,
                        blocks: 5,
                        slamDunks: 5,
                    },
                    "Ben Gordon": {
                        number: 8,
                        shoe: 15,
                        points: 33,
                        rebounds: 3,
                        assists: 2,
                        steals: 1,
                        blocks: 1,
                        slamDunks: 0,
                    },
                    "Brendan Haywood": {
                        number: 33,
                        shoe: 15,
                        points: 6,
                        rebounds: 12,
                        assists: 12,
                        steals: 22,
                        blocks: 5,
                        slamDunks: 12,
                    },
                },
            },
        };
        return nbaTeams;
};


const obj = gameObject();


// Determines if the value is an object. For iterating through nested objects.  
const isObject = (val) => {
    if (val === null) {  // need this because if val happens to be null typeof null returns "object"
        return false;
    };

    return typeof val === "object";
};


// This can probably be improved since the way it is right now it will always drill down to the values of every nested object.  If you want to stop at a specific object along the way you would need to modify or build a new function. 
const bestObjectIterator = (obj, func, targetPlayerProperty) => {
    let statCounter = 0;
    innerObjectIterator(obj);
    function innerObjectIterator(obj) {
        for (const key in obj) {
            if ( isObject(obj[key]) ) {
                innerObjectIterator(obj[key]);
            } else { statCounter = func(obj, key, statCounter, targetPlayerProperty); }; 
        }; 
    };
    return statCounter;
};



// Build a function, numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player.
const numPointsScored = (playerName) => {
    let playerNamePoints;
    objectIterator(obj);
    function objectIterator(obj) {
        for (const key in obj) {
            if ( isObject(obj[key]) && key !== playerName ) {
                    objectIterator(obj[key]);
            } else if (key === playerName) {
                    // console.log(`${playerName} has ${obj[key]["points"]} points!`);
                    playerNamePoints = obj[key]["points"];
            };
        };
    };
    return playerNamePoints;
};


// Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size for that player.
const shoeSize = (playerName) => {
    let playerShoeSize;
    objectIterator(obj);
    function objectIterator(obj) {
        for (const key in obj) {
            if ( isObject(obj[key]) && key !== playerName ) {
                objectIterator(obj[key]);
            } else if (key === playerName) {
                playerShoeSize = obj[key]["shoe"];
            };
        };
    };
    return playerShoeSize;
};


// Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
const teamColors = (teamName) => {
    let teamColorsArray = []; // spread [team].colors array (below)
    objectIterator(obj);
    function objectIterator(obj) {
        for (const key in obj) {
            if ( isObject(obj[key]) && key !== "colors") {
                objectIterator(obj[key]);
            } else if (key === "colors" && obj["teamName"] === teamName) {
                teamColorsArray = [...obj["colors"]];
            };
        };
    };
    return teamColorsArray;
};


// Build a function, teamNames, that operates on the game object to return an array of the team names.
const teamNames = () => {
    let arrayOfTeamNames = [];
    objectIterator(obj);
    function objectIterator(obj) {
        for (const key in obj) {
            if ( isObject(obj[key]) && key !== "teamName") {
                objectIterator(obj[key]);
            } else if (key === "teamName") {
                arrayOfTeamNames.push(obj[key]);
            };
        };
    };
    return arrayOfTeamNames;
};


// Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey numbers for that team.
const playerNumbers = (teamName) => {
    let arrayOfJerseyNumbersOnTeam = [];
    objectIterator(obj);
    function objectIterator(obj) {
        for (const key in obj) {
            if ( isObject(obj[key]) && key !== "teamName" ) {
                objectIterator(obj[key]);
            } else if (key === "teamName" && obj[key] === teamName) {
                const innerObj = obj["players"];
                for (const innerKey in innerObj) {
                    arrayOfJerseyNumbersOnTeam.push(innerObj[innerKey].number);
                };
            };
        };
    };
    return arrayOfJerseyNumbersOnTeam;
};


// Build a function, playerStats, that takes in an argument of a player's name and returns an object of that player's stats. 
const playerStats = (playerName) => {
    let playerStatObject = {};
    objectIterator(obj);
    function objectIterator(obj) {
        for (const key in obj) {
            if ( isObject(obj[key]) && key !== playerName ) {
                objectIterator(obj[key]);
            } else if (key === playerName) {
                playerStatObject = obj[key];
            };
        };
    };
    return playerStatObject;
};


// Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size.

// Finds the largest shoe size a player in the object has.
const largestShoeSize = () => {
    // let largestShoeSizedPlayer;
    let shoeSize = 0;
    objectIterator(obj);
    function objectIterator(obj) {
        for (const key in obj) {
            if ( isObject(obj[key]) ) {
                objectIterator(obj[key]);
            } else if (key === "shoe" && shoeSize < obj[key]) {
                    shoeSize = obj[key];
            };
        };
    };
    return shoeSize;
};


// Returns rebounds associated with the player that has the largest shoe size.
const bigShoeRebounds = () => {
    let rebounds = 0;
    objectIterator(obj);
    function objectIterator(obj) {
        for (const key in obj) {
            if ( isObject(obj[key]) && obj[key]["shoe"] !== largestShoeSize()) {
                objectIterator(obj[key]);
            } else if (obj[key]["shoe"] === largestShoeSize()) {
                    rebounds = obj[key]["rebounds"]; // need obj in front of [key]
            };
        };
    };
    return rebounds;
};


// Which player has the most points? Call the function mostPointsScored.

//Returns the highest amount of points scored by any player. 
const highestPoints = () => {
    let pointsAmount = 0;
    objectIterator(obj);
    function objectIterator(obj) {
        for (const key in obj) {
            if ( isObject(obj[key]) ) {
                objectIterator(obj[key]);
            } else if (key === "points" && pointsAmount < obj[key]) {
                pointsAmount = obj[key];
            };
        };
    };
    return pointsAmount;
};

    // const mostPointsScored = () => {
    //     let playerName;
    //     objectIterator(obj);
    //             if ( isObject(obj[key]) && obj[key]["points"] !== highestPoints() ) {
    //                 objectIterator(obj[key]);
    //             } else if (obj[key]["points"] === highestPoints()) {
    //                 playerName = key;
    //             };
    //     return playerName;
    // };

 // objectIterator(obj, mostPointsScored);


// Old, working mostPointsScored function
// Returns name of player who scored the most points. 
const mostPointsScored = () => {
    let playerName;
    objectIterator(obj);
    function objectIterator(obj) {
        for (const key in obj) {
            if ( isObject(obj[key]) && obj[key]["points"] !== highestPoints() ) {
                objectIterator(obj[key]);
            } else if (obj[key]["points"] === highestPoints()) {
                playerName = key;
            };
        };
    };
    return playerName;
};


// Pretty sure something is wrong here..... tried building objectIterator with two parameters
    // function objectIterator(obj, ifElseIfFunction) {
    //     for (const key in obj) {
    //         ifElseIfFunction();
    //     };
    // };


const homeTeam = obj.home;
const awayTeam = obj.away;


// Finds amount of points the Home team scored. 
const homeTeamPoints = () => {
    let points = 0;
    objectIterator(homeTeam);
    function objectIterator(obj) {
        for (const key in obj) {
            if ( isObject(obj[key]) ) {
                objectIterator(obj[key]);
            } else if (key === "points") {
                points += obj[key];
            };
        };
    };
    return points;
};


// Finds amount of points the Away team scored. 
const awayTeamPoints = () => {
    let points = 0;
    objectIterator(awayTeam);
    function objectIterator(obj) {
        for (const key in obj) {
            if ( isObject(obj[key]) ) {
                objectIterator(obj[key]);
            } else if (key === "points") {
                points += obj[key];
            };
        };
    };
    return points;
};


// Which team has the most points? Call the function winningTeam.
const winningTeam = () => {
    let thisTeamWon = ( homeTeamPoints() > awayTeamPoints() ) ? homeTeam.teamName:awayTeam.teamName;
    return thisTeamWon;
};


const putAllPlayerNamesIntoArray = () => {
    const homePlayerNames = Object.getOwnPropertyNames(obj.home.players);
    const awayPlayerNames = Object.getOwnPropertyNames(obj.away.players);
    const arrayOfAllPlayerNames = [...homePlayerNames, ...awayPlayerNames];
    return arrayOfAllPlayerNames;
};


const nameArray = putAllPlayerNamesIntoArray();


// Which player has the longest name? Call the function playerWithLongestName.
const playerWithLongestName = () => {
    let longestName;
    let nameLength = 0;
    for (const element of nameArray) {
        if (element.length > nameLength) {
            nameLength = element.length;
            longestName = element;
        };
    };
    return longestName;
};


/*  // Didn't need to be so complicated:

// Which player has the longest name? Call the function playerWithLongestName.
const playerWithLongestName = () => {
    let longestNamedPlayer;
    let nameLength;
    let previousKey;
    objectIterator(obj);
    function objectIterator(obj) {
        for (const firstOrderKey in obj) {
            if ( isObject(obj[firstOrderKey]) ) {
                previousKey = firstOrderKey;
                objectIterator(obj[firstOrderKey]);
            } else if (1) {

            };
        };
    };
    return longestNamedPlayer;
};

*/


// Super Bonus: 
// Write a function that returns true if the player with the longest name had the most steals. Call the function doesLongNameStealATon.
const mostStealsAmount = () => {
    let stealAmount = 0;
    objectIterator(obj);
    function objectIterator(obj) {
        for (const key in obj) {
            if ( isObject(obj[key]) ) {
                objectIterator(obj[key]);
            } else if (key === "steals" && stealAmount < obj[key]) {
                stealAmount = obj[key];
            };
        };
    };
    return stealAmount;
};


const doesLongNameStealATon = () => {
    let stealsALot;
    const longName = playerWithLongestName();
    // can't remove this until i reread the objectball page. Read with renewed perspective. 
    objectIterator(obj);
    function objectIterator(obj) {
        for (const key in obj) {
            if ( isObject(obj[key]) && obj[key]["steals"] !== mostStealsAmount() ) {
                objectIterator(obj[key]);
            } else if (key === "steals" && stealAmount < obj[key]) {
                stealAmount = obj[key];
            };
        };
    };
    // stealsALot = (stealAmount === obj[playerWithLongestName()].steals) ? true:false; 
    return stealsALot;
};



/* Code that I worked on with Demetrio:
// it is for grabbing the string that represents the object that has the largest shoe size (the players name). Need a higher order key + variables in appropriate scope to access the string needed after iterating through it.  

// Finds the largest shoe size a player in the object has.
const largestShoeSize = () => {
    // let largestShoeSizedPlayer;
    let shoeSize = 0;
    objectIterator(obj);
    let playerKey;
    let previousKey;
    function objectIterator(obj) {
        for (const firstOrderKey in obj) {
            
            if ( isObject(obj[firstOrderKey]) ) {
                previousKey = firstOrderKey;
                objectIterator(obj[firstOrderKey]);
            } else if (key === "shoe" && shoeSize < obj[key]) {
                    playerKey = previousKey;
                    shoeSize = obj[key];
                   // debugger;
                   // largestShoeSizedPlayer = obj;
            };
        };
    };
    return shoeSize;
};

*/

// Personal Challenge 1: Create a maxBy() function where you can find the maximum value of any of the "players" objects properties. You choose which property to max by passing the property as a parameter.     
const maxBy = (property) => {
    let propertyAmount = 0;
    objectIterator(obj);
    function objectIterator(obj) {
        for (const key in obj) {
            if ( isObject(obj[key]) ) {
                objectIterator(obj[key]);
            } else if (key === property && propertyAmount < obj[key]) {
                propertyAmount = obj[key];
            };
        };
    };
    return propertyAmount;
};

// Personal Challenge 2: Create an objectIterator that accepts 2 arguments: One of the object and one of the function which represents the if/else if block that changes



// 
        // function newObjectIterator (obj) {
        //     for (const key in obj) {
        //         if ( isObject(obj[key]) ) {
        //             newObjectIterator(obj[key]);
        //         } else {return key};
        //     };
        // };

    //from here 

let globalStatCounter = 0; // //Might not be a good idea if functions are running parallel. 

// const resetGlobalStatCounter = () => {
//     globalStatCounter = 0;
// };

// const usedGlobalStatCounter = globalStatCounter;
//     resetGlobalStatCounter(); 


const newObjectIterator = (obj, func) => {
// innerObjectIterator(obj)? Could use that if I wanted to keep the statCounter in this scope. I think I have to because there's no way to reset the counter otherwise.  Will cause issues if all functions are trying to access the same variable to store their intermediate values. 
    for (const key in obj) {
        if ( isObject(obj[key]) ) {
            newObjectIterator(obj[key], func);
        } else {func(obj, key);}; 
    };
    return globalStatCounter;
};


const improvedMostStealsAmount = (obj, key) => {
    if (key === "steals" && globalStatCounter < obj[key]) {
        globalStatCounter = obj[key];
    };
};




const bestMostStealsAmount = (obj, key, statCounter) => {
    if (key === "steals" && statCounter < obj[key]) {
        statCounter = obj[key];
    };
    return statCounter;
};

const bestHighestPoints = (obj, key, statCounter) => {
    if (key === "points" && statCounter < obj[key]) {
        statCounter = obj[key];
    };
    return statCounter;
};

// how to pass parameter to function without calling the function?
// like this: 
const bestMaxBy = (obj, key, statCounter, targetPlayerProperty) => {
    if (key === targetPlayerProperty && statCounter < obj[key]) {
        statCounter = obj[key];
    };
    return statCounter;
};
// bestObjectIterator(obj, bestMaxBy, "number")     => 33
// bestObjectIterator(obj, bestMaxBy, "shoe")       => 19
// bestObjectIterator(obj, bestMaxBy, "points")     => 33
// bestObjectIterator(obj, bestMaxBy, "rebounds")   => 19
// bestObjectIterator(obj, bestMaxBy, "assists")    => 12
// bestObjectIterator(obj, bestMaxBy, "steals")     => 22
// bestObjectIterator(obj, bestMaxBy, "blocks")     => 15
// bestObjectIterator(obj, bestMaxBy, "slamDunks")  => 15


    // don't need a callback actually. Just passed an extra parameter which the other functions should ignore. 

    // put this where you want to pass it as argument without invoking the function
            // const callBackFunc = () => {
            //     bestMaxBy(obj, key, statCounter, targetPlayerProperty);
            // };

            // callFunction(callbackFunc)



                // function improvedMostPointsScored() {
                //     debugger;
                //     let playerName;
                //     debugger;
                //         if (newObjectIterator(obj) === "points" && obj[newObjectIterator(obj)] === highestPoints() ) {
                //                 debugger;
                //                 playerName = key;
                //         };
                //     return playerName;
                //     };



        /// modifying below
    // const newObjectIterator = (obj) => {
    //     for (const key in obj) {
    //         if ( isObject(obj[key]) ) {        // && obj[key][target] !== highestPoints()
    //             newObjectIterator(obj[key]);
    //         } else {
    //             debugger;
    //             return key};
    //     };
    //     return false;
    // };


    // function improvedMostPointsScored() {
    //     let playerName;
    //     // let target = "points"
    //     while (newObjectIterator(obj)) {
    //         debugger;
    //             if (newObjectIterator(obj) === "points" && obj[newObjectIterator(obj)] === highestPoints() ) {
    //                 debugger;
    //                 playerName = key;
    //             };
    //             };
    //     return playerName;
    //     };



        // function improvedMostPointsScored() {
        //     let playerName;
        //     while (!newObjectIterator(obj)) {
        //         debugger;
        //             if (obj[key]["points"] === highestPoints() ) {
        //                 debugger;
        //                 playerName = key;
        //             };
        //             };
        //     return playerName;
        //     };


    // function improvedMaxBy(property) {
    //     newObjectIterator();
    //     if (key === property && iteratorTarget < obj[key]) {
    //         iteratorTarget = obj[key];
    //     };
    // };

        // const improvedMaxBy = (property) => {
        //     if (key === property && iteratorTarget < obj[key]) {
        //         iteratorTarget = obj[key];
        //     };
        // };



/// list of function calls for testing here:





//                              *** Unused functions ***

function deepIterator(target) {
    if (typeof target === "object") {
        for (const key in target) {
            deepIterator(target[key]);
        }
    } else {
        console.log(target); 
    };
};


function gameObjectIterator() {
    deepIterator(obj);
};


function displayKeys(obj) {
    return Object.keys(obj);
};


function keysIterator(obj) {
    Object.keys(obj).forEach(key => {
        console.log(`${key}`)
        if (typeof obj[key] === "object" && obj[key] !== null) { // needed because typeof null returns "object"
        keysIterator(obj[key]);
        };
    })
};


//                              *** Older 