// import
const express = require("express");
// instancciation des meth d'express
const app = express();
const path = require("path");
const port = 5000;
// app.get("/", (req, res) => {
//     // console.log(req)
//     res.send("<h1>hello</h1>");
//   });
app.use((req, res, next) => {
  console.log("hi from middleware");
  next();
});
app.set('view engine', 'ejs')

const user = {
    firstName: 'Tim',
    lastName: 'Cook',
    admin: true,
}
app.get('/ejs', (req, res) => {
    res.render('index', {
        user
    })
})
// app.use(express.static(path.join(__dirname, "views")));
// app.get("/test", (req, res) => {
//   // console.log(req)
//   res.send("<h1>hello</h1>");
// });
// app.get("/home", (req, res) => {
// res.sendFile(__dirname+"/index.html")
//   res.sendFile("./views/home.html", { root: __dirname });
// res.sendFile(path.join(__dirname,"index.html"))
// });
// app.get("/about", (req, res) => {
// res.sendFile(__dirname+"/index.html")
//   res.sendFile("./views/about.html", { root: __dirname });
// res.sendFile(path.join(__dirname,"index.html"))
// });
// app.get("/contact", (req, res) => {
// res.sendFile(__dirname+"/index.html")
//   res.sendFile("./views/contact.html", { root: __dirname });
// res.sendFile(path.join(__dirname,"index.html"))
// });



const productsRouter=require('./productroutes')
app.use("/products",productsRouter)
app.listen(port, (err) =>
  err ? console.log(err) : console.log(`server is listining on port ${port}`)
);
