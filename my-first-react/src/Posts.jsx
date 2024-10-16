import { useEffect, useState } from "react"
import { Post } from "./Post"



export function Posts(){

    let [value,PostFunction]=useState([])



    useEffect(()=>{


        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
         .then(data=>PostFunction(data))

    },[])

    return(




        <>

        <h1>Post Length:{value.length} </h1>

        <div style={{display:"grid",gridTemplateColumns:"auto auto auto"}}>

        {
            value.map(item=><Post post={item}></Post>)
        }

        </div>

       
        
        
        
        
        </>
    )



}