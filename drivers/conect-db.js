const mongoose = require('mongoose')

//const URI = "mongodb://127.0.0.1:27017/bookshop"
const URI = "mongodb+srv://erikamunoz03:FysFNrFUAFxmIs4j@traininguptc.lmbpt.mongodb.net/?retryWrites=true&w=majority&appName=trainingUPTC"

mongoose.set('strictQuery', false)

mongoose.connect(URI)
    .then(()=>console.log('Conect DB Success'))
    .catch((err)=>console.log('Conect DB Fail' + err))

module.exports = mongoose
