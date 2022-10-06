import { useEffect , useState} from "react";
import styled from "styled-components";

const  Health = () => {

const [news , setNews] = useState([]);
  useEffect(() => {
    getNews();
  },[])

  const getNews = async () => {
    const api = await fetch(`http://api.mediastack.com/v1/news?access_key=2e9023272e043dbad31491af4cd407d4&countries=bg&categories=health`)
    const data = await api.json();
    setNews(data.data)
    console.log(data);
  }
  
  return (
<StyledNewsContainer>
  <h1>Здраве</h1>
  
    <Wrapper>
            {news.map((article) => {
              return(
                <Card>
                  <h1>{article?.title.substring(0, 80)}</h1>
                  <span>{article.published_at}</span>
                  <img src={article.image} alt={article.title} />
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
export default Health