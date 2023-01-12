import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Timestamp from "react-timestamp";
import { getCommentsByArticle } from "../utils/api";
import { patchVotesById } from "../utils/api";



export default function Comments(){
const[comments,setComments]=useState([])
const[noComments,setNoComments]=useState()
const [voteChange, setVoteChange] =useState(0)
const {article_id}=useParams()


function incVote(){
    patchVotesById(article_id, 1).then((res)=>{
    setVoteChange((currVoteChange)=>currVoteChange +1)
    })
        }
    

useEffect(()=>{
    getCommentsByArticle(article_id).then((allComments)=>{
    if(allComments===[]){
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
<ul className="eachcomment">
    <li key={comment.comment_id}><br/>
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


