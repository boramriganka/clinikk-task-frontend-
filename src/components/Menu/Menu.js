import React from 'react'
import styled from 'styled-components'
import { default as logo1 }  from '../../assets/vector1.svg'
import { default as logo2 } from "../../assets/vector2.svg";
import { default as logo3 } from "../../assets/vector3.svg";
import { default as logo4 } from "../../assets/vector4.svg";
import { default as logo5 } from "../../assets/vector5.svg";
import { default as logo6 } from "../../assets/vector6.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap:wrap;
  justify-content: space-between;
  padding: 1.5rem 0;
   margin:30px;
  width:  ${(window.innerWidth * 50) / window.innerHeight}px;
  height: 100%;
  /* Black */

  background: #0c0b0b;
  border-radius: 24px;
  box-shadow: 12px 12px 32px rgba(13, 39, 80, 0.25), -10px -10px 15px white;
   @media (max-width: 768px) {
    display:flex;
    width:  auto;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    height:250px;
    padding:1rem;
      border-radius:0;
      margin:0;
      
  }
}
`;
const Text = styled.div`
  color: #ffffff;
  font-family: "Baloo Bhai 2", cursive;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  font-size: 50px;
  line-height: 102px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40%;
  border-radius: 24px;
  background: #0c0b0b;
  @media (max-width: 768px) {
    font-size:20px;
    padding: 1rem 0;
  }
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  border-radius: 24px;
  /* Black */

  background: #0c0b0b;
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    padding:1rem;
  }
`;
const BottomContainer = styled.div`
  height: 35%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    height: 40px;
    backgroud-color:#0c0b0b;
  }
`;
const Logo = styled.div`
  height: 1rem;
  width: 15%;
  @media (max-width: 768px) {
    margin:1rem;
    padding:1rem;
  }
`;
function Menu() {
    return (
      <Container>
        <TopContainer>
          <Text>F.</Text>
        </TopContainer>
        <LogoContainer>
          <Logo>
            <img alt="" src={logo1} />
          </Logo>
          <Logo>
            <img alt="" src={logo2} />
          </Logo>
          <Logo>
            <img alt="" src={logo3} />
          </Logo>
          <Logo>
            <img alt="" src={logo4} />
          </Logo>
          <Logo>
            <img alt="" src={logo5} />
          </Logo>
        </LogoContainer>
        <BottomContainer>
          <Logo>
            <img alt="" src={logo6} />
          </Logo>
        </BottomContainer>
      </Container>
    );
}

export default Menu


