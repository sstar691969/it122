//import { data} from "./data";
// atleast 4 attribut.es also, a key attribute plus 5 objects representing the items.
const car_volkwagen = [ 
    {id : 1, model :"Bug", year : 2023, engine: 'v6', power : 'windows', ignition : 'keyless'},
    {id : 2, model : "Jetta", year : 2023, engine : 'v8', power : 'windows', ignition : 'keyless' },
    {id : 3, model : "Luxury cc", year : 2023, engine : 'v8', power : 'windows', ignition : 'keyless' },
    {id : 4, model : "ID.4", year : 2023, engine : 'v8', power : 'windows', ignition : 'keyless' },
    {id : 5, model : "Atlas", year : 2023, engine : 'v8', power : 'windows', ignition : 'keyless' },
    {id : 6, model : "Iguan", year : 2023, engine : 'v8', power : 'windows', ignition : 'keyless' }
    ];

    //cars.reverse();
    

// add new variable name:'getAll' method. to export to index.js  which returns all array data and getItem method which return a single array item according to the requested key

    export const getAll = () => {
        return car_volkwagen

        


    } 


    // your module should export the getAll and getItem methods to use in other modules