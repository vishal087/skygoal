import React from 'react'
import styled from 'styled-components'


const Contact = () => {
  return (
    <Wrapper>
     <h1>Product and Services</h1>
    <div className='container grid grid-three-column'>
    <div className="card-section">
      <div className="card-image">
      <img src="./images/product1.png" alt="" />
      </div>
   <div className="card-title">
   <h2>Our Product</h2>
   </div>
  <div className="card-body">
<p>Our Product is made on the base of our teams's careful research and analyses,ranging from internet based application.</p>
  </div>
   <div className="card-btn">
   <button className='btn'>Read more</button>
   </div>
    </div>


    <div className="card-section">
      <div className="card-image">
      <img src="./images/product1.png" alt="" />
      </div>
   <div className="card-title">
   <h2>Our Service</h2>
   </div>
  <div className="card-body">
<p>DSI's shared service solutions focus on the front-end based software devlopment, designed specifically for the banking and financial sectors.</p>
  </div>
   <div className="card-btn">
   <button className='btn'>Read more</button>
   </div>
    </div>


    <div className="card-section">
      <div className="card-image">
      <img src="./images/product1.png" alt="" />
      </div>
   <div className="card-title">
   <h2>Our Technology</h2>
   </div>
  <div className="card-body">
<p>First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide,including mobile and TV devices.</p>
  </div>
   <div className="card-btn">
   <button className='btn'>Read more</button>
   </div>
  
    </div>

   
    
    </div>
    </Wrapper>
  )
}
 const Wrapper=styled.section`
 padding: 9rem 0;
 h1{
  font-size:4rem;
  text-align:center;
  font-family:Arial;
  padding:1.5rem 0;
}
 .card-section{

  width:320px;
  height:400px;
  padding:2.7rem 0;
 }
 .card-image{
  padding:2rem 0;
 }
.card-title{
  padding:1.5rem 0;
}
  h2{
     font-size:3.5rem;
     font-weight:500;
     color:red;
     font-family:Arial;
  }
  p{
    color:#000;
    font-size:1.7rem;
    font-family:Arial;
    font-weight:400;
  
  }
  .card-btn{
    padding:2rem 0;
  }
  .btn{
    width:12rem;
    height:3.8rem;
    background:red;
    border:none;
    color:#fff;
     font-size:1.7rem;
     font-family:Arial;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .container{
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .grid {
      gap: 5.2rem;
    }
 `;

export default Contact