const http =require("http");
const routes = require("./routes");

var server = http.createServer(routes);
server.listen(3000);

console.log("node.js server at port 3000");
//var fs =require("fs");
//const { error } = require("console");

//var server=http.createServer((request,response)=>{
    // console.log(request.url,request.method);
    // console.log(response.statusCode);
//    response.setHeader("Content-Type","text/html");
//    response.statusCode=200;
//    response.statusMessage="OK";

//    response.write("<h1>ana sayfa</h1>");
//    response.write("<p>ürünler</p>");
// if(request.url == '/') {
//     fs.readFile("index.html", (error, html) => { // arrow function
//         response.writeHead(200, {"Content-Type": "text/html"});
//         response.write(html);        
//         response.end();
//     });        
// }
// else if(request.url == "/blogs") {
//     fs.readFile("blogs.html", (error, html) => {
//         response.writeHead(200, {"Content-Type": "text/html"});
//         response.write(html);        
//         response.end();
//     });   
// }
// else if(request.url == "/create" && request.method == "POST") {
//     const data =[];
//     request.on( "data",(chunk)=>{
//         //console.log(chunk);
        
//         data.push(chunk);
//     });

//     request.on("end",()=>{
//         const result=Buffer.concat(data).toString();
//         //console.log(result);
//         console.parsedData=result.split("=")[1];
//         //console.log(parsedData);
//         fs.appendFile("blogs.txt", "deneme", (err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 response.statusCode = 302; // Referral code
//                 response.setHeader("Location", "/");
//                 response.end();
//             }
//         })  
//     });
          
// }
// else if(request.url == "/create") {
//         fs.readFile("create.html", (error, html) => {
//             response.writeHead(200, {"Content-Type": "text/html"});
//             response.write(html);        
//             response.end();
//         });   
// }    
// else {
//     fs.readFile("404.html", (error, html) => {
//         response.writeHead(404, {"Content-Type": "text/html"});
//         response.write(html);        
//         response.end();
//     });   
// }

// });
