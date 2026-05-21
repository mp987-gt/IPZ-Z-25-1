import { createServer } from 'node:http';

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    const userAgent = req.headers['user-agent'] || '';
    const parts = userAgent.split(/[()]/).map(p => p.trim());
    let browserName = 'Невідомий браузер';

    if (parts.length > 0) {
        const words = parts[parts.length - 1].split(' ');
        const browserDetails = words[words.length - 1].split('/');
    
        browserName = browserDetails[0];
    }

    if (req.url === '/client') {
        res.end(`<p>Ваш браузер: <strong>${browserName}</strong></p>`); 
    } else {
        res.end(`<p>Тарас Артемович</p>`);
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on http://127.0.0.1:3000/client');
});