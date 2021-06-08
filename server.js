var express = require('express');
const app = express();
var expressLayouts = require('express-ejs-layouts')
require('dotenv/config')
const port = 3002 


app.set ('view engine', 'ejs');
app.set('views', __dirname+'/views');
app.use(express.static('public'))
app.set('layout', 'layouts/layout')
app.use(expressLayouts)

const indexRouter = require('./controller/index')

const mongoose = require('mongoose');
const { config } = require('dotenv');
mongoose.connect(process.env.DBURL, 
    {useNewUrlParser:true})
const db = mongoose.connection;
db.on('error', error=>console.error(error))
db.once('open',()=>console.log("connected to db successfully"))

app.use('/', indexRouter);



app.listen(port, ()=>{
    console.log('server running on port', port)
})