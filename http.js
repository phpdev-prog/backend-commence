const http = require('http');
const colors = require('colors');
const fs = require('fs');

const myServer = http.createServer((req,res)=> {
    //   console.log("Server started...")
    const date = new Date()
    const log = `${date.toISOString().split('T')[0]} : New request received\n`
    fs.appendFile("log.txt", log , (err,data) => {
       
    res.end("<h1>Welcome Server...</h1>")
    console.log(req.url)
    })
});

const PORT = 8080 
myServer.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}`.bgCyan);
});

