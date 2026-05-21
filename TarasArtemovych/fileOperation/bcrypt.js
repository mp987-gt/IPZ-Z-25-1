import fs from 'node:fs';
import bcrypt from 'bcrypt';

const passwordInput = process.argv[2];
const saltRounds = 10;
const filePath = './hash.txt'; 

if (!passwordInput) {
    console.error('Error: Password is required!');
    process.exit(1);
}

if (fs.existsSync(filePath)) {

    const savedHash = fs.readFileSync(filePath, 'utf8').trim();
    const isMatch = await bcrypt.compare(passwordInput, savedHash);
    
    if (isMatch) {
        console.log('Accept! Password is correct.');
    } else {
        console.log('Denied! Incorrect password.');
    }
} else {

    const passwordHash = await bcrypt.hash(passwordInput, saltRounds);
    
    console.log({ passwordHash });

    fs.writeFileSync(filePath, passwordHash);
    
    console.log(`File ${filePath} created. Password successfully hashed!`);
}