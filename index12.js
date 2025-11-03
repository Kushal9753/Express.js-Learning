import express from 'express'
import { handleUsers } from './controller/usercontroller.js'
const app = express()

app.set('view engine', 'ejs' )

app.get('/user', handleUsers)

app.listen(3200)