

export function Post({post}){

    return(

        <div style={{border:"2px solid red",margin:"10px",borderRadius:"10px"}}>
            <h1>PostID:{post.id}</h1>
            <h1>Title: {post.title}</h1>
            <p>Body: {post.body}</p>
        </div>
    )
}