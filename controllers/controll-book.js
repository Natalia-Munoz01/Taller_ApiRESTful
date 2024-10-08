const Author = require('./../models/Author')
const Book = require('./../models/Book')

module.exports = {
  findAll : async(req,res)=>{
    return res.status(200).json({state:true,data:'naaa'})
  },
  save : async(req,res)=>{
    const book = new Book(req.body)
    const {id} = req.params
    try{

      const author = await Author.findById(id)
      if( author ){
        author.books.push( book )
        await author.save()
        book.author = author

        const result = await book.save()

        return res.status(201).json({state:true,data:dish})
      }else{
        return res.status(404).json({state:true,data:null})
      }

      
    }catch(err){
      return res.status(500).json({state:false,errr:err})
    }
  }
}