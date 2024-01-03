const { log } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter your name: ", (name) => {
    log(`Hello ${name}`);
    rl.close();
});

rl.on("close", () => {
    log("End of process!");
    process.exit(0);
});
