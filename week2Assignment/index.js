




//import your data.js module into index.js
import express from 'express';


//import { getItem } from "./data.js";
import { Cars } from "../models/Cars.js";

//install the express and ejs node modules
//convert your index.js module to use Express app syntax

let app = express();
// added code 7/30/2023
//let vwRoute = require('/routes/vw');

app.set("view engine","ejs");
app.set('port', process.env.PORT || 3000);

// Static files also added carRoute below 7/30/2023
//app.use(vwRoute)
app.use(express.static('public'))
app.use(express.json()); //Used to parse JSON bodies


//app.use('/css', express.static(dirname + 'public/css'))
//app.use('/js', express.static(__dirname + 'public/js'))
//app.use('/img', express.static(__dirname + 'public/img'))








app.get("/",(req,res,next) => {
    console.log(req.query);
        //res.status(200).json, res.render("home")(data.GetAllItems);
        // send plain text response

    Cars.find({}).lean()
      .then((cars) => {
      //res.render("home",{car_volkwagen:cars})
  res.render("home",{items: JSON.stringify(cars)});  
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

app.get("/api/cars",(req,res) => {
    Cars.find({}).lean()
    .then((cars) => {
      res.json(cars);
    })
    .catch(err => console.log(err));
});


app.get("/api/cars/:id",(req,res) => {
  Cars.findOne({id:req.params.id}).lean()
    .then((result) => {
         res.json(result);
    })
    .catch(err => next(err));
});

app.get("/api/cars/delete/:id",(req,res) => {
  Cars.deleteOne({id:req.params.id}).lean()
    .then((result) => {
         res.json(result);
    })
    .catch(err => next(err));
});

// use Postman app with this api post //
// why add async(req,res) =>{}//
app.post("/api/cars/update/id",(req,res) => {
  Cars.updateOne({'id':req.body.id}, req.body, {upsert:true}, (err, result) => {
  if (err) return next(err);
          res.json(result);


  })
    .catch(err => next(err));
});







    




    

    
    
    

    app.listen(app.get('port'), () => {
        console.log('Server has started started'); 
    });



