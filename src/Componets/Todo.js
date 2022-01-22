import React, { useState } from 'react'
import logo from "../Images/todo.png"

const Todo = () => {

console.log("test")
    const [inputVal, setInputVal] = useState("")
    const [EachItems, setEachItems] = useState([])

    const addItems = () => {
        if(!inputVal){
           alert("Plz Enter the Value")
        }else{
            setEachItems([...EachItems,inputVal])
            setInputVal("")
        }
        
    }

    const removeall = () => {
        setEachItems([]);
    }
    const removeList = (id) => {
        let updateItems = EachItems.filter((elem , ind) => {
            return ind !== id
        })
        setEachItems(updateItems)
    }

    return (
        <>
        <div className='main_div'>
            <img src={logo} alt='logo'/>
        </div>
   
        <div className='text_div'>
           <h2> This is Awesome Todo App </h2>
        </div>

        <div className='input_field'>
            <input type="text" 
            id="inputValue"
             placeholder='AddItems'
              className='fas  fa-plus'
               value={inputVal}
                onChange={(e) => {setInputVal(e.target.value)}}  autoComplete='off'/>
                <button className='btn_style' id='add' onClick={addItems}>Add</button>
        </div>


         {
             EachItems.map((curelem , index) => {

                return(
                    <>

         <div className='showItems'>
                <div className='eachItems'>
                    <div className='shownitems' key={index}>
                    <h3> {curelem} <i className='fas fa-trash main' onClick={() => removeList(index)} ></i></h3>
                  
                    </div>
    
                </div>
            </div>

                    </>
                );
                
             })
         }




        <div className='main_btn'>
            <button className='btn_style' onClick={removeall}>Remove All</button>
        </div>
        </>
    )
}

export default Todo
