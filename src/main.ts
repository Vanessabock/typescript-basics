const age: number = 24;

for (let i = 1; i <= age; i++){
    console.log(i);
}

if (age > 18){
    console.log("Older than 18");
} else {
    console.log("Younger than 18 or 18");
}

const score: number = 0;

if (score){
    console.log("Score is available");
    console.log("Score is truthy");
} else {
    console.log("Score is not available.");
    console.log("Score is falsy");
}

const username: string = "";

if (username){
    console.log("Username is available.");
    console.log("Username is truthy");
} else {
    console.log("Username is not available.")
    console.log("Username is falsy");
}

const isAdmin: boolean = false;
if (isAdmin){
    console.log("isAdmin is available.");
    console.log("isAdmin is truthy");
} else {
    console.log("isAdmin is not available.")
    console.log("isAdmin is falsy");
}


