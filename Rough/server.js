const fs = require('fs')

fs.readFile('./notes.txt', 'utf-8', (err, data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);
})


fs.appendFile('./notes.txt', 'This is a new line', (err, data)=>{
    if(err){
        console.log(err);
    }
    console.log('text  added to notes.txt file',data);
})








const http = require('http')

// logger middleware
const logger = (req, res, next)=>{
    console.log(req.url, req.method);
    const content = `the method is ${req.method} and the url/api endpoit is ${req.url} and the date is ${new Date()}`
    fs.appendFileSync('./notes.txt', content, 'utf-8')
    next()
}


// timeLogger middleware
const timeLogger = (req, res, next)=>{
    const reqTime = new Date().getTime()
    next()
    const resTime = new Date().getTime()
    console.log(`the request took ${resTime - reqTime} ms`);
}

app.use(logger)
app.use(timeLogger)


const server = http.createServer((req, res)=>{
    if(req.url === '/' && req.method === 'GET'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'  && req.method === 'GET'){
        res.end('Welcome to our about page')
    }
    res.end(`
        <h1>Oops! somethig went wrong</h1>
        <a href="/">back home</a>
    `)
})

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})

