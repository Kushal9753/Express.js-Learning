import express from 'express'
import userData from './users.json' with {type:'json'}
import { name } from 'ejs';
const app = express();

app.get("/", (req,resp)=>{
  console.log(userData);
  
  resp.send(userData)
})

app.get("/user/:id", (req, resp) =>{
  const id = req.params.id
  console.log(id);

  let filterdData = userData.filter((user)=>user.id==id)

  resp.send(filterdData)
  
})

app.get("/username/:name", (req, resp) =>{
  const name = req.params.name
  console.log(name);

  let filterdData = userData.filter((user)=>user.name.toLowerCase()==name.toLowerCase())

  resp.send(filterdData)
  
})

app.listen(3200)