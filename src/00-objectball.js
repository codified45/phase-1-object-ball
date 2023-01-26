
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
            //debugger
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

// const objectIterator = (key) => {
//     for (const key in obj)
// }

const numPointsScored = (playerName) => {
    let playerNamePoints;
    const obj = gameObject();
    objectIterator(obj);
    // debugger;
    function objectIterator(obj) {
        for (const key in obj) {
           // debugger;
            //let key;
            if ( isObject(obj[key]) && key !== playerName ) //can probably remove parentheses around after &&, but get it working first == yes, works
            {
               // for (const key in obj) {
                  // console.log(`if statement activated: ${obj[key]}`);
                   // debugger;
                    objectIterator(obj[key]);
              //  };
                
            } else if (key === playerName) {
                    // console.log(`${playerName} has ${obj[key]["points"]} points!`);
                   // debugger;
                    playerNamePoints = obj[key]["points"];
            } // else {
                    // console.log("else statement activated:");
                   // debugger;
                 //   console.log(obj[key]); }
        };
    //return console.log
    };
    return playerNamePoints;
};



// if (objectIterator(obj) === playerName) {
//     return obj[key]["points];
// }

        // const objectIterator = (obj) => {
        //     for (const key in obj) {
        //         if (isObject(obj[key])) {
        //             objectIterator(obj);
        //         }
        //     }
        // };

        // const numPointsScored = (playerName) => {
        //     const obj = gameObject();
        //     objectIterator(obj);
        //     debugger;
        //     function objectIterator(obj) {
        //         for (const key in obj) {
        //             if (isObject(obj[key]) && (obj[key] !== playerName)) {
        //                 debugger;
        //                 objectIterator(obj[key]);
        //             } else if (obj[key] === playerName) {
        //                 debugger;
        //                 console.log(`I found you: ${obj[key]["points"]}`);
        //                 //return obj[key]["points"];
        //             } else {
        //                 debugger;
        //                 console.log(obj[key]);}
        
        //         };
        //     };
        // };
        
        
        
        // if (objectIterator(obj) === playerName) {
        //     return obj[key]["points];
        // }
        


// messed up function. tried to move if statement. But check in debugger. maybe add some more break points.
// function brokenNumPointsScored(playerName) {
//     const obj = gameObject();

//     const iterator = function(obj) { 
//         if (typeof obj[key] === "object" && (key !== playerName) ) {

//             Object.keys(obj).forEach(key => {
//                 debugger;
//                 iterator(obj[key]) 
//                 } 
//             );
//         }
//         else {return obj[key]["points"]};
//     }
// };

        // // preserved function below before modifying to what is above
        // function numPointsScored(playerName) {
        //     const obj = gameObject();

        //     iterator(obj);
        //     function iterator(obj) { 
        //     Object.keys(obj).forEach(key => {

        //             if (typeof obj[key] === "object" && (key !== playerName) ) {
        //                 debugger;
        //                 iterator(obj[key]);
        //             }
        //             else {return obj[key]["points"]};
        //         })
        //     }
        // };

    // function numPointsScored(playerName) {
    //     const obj = gameObject();
    //     Object.keys(obj).forEach(key => {

    //         if (key === playerName) {
    //             return playerName.points;
    //         }
    //         else {
    //             if (typeof )
    //         }
    //     }

    //     )
        
    // }

//  while (key !== playerName) {

// function keyValueLookup(obj) {

// }

// function numPointsScored(playerName) {
//     let playerPointsScored = gameObject();
    
//     for (const key in playerPointsScored) {

//         console.log(playerPointsScored[]);
//         debugger
//     };
    
// };


//     debugger
//     for (const key in obj) {
//         if (typeof obj[key] === "object") {
            
//         }
//         console.log(key);
//     };
// };

// gameObjectIterator();

// function myDeepIterator(key) {
    
// }


////////////////
            // const isObject = (val) => {
            //     if (val === null) {     // need this because if it happens to be null, null type is object
            //         return false;
            //     }

            //     return typeof val === "object";
            // };

            // const numPointsScored = (obj) => {
            //     for (const key in obj) {
            //         if (isObject(obj[key]) && obj) {
            //             numPointsScored(obj[key]);
            //         } else if (obj[key] === ) {

            //         } else {}

            //     }
            // };

            // const objectIterator = (obj) => {
            //     for (const key in obj) {
            //         if (isObject(obj[key])) {
                        
            //         }
            //     }
            // }


