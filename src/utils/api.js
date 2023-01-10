import axios from 'axios'


const articleApi = axios.create({
    baseURL: 'https://nc-news-3b14.onrender.com/api'
});


export const getArticles = ()=>{
    return articleApi.get('/articles').then(({data})=>{
        return data.articles
    })
}



