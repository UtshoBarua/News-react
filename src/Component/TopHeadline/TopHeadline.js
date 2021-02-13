import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles,setArticles] = useState([])
    
    useEffect(()=>{
        const url ='http://newsapi.org/v2/everything?q=tesla&from=2021-01-13&sortBy=publishedAt&apiKey=0487ef6c448d44619dd07b5283d433ff'
        fetch(url)
        .then(res=>res.json())
        .then(data=> setArticles(data.articles))
        

       
    },[])
    return (
        <div>
            <h1> the result is{articles.length} </h1>
           {
               articles.map(article=><News article={article} ></News> )
           }
        </div>
    );
};

export default TopHeadline;