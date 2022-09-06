import React from 'react'
import styled from 'styled-components';

const HeroSection = () => {
  return (
    <Wrapper>
  <div className='container grid grid-two-column'>
  <div className="section-hero-data">
    <h1 className='hero-heading'>Making the most of the ever-growing </h1><br/>
    <h1 className='hero-head'> Information Technology</h1>
    <p className='hero-para'>Manage by a team of professional experts with extensive experience and impressive trades records.</p>
    <button className='btn'>
    Read More
   </button>
    </div>
  
    <div className="section-hero-image">
        <picture>
            <img src="./images/pana.svg" alt="hero-image" className='hero-img' />
        </picture>
    </div>

  </div>

    </Wrapper>
  )
};

const Wrapper=styled.section`
padding: 9rem 0;
.section-hero-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.btn {
  width:16rem;
  height:4rem;
  background:red;
  color:#fff;
  font-size:2rem;
  border:none;
}

.hero-heading {
  font-size: 6.4rem;
}
.hero-head{
  color:red;
}
.hero-para {
  margin-top: 1.5rem;
  margin-bottom: 3.4rem;
  max-width: 60rem;
  font-size:1.9rem;
  
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
    max-width:85%;
  }
}
`;

export default HeroSection
