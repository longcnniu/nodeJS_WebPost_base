const express = require('express')
const { engine } = require('express-handlebars')
const bobyParser = require('body-parser')
const methodOverride = require('method-override')
const connectDB = require('./config/db')

//nhap khau router
const posts = require('./routes/posts')
const bodyParser = require('body-parser')

//khoi tao app
const app = express()

// Khoi dong Handlebars middleware
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

//khoi dong bodyParser middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Khoi dong methodOverride middleware
app.use(methodOverride('_method'))

//khoi dong express middleware
app.use(express.json())

//ket noi DB
connectDB()

// Mot so routes co ban
app.get('/', (req,res) => res.render('index'))
app.get('/about', (req,res) => res.render('about'))


// Main
app.use('/posts', posts)

const PORT = 5000

app.listen(PORT, () => console.log( `Server run on ${PORT}`))