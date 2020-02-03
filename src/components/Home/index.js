import React from 'react';
import {HomeSection , HomeBtn , HomeDesc , HomeInfo , HomeSpan , HomeTitle , HomeInformation} from './style.js';

function Home() {
  return (
    <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle className="margin-bottom" > Reem Hagrss </HomeTitle>
                    <HomeInfo>Front-end Developer</HomeInfo>
                    <HomeDesc>
                        Iam a professional 
                        <HomeSpan> React JS </HomeSpan> 
                        and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeBtn> Let's Begin </HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
        
  );
}

export default Home;
