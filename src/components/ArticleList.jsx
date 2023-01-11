import LinearProgress from '@mui/joy/LinearProgress'
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { getArticles } from "../utils/api";
import Timestamp from 'react-timestamp'




export default function ArticleList(){
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading]=useState(true)
   
    
   
    useEffect(()=>{
        setIsLoading(true)
        getArticles().then((allArticles)=>{
            setArticles(allArticles)
           setIsLoading(false)
        })
    },[])

    
    return isLoading ? (
    <main>
             <LinearProgress className='loader' color="Info" size="lg" variant="soft" value="100" thickness={12}></LinearProgress>
    </main>
       
             
    ):
      (
    <section>
         <section className="articlelist">
         {articles.map((article)=>(
    <main className="articlecard" key={article.article_id}>
        <Link to={`/articles/${article.article_id}`}><h2 className='link'>{article.title}</h2></Link><br></br>
        <br></br>
        <h4>-{article.author}</h4><br></br>
        <p><Timestamp date={article.created_at}/></p>
        <Link><i class="fa-regular fa-comment" aria-label="comments for this article"> {article.comment_count}</i></Link>
        <i class="fa-solid fa-thumbs-up" aria-label="votes for this article"> {article.votes}</i>
        
    </main>
))}
    </section>
    </section>
)
}