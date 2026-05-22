import { createServer } from 'node:http';

const server = createServer((req, res) => {

    const userAgent = req.headers['user-agent'] || '';
    const parts = userAgent.split(/[()]/).map(p => p.trim());
    let browserName = 'Невідомий браузер';

    if (parts.length > 0) {
        const words = parts[parts.length - 1].split(' ');
        const browserDetails = words[words.length - 1].split('/');
    
        browserName = browserDetails[0];
    }

    if (req.url === '/client') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`<p>Ваш браузер: <strong>${browserName}</strong></p>`); 
    } 
    else if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`<p>Тарас Артемович</p>`);
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Iosevka+Charon:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Manrope:wght@200..800&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
                body{
                    margin: 0;
                    overflow: hidden;
                    height: 100dvh;
                }
                .error{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    margin-top:70px;
                    height:350px;
                }
                .error h1{
                    font-size: 300px;
                    line-height: 0.8;
                    font-family:Manrope;
                    color: #F2C1B2;
                    text-shadow: 
                        1px 1px 0px #EA948A,
                        2px 2px 0px #EA948A,
                        3px 3px 0px #EA948A,
                        4px 4px 0px #EA948A,
                        5px 5px 0px #EA948A,
                        6px 6px 0px #EA948A,
                        7px 7px 0px #EA948A,
                        8px 12px 15px rgba(0, 0, 0, 0.15);
                }
                .error img{
                    width: auto;
                    height:300px;
                }
                h2{
                    font-size: 70px;
                    font-family:Manrope;
                    font-weight:500;
                }
                .subtitle, .paragraph, .button{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    height:100px;
                }
                .paragraph p{
                    font-size: 33px;
                    font-family:Manrope;
                    font-weight:300;
                    color: gray;
                }
                .button a{
                    color: white;
                    background-color: #FFC7BA;
                    padding: 20px 80px;
                    border-radius: 50px;
                    text-decoration: none;
                    margin-top: 120px;
                    font-size: 30px;
                    font-family: Raleway;
                    font-weight: 700;
                    box-shadow: 0px 10px 5px #F39A8F;
                }
            </style>
            <div class = "main">
                <div class = "error">
                    <h1>4</h1>
                    <img src="https://i.ibb.co/XnH01RV/zero.png">
                    <h1>4</h1>
                </div>
                <div class ="subtitle">
                    <h2>Oopsie! Something’s missing...</h2>
                </div>
                <div class = "paragraph">
                    <p>It seems like we donut find what you searched. The page you were <br> looking for doesn't exist, isn't available or was loading incorrectly.</p>
                </div>
                <div class = "button">
                    <a href = "http://127.0.0.1:3000/">Back to Home</a>
                </div>
            </div>
            `);
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on http://127.0.0.1:3000/Error');
});