import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom'
import LinearProgress from '@mui/joy/LinearProgress'
import { getArticleById } from "../utils/api";
import Timestamp from 'react-timestamp'


export default function SingleArticle(){
    const [article, setArticle] = useState([])
    const {article_id} = useParams();
    const [isLoading, setIsLoading]=useState(true)

    
    useEffect(()=>{
        getArticleById(article_id).then((articleInfo)=>{
setArticle(articleInfo)
setIsLoading(false)
        })
    },[])

    
    
    
    
return isLoading ? (
    <LinearProgress className='loader' color="Info" size="lg" variant="soft" value="100" thickness={12}></LinearProgress> 
):
 (
 <section className="articleInfo">
        {article.map((article)=>(
            <main>
                 <h1 key={article.article_id}>{article.title}</h1><br></br><br></br><br></br><br></br>
                 <h5>{article.body}</h5>
                 <h3>by {article.author}</h3>
                 <p><Timestamp date={article.created_at}/></p>
    <div className="icons">
            <Link>
            <i id="articlecomment" class="fa-regular fa-comment" aria-label="comments for this article"> {article.comment_count}</i>
            </Link>
            <i id="articlevote" class="fa-solid fa-thumbs-up" aria-label="votes for this article"> {article.votes}</i>
    </div>
            </main> 
        ))}
       
</section>
   
)
}