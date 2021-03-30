import React from 'react'
import {default as bellicon} from  "../../assets/bell-notification.svg";
import {default as person} from  "../../assets/mansmile.png";
import styled from 'styled-components'
// render
const StatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10%;
  margin: 0 1rem;
  padding: 1rem 0;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
`;
const Info = styled.div`
    display: grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    padding: 1rem;
    margin: 0.5rem 1rem;
    background-color:#e5e5e7;
`
const BigText = styled.div`
  font-size:60px;
    font-weight:800;
`
const SmallText = styled.div`
  font-size:12px;
  margin: 1rem 0;
`

function StatsBoxes() {
    return (
        <StatsContainer>
            <Info>
             <BigText>11</BigText>
            <SmallText>courses completed</SmallText>
            </Info>
            <Info>
               <BigText>4</BigText>
            <SmallText>courses in progress</SmallText>
            </Info>
        </StatsContainer>
    )
}

export default StatsBoxes
