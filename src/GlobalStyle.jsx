import { createGlobalStyle } from "styled-components";
export const GlobalStyle=createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Work Sans', sans-serif;
}



html{
    font-size:62.5%;
    overflow-x:hidden;
}
body{
   overflow-x:hidden;
}
 h1{
    color:${({theme})=>theme.colors.heading};
    font-size:6rem;
    font-weight:700;
 }
 h2{
    color:${({theme})=>theme.colors.heading};
     font-size:4.4rem;
     font-weight:300;
     white-space:normal;
     text-align=center;
 }

 h3{
    font-size:1.8rem;
    font-weight:400;
 }

 p{
    color:${({theme})=>theme.colors.text};
    opacity:.7;
    font-size:1.65rem;
    line-height:1.5;
    margin-top:1rem;
    font-weight=400;
 }

 a{
    text-decoration:none;
 }

 li{
    list-style:none;
 }

 .container {
   max-width: 150rem;
   margin: 0 auto;
 }
 .grid {
   display: grid;
   gap: 9rem;
 }
 .grid-two-column {
   grid-template-columns: repeat(2, 1fr);
 }
 .grid-three-column {
   grid-template-columns: repeat(3, 1fr);
 }
 .grid-four-column{
    grid-template-columns: 1fr 1.2fr .5fr .8fr ;
 }


//998px
 @media(max-width: ${({theme})=>theme.media.tab}){
  .container{
   padding:0 3.8rem;
  }


 @media(max-width: ${({theme})=>theme.media.mobile}){
 
   html{
      font-size:48%;
   }
   .grid{
      gap:1.5rem;
   }
 }

 .grid-two-column ,.grid-three-column, .grid-four-column{
   grid-template-columns: 1fr;
 }


 .footer-image{
   margin:3rem;
 }


 
 `;