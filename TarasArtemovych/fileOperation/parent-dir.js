import fs from 'fs';

async function printParentDirectory() {
    try {
        const files = await fs.promises.readdir('..');
        console.log('  Вміст батьківської директорії  ');
        files.forEach(file => console.log(`>>> ${file}`));
    } catch (error) {
        console.error('Помилка:', error.message);
    }
}

printParentDirectory();