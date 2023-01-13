import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Timestamp from "react-timestamp";
import { getCommentsByArticle } from "../utils/api";




export default function Comments(){
const[comments,setComments]=useState([])
const[noComments,setNoComments]=useState(false)
const {article_id}=useParams()



useEffect(()=>{
    getCommentsByArticle(article_id).then((allComments)=>{
        
    if(allComments.length===0){
        setNoComments(true)
    }
        setComments(allComments)
    })
},[])


return noComments ? (
    <div>
        <p>Be the first to comment!</p>
    </div>
    
):
(
    <section className="commentcard">
        <div id="comments">
             {comments.map((comment)=>(
<ul key={comment.comment_id} className="eachcomment">
    <li><br/>
    <h5><img src="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt={`picture of ${comment.author}`}></img>{comment.author}</h5>
    <h3>{comment.body}</h3><br/>
    <p>posted  <Timestamp relative date={comment.created_at} /></p><br/>
    <i className="articlevote" class="fa-regular fa-thumbs-up" aria-label="votes for this article"> {comment.votes}</i>
    </li>
</ul>
        ))}
        </div> 
    </section>
)
             }


