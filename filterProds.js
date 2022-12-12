const products = require("./products")

const filterProds = (req,res,next) => { 
    const {prodprice}=req.query
    if (prodprice) {
        const filtredprod=products.filter(el=>el.price>prodprice)
       req.products=filtredprod
    } else {
        req.products=products
    }

    next()
 }
 module.exports=filterProds