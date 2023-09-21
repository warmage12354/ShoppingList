const express = require('express'); 
const app = express(); 
const cors = require('cors');  

app.use(cors()); 

var mysql = require('mysql');
var db  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'Warfare!12354',
  database        : 'grocerylist'
});
 




app.get('/', (req,res) => { 

    db.query("insert INTO food (foodName) VALUES ('Cheese')", (err,result) => { 

        if(err) { 

            console.log(err)
            
        } 

        else { 

            console.log(result)

        }


    }  )

} ) 

app.listen(8080, () => { 

    console.log('server listening on port 8080')

} )