import express from 'express'
const app = express();
import path from 'path'
app.use(express.urlencoded({extended:false}))

app.use(express.static('public'))

app.get("/", (req,resp)=>{
  const filPath = path.resolve('view/home2.html')
  resp.sendFile(filPath)
})


app.get("/login", (req,resp)=>{
  resp.send(`
    <form action="/submit" method="post" >
    <input type="email" placeholder="enter email" name="email" />
    <input type="password" placeholder="enter password" name="password" />
    <button>Login</button>
    </form>
    
    `)

})

app.post("/submit", (req,resp)=>{

  console.log("user login details are : ",req.body);
  

  resp.send("submit Page")

})

app.get("/users", (req,resp)=>{
  resp.send("users Page")

})

app.listen(3200)