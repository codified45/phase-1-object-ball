
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


const obj = gameObject();  // done so that a new gameObject was created every time a function ran, to protect against mutating the original data.  


// Determines if the value is an object. For iterating through nested objects.  
const isObject = (val) => {
    if (val === null) {  // need this because if val happens to be null typeof null returns "object"
        return false;
    };

    return typeof val === "object";
};
// isObject(gameObject())  => true


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
// numPointsScored("Brook Lopez")  => 17


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
// shoeSize("Jason Terry")  => 15


// Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
const teamColors = (teamName) => {
    let teamColorsArray = [];
    objectIterator(obj);
    function objectIterator(obj) {
        for (const key in obj) {
            if ( isObject(obj[key]) && key !== "colors" ) {
                objectIterator(obj[key]);
            } else if (key === "colors" && obj["teamName"] === teamName) {
                teamColorsArray = [...obj["colors"]];   // spread operator
            };
        };
    };
    return teamColorsArray;
};
// teamColors("Charlotte Hornets")  => ['Turquoise', 'Purple']


// Build a function, teamNames, that operates on the game object to return an array of the team names.
const teamNames = () => {
    let arrayOfTeamNames = [];
    objectIterator(obj);
    function objectIterator(obj) {
        for (const key in obj) {
            if ( isObject(obj[key]) && key !== "teamName" ) {
                objectIterator(obj[key]);
            } else if (key === "teamName") {
                arrayOfTeamNames.push(obj[key]);
            };
        };
    };
    return arrayOfTeamNames;
};
// teamNames(gameObject())  => ['Brooklyn Nets', 'Charlotte Hornets']


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
// playerNumbers("Brooklyn Nets")  => [0, 30, 11, 1, 31]


// Build a function, playerStats, that takes in an argument of a player's name and returns an object of that player's stats. 
const playerStats = (playerName) => {
    let playerStatsObject = {};
    objectIterator(obj);
    function objectIterator(obj) {
        for (const key in obj) {
            if ( isObject(obj[key]) && key !== playerName ) {
                objectIterator(obj[key]);
            } else if (key === playerName) {
                playerStatsObject = obj[key];
            };
        };
    };
    return playerStatsObject;
};
// playerStats("Bismak Biyombo")  => 
// {number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10}
// [[Prototype]]: Object


// Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size.

// Finds the largest shoe size that any player in the object has.
const largestShoeSize = () => {
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
// largestShoeSize()  => 19


// Returns rebounds associated with the player that has the largest shoe size.
const bigShoeRebounds = () => {
    let rebounds = 0;
    objectIterator(obj);
    function objectIterator(obj) {
        for (const key in obj) {
            if ( isObject(obj[key]) && obj[key]["shoe"] !== largestShoeSize() ) {
                objectIterator(obj[key]);
            } else if ( obj[key]["shoe"] === largestShoeSize() ) {
                    rebounds = obj[key]["rebounds"]; // need obj in front of [key]
            };
        };
    };
    return rebounds;
};
// bigShoeRebounds()  => 12


// ** Bonus Questions:
// Which player has the most points?  Call the function mostPointsScored.

//Returns the highest amount of points scored by any player. 
const bestHighestPoints = (obj, key, statCounter) => {
    if (key === "points" && statCounter < obj[key]) {
        statCounter = obj[key];
    };
    return statCounter;
};
// bestObjectIterator(obj, bestHighestPoints)  => 33


// Returns name of player who scored the most points. 
const mostPointsScored = () => {
    const highestScore = bestObjectIterator(obj, bestHighestPoints);
    let playerName; 
    objectIterator(obj);
    function objectIterator(obj) {
        for (const key in obj) {
            if ( isObject(obj[key]) && obj[key]["points"] !== highestScore ) {
                objectIterator(obj[key]);
            } else if ( obj[key]["points"] === highestScore ) {
                playerName = key;
            };
        };
    };
    return playerName;
};
// mostPointsScored()  => 'Ben Gordon'


// Which team has the most points? Call the function winningTeam.  

// Seperates the two Team objects
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
// homeTeamPoints()  => 96


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
// awayTeamPoints()  => 85


// Which team has the most points?  Call the function winningTeam.  
const winningTeam = () => {
    let thisTeamWon = ( homeTeamPoints() > awayTeamPoints() ) ? homeTeam.teamName:awayTeam.teamName;
    return thisTeamWon;
};
// winningTeam()  => 'Brooklyn Nets'


// Which player has the longest name?  Call the function playerWithLongestName.  
const putAllPlayerNamesIntoArray = () => {
    const homePlayerNames = Object.getOwnPropertyNames(obj.home.players);
    const awayPlayerNames = Object.getOwnPropertyNames(obj.away.players);
    const arrayOfAllPlayerNames = [...homePlayerNames, ...awayPlayerNames];
    return arrayOfAllPlayerNames;
};
// putAllPlayerNamesIntoArray()  => ['Alan Anderson', 'Reggie Evans', 'Brook Lopez', 'Mason Plumlee', 'Jason Terry', 'Jeff Adrien', 'Bismak Biyombo', 'DeSagna Diop', 'Ben Gordon', 'Brendan Haywood']


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
// playerWithLongestName()  => 'Brendan Haywood'


// **** Super Bonus: 
// Write a function that returns true if the player with the longest name had the most steals. Call the function doesLongNameStealATon.  
const bestMostStealsAmount = (obj, key, statCounter) => {
    if (key === "steals" && statCounter < obj[key]) {
        statCounter = obj[key];
    };
    return statCounter;
};
// bestObjectIterator(obj, bestMostStealsAmount)  => 22


//const fancyDoesLongNameStealATon
// bestObjectIterator(obj, fancyDoesLongNameStealATon)

// Write a function that returns true if the player with the longest name had the most steals. Call the function doesLongNameStealATon.  
const doesLongNameStealATon = () => {
    let stealsALot;
    let mostStealsAmount = bestObjectIterator(obj, bestMostStealsAmount);
    let longName = playerWithLongestName();
    objectAnalyzer(obj);
    function objectAnalyzer(obj) {
        for (const key in obj) {
            if (key ===  longName) {
                innerObj = obj[key];
                for (const innerKey in innerObj) {
                    if (innerObj[innerKey] === mostStealsAmount) {
                        stealsALot = true;
                    };
                };
            } else if ( isObject(obj[key]) ) { objectAnalyzer(obj[key]) };
        };
    };
    return stealsALot;
};
// doesLongNameStealATon()  => true


// ****** Personal Challenge 1: Create a maxBy() function where you can find the maximum value of any of the "players" objects properties. You choose which property to max by passing the property as a parameter in the form of a string.     
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
// maxBy("assists")  => 12


// This one is even better:
// How do you pass a bestMaxBy(parameter) to bestObjectIterator() without immediately calling bestMaxBy()?
// You do it as an extra parameter coming from within the iterator that the other functions don't care about.  
// like this: 
const bestMaxBy = (obj, key, statCounter, targetPlayerProperty) => {
    if (key === targetPlayerProperty && statCounter < obj[key]) {
        statCounter = obj[key];
    };
    return statCounter;
};
// bestObjectIterator(obj, bestMaxBy, "number")     => 33       // I assume a callback would work as well.
// bestObjectIterator(obj, bestMaxBy, "shoe")       => 19
// bestObjectIterator(obj, bestMaxBy, "points")     => 33
// bestObjectIterator(obj, bestMaxBy, "rebounds")   => 19       //I wonder if there are some edge cases where
// bestObjectIterator(obj, bestMaxBy, "assists")    => 12       //passing that extra parameter is a bad thing.
// bestObjectIterator(obj, bestMaxBy, "steals")     => 22
// bestObjectIterator(obj, bestMaxBy, "blocks")     => 15
// bestObjectIterator(obj, bestMaxBy, "slamDunks")  => 15


// ******** Personal Challenge 2: Create an objectIterator that accepts several arguments: One of the object, one of the function which represents the if/else if block that changes, and one of a counter variable to keep our comparison value/running total in. I also added a 4th argument for bestMaxBy().  It specifies which object property we want to target.  


// This can probably be improved since the way it is right now it will always drill down to the values of every nested object.  If you want to stop at a specific object hierarchy level along the way you would need to modify or build a new function. But unfortunately if you want to traverse deeply nested objects you have to do a lot of looping like this.  
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



                    /*** Older Iterations of Used Functions ***/

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


// Old, working mostPointsScored function. My Chrome debugger broke at one point and I deleted some (probably) working code on a more streamlined function.  Like most other things technology related, "turning it off and on again" did the trick.  
const oldPointsScored = () => {
    let playerName;
    objectIterator(obj);
    function objectIterator(obj) {
        for (const key in obj) {
            if ( isObject(obj[key]) && obj[key]["points"] !== highestPoints() ) { // this is not a good way to
                objectIterator(obj[key]);                                         // do this because obj[key]["points"] 
            } else if ( obj[key]["points"] === highestPoints() ) {                // ends up being undefined a lot of the time.  
                playerName = key;                                                  // Which makes the right side falsey most of the time.
            };
        };
    };
    return playerName;
};
// oldPointsScored()  => 'Ben Gordon'


let globalStatCounter = 0; // //Might not be a good idea if functions that need this are running parallel. 

// const resetGlobalStatCounter = () => {
//     globalStatCounter = 0; };

// const usedGlobalStatCounter = globalStatCounter;
//     resetGlobalStatCounter(); 

const newObjectIterator = (obj, func) => {
// innerObjectIterator(obj)? Could use that if I wanted to keep the statCounter in this scope. I think I have to because there's no way to reset the counter otherwise.  Will cause issues if all functions are trying to access the same variable to store their intermediate values. 
    for (const key in obj) {
        if ( isObject(obj[key]) ) {
            newObjectIterator(obj[key], func);  // I shouldn't have to keep passing func back.
        } else {func(obj, key);}; 
    };
    return globalStatCounter;
};
// newObjectIterator(obj, improvedMostStealsAmount)  => 22


const improvedMostStealsAmount = (obj, key) => {
    if (key === "steals" && globalStatCounter < obj[key]) {
        globalStatCounter = obj[key];
    };
};
// newObjectIterator(obj, improvedMostStealsAmount)  => 22


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
// mostStealsAmount()  => 22



                    /*** Unused functions ***/

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


/* Code that I worked on with Demetrio:

    // it is for grabbing the string that represents the object that has the largest shoe size (the players name). Need a higher order key + variables in appropriate scope to access the string needed after iterating through it.  

    // Finds the largest shoe size that a player in the object has.
    const largestShoeSize = () => {
        // let largestShoeSizedPlayer;
        let shoeSize = 0;
        objectIterator(obj);
        let playerKey;                                              //important parts:
        let previousKey;                                            //
        function objectIterator(obj) {
            for (const firstOrderKey in obj) {                      //
                
                if ( isObject(obj[firstOrderKey]) ) {
                    previousKey = firstOrderKey;
                    objectIterator(obj[firstOrderKey]);             //
                } else if (key === "shoe" && shoeSize < obj[key]) {
                        playerKey = previousKey;                    //
                        shoeSize = obj[key];
                    // largestShoeSizedPlayer = obj;
                };
            };
        };
        return shoeSize;
    };

*/


// put this where you want to pass it as argument without invoking the function
        // const callBackFunc = () => {
        //     bestMaxBy(obj, key, statCounter, targetPlayerProperty);
        // };

        // callFunction(callbackFunc)
        
        // don't need a callback actually. Just passed an extra parameter which the other functions should ignore. 


/*  
    // Didn't need to be so complicated:

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
                } else if () {};
            };
        };
        return longestNamedPlayer;
    };

*/