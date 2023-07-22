
//import your data.js module into index.js
import express from 'express';
import { getAll } from "./data.js";
import { getItem } from "./data.js";

//install the express and ejs node modules
//convert your index.js module to use Express app syntax

let app = express();
app.set("view engine","ejs");
app.set('port', process.env.PORT || 3000);




    app.get("/",(req,res) => {
        //res.status(200).json, res.render("home")(data.GetAllItems);
        // send plain text response

    res.render("home",{car_volkwagen:getAll()} );
    //res.send(getAll());
});
    

   
   
   
   




// note: create new variable let vehicle and create new variable getAll
app.get("/detail/:id",(req,res) => {
    //let vehicle = getItem(req.params['id']);
    //if (vehicle) {
       //res.render(`Info for vehicle: ${vehicle.model}`);
       //res.render("detail",vehicle);
    //}

    //res.render("detail",{vehicle:vehicle});
    res.render("detail",{vehicle:getItem(req.params.id)});
   //res.render(`Info for volkwagen: $(req.params.id)`);
    });
    
    

    app.listen(app.get('port'), () => {
        console.log('Express started'); 
      });



