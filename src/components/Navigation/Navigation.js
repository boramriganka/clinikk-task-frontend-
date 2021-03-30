import React from 'react'
import Searchbar from './searchbar/Searchbar'
import styled from 'styled-components'
import {default as bellicon} from  "../../assets/bell-notification.svg";
import {default as person} from  "../../assets/mansmile.png";
const Nav = styled.div`
     display: flex;
     height:20%;
     padding:1rem;
    & > img{
        height:40px;
        width:40px;

    }
`
const SearchArea = styled.div`
     flex:0.7;
    margin:1rem 0;
    & > img{
        height:40px;
        width:40px;

    }
`
const ProfileArea = styled.div`
     flex:0.3;
        padding: 1rem;

    & > img{
        height:40px;
        width:40px;
        &:hover{
            cursor:pointer;
        }
    }
`

function Navigation(props) {
    return (
        <Nav>
            <SearchArea>
            <Searchbar coursenames={props.coursenames}/>
            </SearchArea>
            <ProfileArea>
                <img alt="" src={bellicon}/>
                <img alt="" src={person}/>
            </ProfileArea>
            

        </Nav>
    )
}

export default Navigation
