const express = require('express')
const swaggerUI = require('swagger-ui-express')
const swaggerSpec = require('./swagger')
const cors = require('cors')

const app = express()
app.use(cors())

//Conect DB

require('./drivers/conect-db')

app.set('PORT',process.env.PORT || 3000 )

app.use(express.json())
app.use('/docs',swaggerUI.serve,swaggerUI.setup(swaggerSpec))

//middleware
app.use('/authors',require('./routes/author'))
app.use('/books',require('./routes/books'))


app.listen(app.get('PORT'),()=>console.log(`Server Ready at port ${app.get('PORT')}`))




