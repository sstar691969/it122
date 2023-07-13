
//import your data.js module into index.js
import express from 'express';
import { getAll } from "./data.js";

//install the express and ejs node modules
//convert your index.js module to use Express app syntax

let app = express();
app.set("view engine","ejs");
app.set('port', process.env.PORT || 3000);




    app.get("/",(req,res) => {
        //res.status(200).json, res.render("home")(data.GetAllItems);
        // send plain text response

    res.send(getAll());
    //res.sender

    // send content of 'home' view
    app.get('/home', (req,res) => {
    //console.log(home);
    let result = car_volkwagen.getAll(req.query.title);
    //res.render('home', {car_volkwagen });
    res.render('home',{Volkwagens: req.query.title, result: result });
   });
   
   
   
      });


//app.get("/detail",(req,res) => {
   // res.render("detail");
   // });


    app.listen(app.get('port'), () => {
        console.log('Express started'); 
      });



