

export default function User({user}){

    return(

        <div style={{border:"2px solid yellow",padding:"15px",borderRadius:"20px", marginTop:"10px"}}>

        <h1>User Name:{user.name}</h1>
        <img style={{borderRadius:"15px"}} src={user.imageUrl}></img>
        <h2>ImageSize:{user.imageSize}</h2>
        
        
        
        </div>
    )


}