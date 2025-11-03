import express from 'express'
const app = express();

app.use(express.urlencoded({extended:false}))
app.set('view engine', 'ejs')


app.get("/add-user", (req, resp)=>{
  resp.render('addUser')
})

app.post("/submit-user", (req, resp)=>{
    resp.render('submitUser', req.body)
})

app.get("/users", (req, resp)=>{
  const users = ['kushal', 'sahu','peter']
  
    resp.render('users',{users:users, isLogin:false});
})


app.listen(3400)