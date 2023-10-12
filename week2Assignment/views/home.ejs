<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home ejs</title>
    <link rel="stylesheet" href="http://localhost:3000/css/main.css"> 
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

   
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <a href="/detail/1">detail page</a> 
    <h1><center>2024 Volkwagen Vehicles Home Page</center></h1>
    <div id="root"></div>
    <script type= "text/babel">

        let cars = <%- items %>;
        //console.log(cars)

       
       // the parent component

    const CarsApp = (props) => {
        
        //console.log(props)
        //console.log("hello" + props.volkwagens);
       
        //const [items, setItems] = React.useState([]);
        const [selectedItem, setselectedItem] = React.useState({});

        
        
        
            
        const clearForm = () => {
            setselectedItem({});
        }

        const saveItem = () => {
            if (!selectedItem.title) {
              return;
            }
            //fetch("/api/add/", {
            fetch("/api/v1/add/", {
              method: "POST",
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(selectedItem)
            })
            .then(res => res.json())
            .then((data) => {
                // if item has no _id, it wasn't previously saved in DB
                if (!selectedItem.model) {
                    selectedItem.model = data.model;
                    setselectedItem(selectedItem);
                    // update items list
                    let newItems = [...cars];
                    newItems.push(selectedItem);
                    setItems(newItems);
                }
            })
        }
        const deleteItem = () => {
            let m = selectedItem.model;
            // delete item from DB
            fetch(`/api/v1/delete/${m}`)
            .then(res => res.json())
            .then((data) => {
                // remove item from UI list
                  const newItems = model.filter((item) => {
                    return item.model !== m;
                  });
              setItems(newItems);
              // clear form
              setCurrentItem({})
            });
        }
        //line 59 of github/brenden west/it122/9_effects/views/home.ejs
        const itemClick = (e) => {
            //console.log(e.target.innerText)
            let found = cars.find((item) => { return item.model == e.target.innerText});
            setselectedItem(found);    
        }
        
        // itemChanged is a variable/function name: then (e) e or any letter is used as a html page "event" or (e). Javascript function "" =>"" {console.log(e.target)}
        const itemChanged = (e) => {
            console.log(e.target)
            let field = e.target.name;
            let newItem = { ...selectedItem };
            newItem[field] = e.target.value;
            console.log(newItem)
            setselectedItem(newItem);
            console.log(e.target.innerText)
           let found = cars.find((item) => { return item.model == e.target.innerText});
            //setselectedItem(found);    
        }

            //updated list state***
            //{ ...selectedItem };*******
        //const itemChanged = (e) => {
           // console.log(e.target)
               
           // let field = e.target.model;
           // let newItem = { ...selectedItem };
           // newItem[field] = e.target.value;
            //update selectedItem state*******
           // console.log(newItem)
            //setselectedItem(newItem);
            //update list state******
           // model.find((item, index) => {
             // if (item.model == newItem.model) {
            //      model[index] = newItem;
             //      setItems(model);
              // }


            //})
 
        //}
        //undo above "}" maybe for CarApp but line 140 might be official********

       
        const listItems = props.volkwagens.map((item) => 
        <li key={item._id} onClick={itemClick}>{item.model}</li>);
    

        return (
            <div> 
                <h2>Car Inventory</h2>
                <ul>{listItems}</ul>
               
                <ItemDetails item={selectedItem}
                  changeHandler={itemChanged}
                  clearForm={clearForm}
                  saveItem={saveItem}
                  deleteItem={deleteItem}
                />
                
            </div>
        );
    

            return <h2> hello </h2>
    }
//closing } above here CarsApp
    

    
        const ItemDetails = (props) => {

            return ( 
                <div>
                    <hr />
                    <h3> Car Details </h3>
                    
                    <form>
                    <b>Model</b>: <input type="text" name="model" onChange={props.changeHandler} value={props.item.model || ''} />
                    <b>Year</b>: <input type="text" name="year" onChange={props.changeHandler} value={props.item.year || ''} />
                    <b>engine</b>: <input type="text" name="engine" onChange={props.changeHandler} value={props.item.engine || ''} />
                    <b>Power</b>: <input type="text" name="power" onChange={props.changeHandler} value={props.item.power || ''} />
                    <b>ignition</b>: <input type="text" name="ignition" onChange={props.changeHandler} value={props.item.ignition || ''} />
                    </form>
                    
                    
                    
                    <button name="clear" onClick={props.clearForm}>Clear</button>&nbsp;
                    <button name="save" onClick={props.saveItem}>Save</button>&nbsp;
                    <button name="delete" onClick={props.deleteItem}>Delete</button>&nbsp;
                </div>
                      
            
            );

        }
        

      
    
        
    ReactDOM.render(
        <div><CarsApp volkwagens={cars}/></div>,
        document.getElementById('root'));

</script>

    
    
</body>
</html>