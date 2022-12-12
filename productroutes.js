const express=require("express")
const filterProds = require("./filterProds")
const products = require("./products")
const productRouter=express.Router()
productRouter.get("/",filterProds,(req,res)=>{
    
   res.send({products:req.products})
   
    })
productRouter.get("/:idprod",(req,res)=>{
    // console.log(req.params)
    const {idprod}=req.params
    const prod=products.find(el=>el.id==idprod)
    if (!prod) {
       return res.status(400).send({msg:"no prod"})
    }
   return res.send({product:prod})
})



module.exports=productRouter


