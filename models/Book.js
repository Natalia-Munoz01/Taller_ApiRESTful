const mongoose = require('mongoose')

const{Schema} = mongoose
const schemaBook = new Schema ({
    id: {
        type: String,
        required: true,
        unique: true
    },
    title:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    chapters:{
        type: Number,
        required: true
    },
    value : {
        type : Number,
        required: [true,'El valor es requerido'],
        validate: {
          validator: function(v) {
            return /\d+/.test(v);
          },
          message: props => `${props.value} is not a valid!`
        }
      },
      author :{
        type: Schema.Types.ObjectId,
        ref : 'author'
      }
})
    
module.exports = mongoose.model('book',schemaBook)