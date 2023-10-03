const express = require("express"); 
const app = express();
const mysql = require('mysql2'); 
const cors =  require('cors');


app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "Password",
database:"grocerylist",  
});

  app.post('/create', (req,res) => { 

    console.log(req.body.foodName);

    const foodName = req.body.foodName; 

    db.query("INSERT INTO food (foodName) VALUES (?) ", 
    
    [foodName],
    
    (err,result) => { 

      if(err) { 

        console.log(err)

      } 

      else { 

        res.send(result)
        
      }


    } 
    
    );
  
  });



  app.listen(3001,() => { 

    console.log("Server Is Running On Port 3001")

  })

