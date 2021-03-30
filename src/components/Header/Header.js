import React from 'react'
import styled from "styled-components";
import { default as Art } from "../../assets/man.svg";


const Container = styled.div`
  display: flex;
  height: 170px;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 1rem;
  margin-top: 30px;
  text-align: left;
  background-color: #e5e5e7;
  flex-direction: column;
  border-radius: 15px;
  @media (max-width: 768px) {
    padding:2rem;
    margin-left:-10px;
  }
`;
const SubContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  @media (max-width: 768px) {
    padding: 1rem 0;
    width: 40%;
  }
`;
const SubContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translate(10px, -30px);
  width: 50%;
  @media (max-width: 768px) {
    padding: 1rem 0;
    width: 60%;
  }
`;
const BigText = styled.div`
  font-size: 35px;
  color: #000000;
  margin-left: 1rem;
  margin-bottom: 40px;
  width: 100%;
  height: 20px;
  font-weight: 700;
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;
const SmallText = styled.div`
  width: 100%;
  margin-left: 1rem;
  height: 20px;
  font-size: 15px;
  font-weight: 200;
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;


const Image = styled.div`
    width:60%;
`;
const Illustration = styled.div`
  height: 200px;
  width: 200px;
  @media (max-width: 768px) {
    padding: 1rem 0;
    margin-right:-50px;
  }
`;

function Header() {
    return (
      <Container>

        <SubContainer1>
          <BigText>Hello Josh!</BigText>
          <SmallText>It's good to see you again!</SmallText>
        </SubContainer1>
        <SubContainer2>
          <Image>
            <Illustration>
              <img alt="" src={Art} />
            </Illustration>
          </Image>
        </SubContainer2>
      </Container>
    );
}

export default Header
