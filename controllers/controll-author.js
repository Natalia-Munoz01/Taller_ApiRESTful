const Author = require('../models/Author')

module.exports = {
  'findAll' : async (req,res)=>{
    try{
      const result = await Author.find({})

      return res.status(200).json({state:true,data:result})
    }catch( err ){
      return res.status(500).json({state:"False",data:null})
    }
  },
  'findById' : async(req,res)=>{
    const {id} = req.params 
    try{
      const result = await Author.findById(id).populate('books')
      if(result){
        return res.status(200).json({state:true,data:result})
      }

      return res.status(404).json({state:true,data:null})
    }catch( err ){
      return res.status(500).json({state:false,data:null})
    } 
  },
  'save' : async(req,res)=>{
    const author = new Author(req.body)
    try{
      const result = await author.save()
      return res.status(200).json({state:true,data:result})
    }catch(err){
      return res.status(500).json({state:false,data:err})
    }
  },
  'update':async(req,res)=>{
    const {idA} = req.params
    const {id,name,city,age} = req.body

    try{
      return res.status(200).json({state:"Success",data:{'idA':idA,nameA:name,cityA:city,ageA:age}})
    }catch(err){
      return res.status(501).json({state:false,data:err})
    }
  }

}