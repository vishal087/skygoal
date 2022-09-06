import React from 'react'
import styled from 'styled-components';


const About = () => {
  return (
    <Wrapper>
    <div className='container grid grid-two-column'>
  
    
      <div className="section-hero-image">
          <picture>
              <img src="./images/pana-1.svg" alt="hero-image" className='hero-img' />
          </picture>
      </div>

      <div className="section-hero-data">
      <h1 className='hero-heading'>Welcome to <span>Dwidasa Samsara Indonesia(DSI)</span> </h1>
      <p className='hero-para'>Dwidasa Samsara Indonesia(DSI) was firstly established in 2010 by the founders,who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through DSI's distinct front-end based application concept.
      </p>
      <p className='hero-para'>Managed by a team of professionals experts with extensive experience and impressive tracks records,DSI beleives that continuous improvements and innovations assure your bussiness to run effectively and efficiently.</p>
    
      </div>
  
    </div>
  
      </Wrapper>
  )
}
const Wrapper=styled.section`

padding: 9rem 0;
.section-hero-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-heading {
  font-size: 5.6rem;
}
span{
  color:red;
}
.hero-para {
  margin-top: 1.5rem;
  margin-bottom: 3.4rem;
  max-width: 60rem;
}
.section-hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}
picture {
  text-align: center;
}
.hero-img {
  max-width: 120%;
}
@media(max-width: ${({theme})=>theme.media.mobile}){
  .grid{
    gap:7.2rem;
  }
  .hero-img{
    max-width:75%;
  }
}
`;
export default About