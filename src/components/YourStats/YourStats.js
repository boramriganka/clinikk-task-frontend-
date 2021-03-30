import React from 'react'
import Line from './Chart/Line'
import styled from 'styled-components'
const YourStatsContainer = styled.div`
    width:100%;
    height:50%;
    background-color:#ffffff;
    align-items:center;
    justify-content:center;
    
`
function YourStats() {
    return (
        <YourStatsContainer>
            <Line/>
        </YourStatsContainer>
    )
}

export default YourStats
