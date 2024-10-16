import { useState } from "react"



export default function Counter(){


    let [count,setCount]=  useState(0)

    let add=()=>{

        let newCount=count+1
        setCount(newCount)

    }

    let remove=()=>{

        let newCount=count-1

        if(newCount<0){
            return
        }
        setCount(newCount)

    }

  return(

    <div>

        <h1>Counter :{count}</h1>

        <div style={{display:"flex",justifyContent:"center",gap:"10px"}}>

        <button onClick={add}>Add</button>
        <button onClick={remove}>remove</button>


        </div>
        




    </div>






  )




}