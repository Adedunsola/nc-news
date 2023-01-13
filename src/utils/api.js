import axios from 'axios'


const articleApi = axios.create({
    baseURL: 'https://nc-news-3b14.onrender.com/api'
});


export const getArticles = ()=>{
    return articleApi.get('/articles').then(({data})=>{
        return data.articles
    })
}

export const getArticleById = (article_id)=>{
    return articleApi.get(`/articles/${article_id}`).then(({data})=>{
        return data.article
    })
}



export const getCommentsByArticle = (article_id)=>{
    return articleApi.get(`/articles/${article_id}/comments`).then(({data})=>{
        return data.comments
    })
}

export const patchVotesById =(article_id, increment)=>{
    const incVote={inc_votes: increment}
    return articleApi.patch(`/articles/${article_id}`, incVote).then(({data})=>{
    return data.article
    })
}

