import express, { response } from 'express'
const app = express();

function checkAgeRouteMiddleware(req, resp, next){
  console.log(req.query.age);
  
if(!req.query.age || req.query.age<18){
  resp.send("You are not allowed to used this website")
}else{
  next();
}
}



function checkURLRouteMiddleware(req, resp, next){
  console.log("This request url is ", req.url);
  
  next()
}


app.get('', (req, resp)=>{
  resp.send("<h1>Home page</h1>")
})

app.get('/login',checkURLRouteMiddleware,checkAgeRouteMiddleware, (req, resp)=>{
  resp.send("<h1>Login page</h1>")
})

app.get('/users',checkAgeRouteMiddleware, (req, resp)=>{
  resp.send("<h1>User page</h1>")
})

app.get('/products',checkAgeRouteMiddleware, (req, resp)=>{
  resp.send("<h1>Product page</h1>")
})

app.listen(3200)