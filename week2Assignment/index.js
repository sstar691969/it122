
//import your data.js module into index.js
import express from 'express';

import { getItem } from "./data.js";
import { Cars } from "../models/Cars.js";

//install the express and ejs node modules
//convert your index.js module to use Express app syntax

let app = express();
app.set("view engine","ejs");
app.set('port', process.env.PORT || 3000);

// Static files

app.use(express.static('public'))
//app.use('/css', express.static(dirname + 'public/css'))
//app.use('/js', express.static(__dirname + 'public/js'))
//app.use('/img', express.static(__dirname + 'public/img'))








    app.get("/",(req,res) => {
        //res.status(200).json, res.render("home")(data.GetAllItems);
        // send plain text response
        Cars.find({}).lean()
  .then((cars) => {
    
    res.render("home",{car_volkwagen:cars})
  })
  .catch(err => console.log(err));
    
    //res.send(getAll());
});
    

   
   
   
   




// note: create new variable let vehicle and create new variable getAll
app.get("/detail/:id",(req,res) => {
      Cars.findOne({id:req.params.id}).lean()
        .then((cars) => {
            //res.render('detail', {cars} );

            res.render("detail",{vehicle:cars});
        })
        .catch(err => next(err));
    
    
   
    });

    //.catch(err => next(err));
    
    

    app.listen(app.get('port'), () => {
        console.log('Express started'); 
      });



