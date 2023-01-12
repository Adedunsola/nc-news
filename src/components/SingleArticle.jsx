import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {Link} from 'react-scroll'
import LinearProgress from '@mui/joy/LinearProgress'
import { getArticleById } from "../utils/api";
import Timestamp from 'react-timestamp'
import Comments from "./Comments";
const midPicture = require('../images/girl.jpg')

export default function SingleArticle(){
    const [articles, setArticles] = useState([])
    const {article_id} = useParams();
    const [isLoading, setIsLoading]=useState(true)

    
    useEffect(()=>{
        getArticleById(article_id).then((articleInfo)=>{
setArticles(articleInfo)
setIsLoading(false)
        })
    },[])

    
    
    
return isLoading ? (
    <LinearProgress className='loader' color="Info" size="lg" variant="soft" value="100" thickness={12}></LinearProgress> 
):
 (
    <section>
        <div className="articleInfo">
        {articles.map((article)=>(
            <section>
                 <h1 key={article.article_id}>{article.title}</h1><br/><br/><br/><br/>
                 <h5>{article.body}</h5>
                 <h3>by {article.author}</h3>
                 <p><Timestamp date={article.created_at}/></p>
    <div className="icons">
            <Link to="ViewComments" spy={true} smooth={true}>
            <p className="SeeComments"> View {article.comment_count} comments</p>
            </Link>
            <i className="articlevote" class="fa-solid fa-thumbs-up" aria-label="votes for this article"> {article.votes}</i>
    </div>
            </section>  
        ))} 
</div>
<img className="commentpicture" src={midPicture} alt=""></img>
<div id="ViewComments">
    <Comments/>
</div>

</section>
 
  
)
}
