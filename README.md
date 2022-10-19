This is Bulls&Cows, a simple console game.

The user has to guess 4 unique numbers, which are randomly set by the computer.

For every correct number at the correct position, you will get a bull.
For every correct number at a wrong position, you will get a cow.

Attempts will be counted, so try to be smart enough to solve the game with <10 attempts:)

(You can also try to type words or incorrect numbers....)




Tasks to improve the game:

- Level selector: decide how many numbers you will have to guess (4-10)

- Limit of guesses: decide how often you are allowed to guess

- Save username

- Random message generator: 
    - if attempts <=5 return: you are very smart (or very lucky)
    - if attempts <=10 return: well done
    - if attempts <=20 return: good one, try to solve it with less than 10 attempts
    - if attempts >=21 return: maybe the game is to hard for you:)




Getting the input from the terminal:

To gather the player's input we will use an npm package called prompt-sync.

We can use the package like so:

// Import package
const prompt = require('prompt-sync')({ sigint: true });
// Use package
let name = prompt('What is your name? '); // Note there is a space at the end, so the input does not stick to the question
Then the variable name will contain the value that the user entered in the terminal.
