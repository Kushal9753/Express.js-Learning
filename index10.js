import express from 'express'
const app = express()

app.set('view engine', 'ejs')
app.get("/",(req, resp)=>{
  resp.render('home',{name:'kushal sahu', course:'EXPRESSJS', age:'20'})
});




app.listen(3200)