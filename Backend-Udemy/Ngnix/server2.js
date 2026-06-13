const http = require('http');
const fs = require('fs');
const path = require('path');


const port = 5000;
const server = http.createServer((req,res) => {
    const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url)

    fs.readFile(filePath, (error, content) => {
        if (error) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('File not found');
            return;
        }

        const extname = path.extname(filePath);
        const contentType = extname === '.html' ? 'text/html' : 'text/plain';
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
    });
})

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});