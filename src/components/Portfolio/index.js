import React , {useState , useEffect } from 'react';
import axios from 'axios';
import {PortfolioSection , PortfolioTitle , Span, PortfolioList , PortfolioItem , BoxDiv , Img , Overlay , ItemSpan  } from './style.js';

const Portfolio = () => {

  const [ images , setImages] = useState([]);
  
  useEffect ( () =>{
    axios.get('React_Project/js/data.json').then( res => { 
      setImages(res.data.portfolio);
    } )
  } , [] );

  const imageList = images.map( (image) =>{
    return(
      <BoxDiv key={image.id}>
          <Img src={image.image} alt="" />
          <Overlay >
              <ItemSpan>
                  Show Image
              </ItemSpan>
          </Overlay>
      </BoxDiv>
    )
  } )
  

  return (
    <PortfolioSection>
            <PortfolioTitle>
              <Span> My </Span> Portfolio
            </PortfolioTitle>
            <PortfolioList >
                <PortfolioItem active >All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            <div>
                
                {imageList}
                
            </div>
            
        </PortfolioSection>
        
  );
}

export default Portfolio;
