import React from 'react'
import Menu from '../../components/Menu/Menu.js'
import styled from "styled-components";

const Container = styled.div`
  flex: 1 1 5%; /*  stretching: */
  // border: 1px solid red;
  width: 10%;
  @media (max-width: 768px) {
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    height:100px:
    width:100%;
  }
`;

function Left() {
    return (
      <Container>
        <Menu/>
      </Container>
    )
}

export default Left
