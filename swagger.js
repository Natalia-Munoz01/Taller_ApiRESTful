const swaggerJSDoc = require('swagger-jsdoc')

const swaggerDefinition = {
openapi : '3.0.0',
info : {
title : 'MyAPI',
version: '1.0.0',
description:'Ejemplo de documentar con Swagger',
licence :{
    name: 'Licenced Under MIT',
    url: 'https://'
},
contact:{
    name:'Erika Natalia Muñoz',
    url:'https://mail.google.com/mail/u/0/#inbox'
}
 },
 servers:[
    {
        url: 'http://localhost:3000',
        description:'Server to Training'
    }
 ]
}
const options = {
swaggerDefinition,
apis:['./routes/*.js'],
}
const swaggerSpec = swaggerJSDoc(options)
module.exports = swaggerSpec