import { useEffect , useState} from "react";
import styled from "styled-components";

const  Science = () => {

const [news , setNews] = useState([]);
  useEffect(() => {
    getNews();
  },[])

  const getNews = async () => {
    const api = await fetch(`https://newsapi.org/v2/top-headlines?country=bg&category=science&apiKey=27f0af2bfe844bd796a0856bc4486e85`)
    const data = await api.json();
    setNews(data.articles)
    console.log(data.articles)
  }
  
  return (
<StyledNewsContainer>
  <h1>Наука</h1>
  
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
    </StyledNewsContainer>
  )
}
 
const StyledNewsContainer = styled.div`
  grid-row-start:2;
  grid-row-end:span 2;
  grid-column-start:2;
  grid-column-end:4;
  box-sizing:content-box;
`

const Wrapper = styled.div`
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
grid-column-gap:2rem;
grid-row-gap:2rem;
background:#e0e0e0;

`


const Card = styled.div`
transition:transform .2s;
&:hover {
  transform: scale(1.1);
}
border-radius: 2px;
background: #e0e0e0;
box-shadow:  11px 11px 22px #b5b5b5,
             -11px -11px 22px #ffffff;
img {
 width:100%;
};
h4 {
 font-weight:bold; 
}
`;
export default Science