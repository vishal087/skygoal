import React from 'react'
import styled from 'styled-components'
import { FaFacebookF} from "react-icons/fa";
import { FaInstagram} from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";

const Card = ({imgUrl,profession,name}) => {
  return (
    <Wrapper>
    <div className='card-container'>
        <div className="image-container">
            <img src={imgUrl} alt="" className='image-profile'/>
        </div>
        <div className='card-profession'>
          <h2>{profession}</h2>
        </div>
        <div className='card-name'>{name}</div>
        <div className='icons-image'>
          <FaFacebookF className='icon'/>
          <FaInstagram   className='icon'/>
          <FaTwitter  className='icon'/>
        </div>
    
    </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
padding: 9rem 0;
.card-container{
  background: #eee;
  width:300px;
  height:380px;
  overflow:hidden;
  box-shadow: 0px 0px 15px -15px;
  padding:2rem;
  text-align:center;
  border-radius:2rem;

  &:hover{
    transform:scale(1.02);
    background:#FFE3E3;
  }
}
.image-container{
  overflow:hidden;
  height:200px; 
  padding:1rem 0;
}
.image-profile{
  width:160px;
  height:160px;
  border-radius:50%;
}
h2{
  font-size:2rem;
  color:red;
  font-weight:400;
}
.card-name{
  color:#000;
  font-weight:700;
  font-size:2.5rem;
  padding:1rem;

}
.icons-image{
  font-size:2.7rem;
  padding:2rem;
 
}
.icon{
  margin:0.8rem;
}

`

export default Card
