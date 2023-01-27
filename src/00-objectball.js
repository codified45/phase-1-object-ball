
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

function deepIterator(target) {
    if (typeof target === "object") {
        for (const key in target) {
            deepIterator(target[key]);
        }
    } else {
        console.log(target); 
    }
};


//W3 explains for...of pretty well. 
// It should have been a for...in!
function gameObjectIterator() {
    const obj = gameObject();
    deepIterator(obj);
};

function displayKeys(obj) {
    return Object.keys(obj);
}

function keysIterator(obj) {
    Object.keys(obj).forEach(key => {
        console.log(`${key}`)
        if (typeof obj[key] === "object") { //"&& obj[key] !== null" might be needed here after object
        keysIterator(obj[key]);
        };
        })
};


const isObject = (val) => {
    if (val === null) {     // need this because if it happens to be null, null type is object
        return false;
    }

    return typeof val === "object";
};


const numPointsScored = (playerName) => {
    let playerNamePoints;
    const obj = gameObject();
    objectIterator(obj);
    function objectIterator(obj) {
        for (const key in obj) {

            if ( isObject(obj[key]) && key !== playerName ) {

                    objectIterator(obj[key]);
                
            } else if (key === playerName) {
                    // console.log(`${playerName} has ${obj[key]["points"]} points!`);
                    playerNamePoints = obj[key]["points"];
            }
        };
    };
    return playerNamePoints;
};

const shoeSize = (playerName) => {
    let playerShoeSize;
    const obj = gameObject();
    objectIterator(obj);
    function objectIterator(obj) {
        for (const key in obj) {
            if ( isObject(obj[key]) && key !== playerName ) {
                objectIterator(obj[key]);
            } else if (key === playerName) {
                playerShoeSize = obj[key]["shoe"];
            }
        };
    };
    return playerShoeSize;
};

// Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
const teamColors = (teamName) => {
    let teamColorsArray = []; // spread team color array
    const obj = gameObject();
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
    const obj = gameObject();
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

// Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey number's for that team.
const playerNumbers = (teamName) => {
    let arrayOfJerseyNumbersOnTeam = [];
    const obj = gameObject();
    objectIterator(obj);
    function objectIterator(obj) {
        for (const key in obj) {
            if ( isObject(obj[key]) && key !== "teamName" ) {
                objectIterator(obj[key]);
            } else if (key === "teamName" && obj[key] === teamName) {
                const innerObj = obj["players"];
                for (const innerKey in innerObj) {
                    arrayOfJerseyNumbersOnTeam.push(innerObj[innerKey].number);
                    debugger;
                };
            };
        };
    };
    return arrayOfJerseyNumbersOnTeam;
};

// Build a function, playerStats, that takes in an argument of a player's name and returns an object of that player's stats. Check out the following example of the expected return value of the playerStats function:
const playerStats = (playerName) => {
    const obj = gameObject();
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
