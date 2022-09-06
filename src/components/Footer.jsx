import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <footer>
        <div className="container grid grid-three-column">
          <div className="footer-address">
            <h2>PT Dwidasa Samsara Indonesia</h2>
            <p>Ruko Jalur Sutera 29A No.53</p>
            <p>Alam Sutera Serpang, Tangerang 15323</p>
          </div>

          <div className="footer-contact">
            <h2>Contact</h2>
            <p>Phone : +62.21.5314.1135</p>
            <p>fax : +62.21.5314.1135</p>
            <p>Email: community@dwidasa.com</p>
          </div>

          <div className="footer-image ">
  
            <img className="foot-img" src="./images/img1.png" alt="" />
            <img className="foot-img" src="./images/img2.png" alt="" />
            <img className="foot-img" src="./images/img3.png" alt="" />
    
          
            <img className="foot-img" src="./images/img4.png" alt="" />
            <img className="foot-img" src="./images/img5.png" alt="" />
            <img className="foot-img" src="./images/img6.png" alt="" />
       
          
         
          </div>
        </div>

        {/* bottom section  */}
        <div className="footer-section">
          <hr />
          <h4>Copyright@2022</h4>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  footer {
    padding: 12rem 0 5rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h2 {
      color: ${({ theme }) => theme.colors.hr};
      font-size: 3.5rem;
      margin-bottom: 2.5rem;
      font-weight: 300;
      font-weight: 500;
    }

    p {
      color: ${({ theme }) => theme.colors.white};
      margin-bottom: 1.4rem;
      font-size: 2rem;
    }

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
    h4 {
      text-align: center;
      font-size: 1.8rem;
      color: #fff;
    }
    .foot-img {
      padding: 0.8rem;
      background: #fff;
      margin: 1rem;
      border-radius: 0.5rem;
      height: 5rem;
      width: 10rem;
    }
  }


`;

export default Footer;
