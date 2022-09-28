import { useEffect , useState} from "react";
import styled from "styled-components";

const  News = () => {

const [news , setNews] = useState([]);
  useEffect(() => {
    getNews();
  },[])

  const getNews = async () => {
    const api = await fetch(`https://newsapi.org/v2/top-headlines?country=bg&apiKey=27f0af2bfe844bd796a0856bc4486e85`)
    const data = await api.json();
    setNews(data.articles)
    console.log(data.articles)
  }
  
  return (

    <Wrapper>
            {news.map((article) => {
              return(
                <Card>
                  <h4>{article.title}</h4>
                  <span>{article.publishedAt}</span>
                  <img src={article.urlToImage} alt={article.title} />
                </Card>
              )
            })}
    </Wrapper>
  )
}
 

const Wrapper = styled.div`
padding-left:3rem;
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
grid-column-gap:2rem;
grid-row-gap:2rem;
width:90%;
`;


const Card = styled.div`
transition:transform .2s;
&:hover {
  transform: scale(1.1);
}
border-radius:5px;
box-shadow: 0px 5px 30px rgba(0,0,0, 0.5);
img {
 width:100%;
};
h4 {
 font-weight:bold; 
}
`;
export default News