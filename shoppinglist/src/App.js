import React from 'react'; 
import { useState} from 'react';
import './App.css'; 
import Axios from 'axios';

function App() {

    const [list,setList] = useState([])
    const [foodName,setFoodName] = useState('');

    

  

    const handleAddItem = () => { 

      console.log(foodName)

      Axios.post('http://localhost:3001/create', { 

      
      foodName:foodName

      }).then(() => { 

        console.log("success")

      })


        const newList = [...list,{title:foodName}]
        setList(newList) 
        setFoodName('') 
      
       

    }

    const handleRemoveItem = (index) => { 

        const newList =  []; 

        for (let i = 0; i < list.length; i++) { 

            if(index !== i) { 

                newList.push(list[i])


            }            



        }

        setList(newList)

    }



  return (
  
   <div className='App'>
       
       <h1>Grocery List</h1>

       <div className = 'input'> 
        <input type='text' value={foodName} className='TextBox' onChange= {(event) => setFoodName(event.target.value)}></input>
        <input type = 'button' value="ADD" className='Button' onClick = {() => handleAddItem()}></input>

       </div>

        <div className='list'> 
        
        {list.map((item,index) => { 

            return ( 

                <div> 
                    <p onClick = { () => handleRemoveItem(index) } >{item.title}</p>

                    </div>

            )


        })}


        
        
        </div>
    </div>

  )


}

export default App;
