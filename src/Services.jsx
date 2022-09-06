import React from 'react'
import styled from 'styled-components'
import Card from './components/Card'

const Services = () => {
  return (
<>
    <Wrapper>
     <h1>Mobile Specialist</h1>
    <div className='container grid grid-four-column'>
    <div className="card-section">
    <Card imgUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" profession="System Analyst" name="Rodney Stratton"/>
    </div>
    <div className="card-section">
    <Card imgUrl=" https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=" profession="System Analyst" name="Rodney Stratton"/>
    </div>
    <div className="card-section">
    <Card imgUrl="https://us.123rf.com/450wm/fizkes/fizkes2007/fizkes200701793/152407909-profile-picture-of-smiling-young-caucasian-man-in-glasses-show-optimism-positive-and-motivation-head.jpg?ver=6" profession="Programmer" name="Rodney Stratton"/>
    </div>
    <div className="card-section">
    <Card imgUrl="https://qph.cf2.quoracdn.net/main-qimg-7fb93146f5e4e470f5a590d2fc38be3b-lq" profession="Programmer" name="Rodney Stratton"/>
    </div>

    </div>
    </Wrapper>
    </>
 

  )
}
const Wrapper=styled.section`
h1{
  font-size:4rem;
 padding:1.8rem 0;
  text-align:center;
  font-family:Arial;
}





`;



export default Services