import React from 'react'
import styled from "styled-components"
import {default as bigbrain} from "../../assets/big-brain.svg"
const Continue = styled.div`
  width: 100px;
  height: 40px;
  padding:0.7re 0.3rem;
   background-color:#000000;
  text-align: center;
  font-family: "Roboto", sans-serif;
  border-radius: 8px;
  border:1px solid #000000;
  & > h1 {
    margin-top: 10px;
    letter-spacing: 2px;
    font-size: 10px;
    color: #fff;
  }
   &:hover{
            cursor:pointer;
              background: #e5e5e7;
           
            color:#fff;
        }
      &: hover >h1{
           cursor:pointer;
            color:#000000;
           transition:0.2s;
      }
`;
const Container =styled.div`
     display:flex;
    flex-direction:row;
    width:100%;
    height:27%;
    margin:0 2rem;
    background-color:#ffffff;
    align-items:center;
    justify-content:center;
`;
const Container1 =styled.div`
    flex:0.4;
    display:flex;
    flex-direction:column;
`;
const Container2 =styled.div`
    display:flex;
    flex:0.6;
    align-items: center;
    justify-content:center;
    & > img{
        height: 107px;
        width: 100px;
    }
   `
function Banner() {
    return (
        <Container>
        <Container1>
            <h1>Learn even more</h1>
            <p>learn premium features only for $9.99 per month</p>
            <Continue><h1>Continue</h1></Continue>
        </Container1>
        <Container2>
            <img alt="" src={bigbrain}/>
        </Container2> 
        </Container>
    )
}

export default Banner
