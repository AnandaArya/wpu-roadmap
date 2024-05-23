const http = require('http');
const fs = require('fs');
const port = 3000;

const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if(err) {
            res.writeHead(404);
            res.write('Error : File not found!');
        } else {
            res.write(data);
        }
        res.end();
    });
}

http
    .createServer((req, res)  => {
        res.writeHead(200, {
            'Content-Type' : 'text/html',
        })

        const url = req.url;

        // 1. Menggunakan Switch Case
        switch(url) {
            case '/about':
                renderHTML('./about.html', res);
                break;
            case '/contact':
                renderHTML('./contact.html', res);
                break;
            default:
                renderHTML('./index.html', res);
                break;
        }

        // Menggunakan If Else
        // if(url === '/about') {
        //     renderHTML('./about.html', res);
        // } else if(url === '/contact') {
        //     renderHTML('./contact.html', res);
        // } else {
        //     renderHTML('./index.html', res);
        // }
    }).listen(port, () => {
        console.log(`Server is listening on port ${port}.`);
    });