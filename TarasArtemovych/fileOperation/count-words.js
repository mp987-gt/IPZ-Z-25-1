import fs from 'fs';

async function countWords(fileName) {

    const text =  await fs.promises.readFile(fileName, 'utf-8');
    const wordsArray = text.trim().split(/\s+/);
    const wordCount = text.trim() === '' ? 0 : wordsArray.length;   
    
    console.log(`Кількість слів: ${wordCount}`);
}

countWords('Robin_Hood.txt');