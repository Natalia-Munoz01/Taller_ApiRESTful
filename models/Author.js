const mongoose = require('mongoose');
const { Schema } = mongoose;

const schemaAuthor = new Schema({
  id : {
    type : String,
    required : true,
    unique : true
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  books: {
    type: Schema.Types.ObjectId,
    ref: 'book' 
  }
});

module.exports = mongoose.model('author', schemaAuthor);
