//configuração inicial
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
// const DB_USER = 'aureana'
// const DB_PASSWORD = encodeURIComponent('mb2rlI5QKqVgsQXR')

app.use(cors())

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

// rota de teste de verificação de conexão
app.get('/',(req,res)=>{
    res.json({message: 'Teste de conexão!'})
})

// rotas da API
const personRoutes = require('./routes/personRoutes')

app.use('/main',personRoutes)

mongoose.set('strictQuery', true)
    mongoose
    .connect(
        "mongodb+srv://aureana:mb2rlI5QKqVgsQXR@cluster0.ilkivmn.mongodb.net/?retryWrites=true&w=majority",
        )
        //
    .then(()=>{
        console.log('Conectamos ao MongoDB')
        app.listen(3001) 
    })
        .catch((err)=>{
        console.log(err)
})