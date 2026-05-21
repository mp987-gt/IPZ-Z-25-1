import { Transform } from 'node:stream';
import fs from 'node:fs';

const fileStream = fs.createReadStream('./book.txt', { encoding: 'utf8' });
const writeToFile = fs.createWriteStream('./cleared_book.txt');

let isNewSentence = true;
let isFirstWord = false;

const transform = new Transform({
    transform(chunk, encoding, callback) {
        const text = String(chunk);
        let result = '';

        for (let char of text) {

            const isLetter = char.toLowerCase() !== char.toUpperCase();

            if (isNewSentence && isLetter) {
                isNewSentence = false;
                isFirstWord = true;
            }

            if (isFirstWord) {
                if (isLetter) {
                    char = char.toUpperCase();
                } else {
                    isFirstWord = false; 
                }
            }

            if (char === '.' || char === '!' || char === '?') {
                isNewSentence = true;
                isFirstWord = false;
            }

            result += char;
        }

        callback(null, result);
    }
});

fileStream.pipe(transform).pipe(writeToFile);