const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

const capAlphabet = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

const numbers = [
    "1","2","3","4","5","6","7","8","9","0"
];

const symbols = [
    '*', '#', '%', '&', '!', '?'
];

const allowedChars = [...symbols, ...alphabet, ...capAlphabet, ...numbers];

export const getRandomIndex = () => {
   const max = allowedChars.length;
   return Math.floor(Math.random() * max);
};

export const genId = (amount = 24) => {
    const id = []
    for (let len = 0; len < amount; len++){
        id.push(allowedChars[getRandomIndex()])
    }
    return id.join("");
};