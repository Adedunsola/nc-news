import { useState } from "react";
import { patchVotesById } from "../utils/api";




export default function VoteCount({setArticles,articles, article_id}){
    const [voteChange, setVoteChange] =useState(0)
    const [isError, setIsError]=useState(false)
    const [disableClick, setDisableClick]=useState(false)
   

function changeVote(increment){
setVoteChange((currVoteChange)=>{
    return currVoteChange += increment
})
patchVotesById(article_id,increment).catch((err)=>{
    
    setVoteChange((currVoteChange)=>{
        return currVoteChange -= 1
})
 setIsError(true)
})
}



return isError ? (
    <p className="error">Oops, Something Went Wrong!! Refresh the page and please try again</p>
    
    ):
      (

        <div className="votebutton">
            
            <button className="likebutton"  onClick={()=>{changeVote(1); {setDisableClick(true)};}} disabled={disableClick}><i class="uil uil-thumbs-up"></i></button>
           
            <span className="value">{articles[0].votes+voteChange}</span>
            <button className="dislikebutton" onClick={()=>{changeVote(-1); {setDisableClick(true)};}} disabled={disableClick}><i class="uil uil-thumbs-down"></i></button>
            
        </div>
   )
}