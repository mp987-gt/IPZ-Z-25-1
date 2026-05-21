import { createServer } from 'node:http';

const server = createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
        <style>
        div{
            display:flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
            p{
                padding:10px;
                font-size: 30px;
            }
            img{
                transition: 1s;
                opacity:0;
            }
            p:hover + img{
                border-radius: 20px;
                opacity:1;
            }        
        </style>
        <div>
            <p>Тарас Артемович</p>
            <img src="https://media.istockphoto.com/id/1474792759/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D0%BF%D1%96%D0%B4%D0%BD%D1%8F%D1%82%D1%96-%D1%81%D0%BC%D0%B0%D0%B9%D0%BB%D0%B8%D0%BA%D0%B8-%D0%B1%D1%80%D1%96%D0%B2-%D1%81%D0%BA%D0%B5%D0%BF%D1%82%D0%B8%D1%87%D0%BD%D0%B8%D0%B9-%D1%81%D0%BC%D0%B0%D0%B9%D0%BB%D0%B8%D0%BA.jpg?s=612x612&w=0&k=20&c=iBQauYSe09oxgMCeqZNjMZvhOsHsvUePmq-iBA9vb-k=">
        </div>
        ` 
        
    ); 
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});