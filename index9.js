import express from 'express'
const app = express()

app.get("/",(req, resp)=>{
  resp.send("Home Page")
});

app.get("/users",(req, resp)=>{
  resp.send("users Page")
});

app.get("/error",(req, resp)=>{
  const error = new Error('')
  next(error)
});



app.use((error, req, resp, next)=>{
  resp.status(error.status || 500).send("try after some time")
})

app.listen(3200)