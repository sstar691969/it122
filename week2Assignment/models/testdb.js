'use strict'


import { Cars } from "../models/Cars.js";

// find all documents


// return all records
Cars.find({}).lean()
  .then((cars) => {
    console.log(cars);
  })
  .catch(err => console.log(err));








