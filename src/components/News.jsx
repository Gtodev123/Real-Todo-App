import { useEffect , useState} from "react";
import styled from "styled-components";

const  News = () => {

const [news , setNews] = useState([]);
  useEffect(() => {
    getNews();
  },[])

  const getNews = async () => {
    const api = await fetch(`https://newsapi.org/v2/top-headlines?country=bg&category=technology&apiKey=27f0af2bfe844bd796a0856bc4486e85`)
    const data = await api.json();
    setNews(data.articles)
    console.log(data.articles)
  }
  
  return (
<StyledNewsContainer>
  <h1>Водещите новини</h1>
  
    <Wrapper>
            {news.map((article) => {
              return(
                <Card>
                  <h1>{article?.title.substring(0, 80)}</h1>
                  <span>{article.published_at}</span>
                  <img src={article.urlToImage} alt={article.title} />
                  <button>Прочети повече</button>
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
  @media screen and (max-width: 600px) {
    grid-row-start:2;
  grid-row-end:span 2;
  grid-column-start:1;
  grid-column-end:4;
  box-sizing:content-box;
  }
`

const Wrapper = styled.div`
display:grid;
grid-template-columns:repeat(auto-fit,minmax(12rem,16fr));
grid-column-gap:2rem;
grid-row-gap:2rem;
background:#e0e0e0;
justify-content:center;

`


const Card = styled.div`
display:flex;
flex-direction:column;
cursor: pointer;
overflow:hidden;
transition:transform .2s;
&:hover {
  transform: scale(1.1);
}
border-radius: 2px;
background: #e0e0e0;
box-shadow:  11px 11px 22px #b5b5b5,
             -11px -11px 22px #ffffff;

img {
  height:12rem;
  width:100%;
  object-fit:cover;

}
span {
  font-size:0.8rem;
}
h1 {
  font-size: 1rem;
  padding:0.5rem; 
  @media screen and (max-width: 600px) {
        font-size:80%;
    }
}
button {
  width:100%;
}
`;
export default News