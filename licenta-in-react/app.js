var express = require('express')
const puppeteer = require('puppeteer');
var app = express();
const port = 3000


app.use(express.static(__dirname + '/public'));


app.get("/",function(req,res){
    res.sendFile(__dirname + '/index.html' )
})

app.get("/search",function(req,res){
    res.sendFile(__dirname + '/html/search-page.html');
})

// app.get("/search/:input",(req,res) => {
//     const input_fix = input.replace(' ','+')
//     alert(req.params.input)
// })

app.post("/search/:input", (req,res) => {
    // alert(req.params.input)
    res.send(req.params.input);
})

app.listen(port,function(err){
    if(err)
    {
        console.log("Something went wrong", err)
    }
    else{
        console.log("Server started on port " + port)
    }
})

// const server = http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/html'})
//     fs.readFile('index.html',function(error,data){
//         if(error)
//         {
//             res.writeHead(404)
//             res.write('Error: File Not Found')
//         }
//         else{
//             res.write(data)
//         }
//          res.end()

//     })
// })


// server.listen(port,function(error){
//     if(error)
//     {
//         console.log("Something went wrong",error)
//     }
//     else
//         console.log('server is listenint on port ' + port)
// })