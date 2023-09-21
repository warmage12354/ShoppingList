import React from 'react'; 
import { useState} from 'react';
import './App.css';

function App() {

    const [list,setList] = useState([])
    const [inputData,setInputData] = useState('');

    const [data, setData] = useState([]);


  

    const handleAddItem = () => { 

        const newList = [...list,{title:inputData}]
        setList(newList) 
        setInputData('') 
        

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
        <input type='text' value={inputData} className='TextBox' onChange= {(event) => setInputData(event.target.value)}></input>
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
