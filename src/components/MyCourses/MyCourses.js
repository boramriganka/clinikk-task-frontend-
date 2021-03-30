import React from "react";
import styled from "styled-components";
// import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { default as SpainFlag } from "../../assets/spainflag.svg";
import { default as forward } from "../../assets/arrow-forward.svg";
import { default as backward } from "../../assets/arrow-back.svg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0.5rem 0;
  margin: 0 1rem;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-top: 20px;
  background-color: #e5e5e7;
  @media (max-width: 768px) {
   padding: 1rem;
    margin:2rem 0;
    
  }
`;
const Flag = styled.div`
  height: 20px;
  width: 20px;
  @media (max-width: 768px) {
    order: 0;
    flex: 0 0 auto;
    align-self: flex-start;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 30px;
  white-space: nowrap; /* keeps the text in one line*/
  & > h1 {
    font-size: 12px;
    font-weight: 800;
  }
  & > h2 {
    font-size: 9px;
  }
  @media (max-width: 768px) {
    order: 1;
    flex: 0 0 auto;
    align-self: flex-end;
    white-space:wrap;
    height:40px;
    width:100px;
  }
`;
const ProgressBar = styled.div`
  margin-left: 10px;
  height: 40px;
  width: 40px;
  @media (max-width: 768px) {
    order: 2;
    flex: 0 1 auto;
    align-self: auto;
  }
`;
const Continue = styled.div`
  width: 100px;
  height: 40px;
  background-color: #e5e5e7;
  text-align: center;
  font-family: "Roboto", sans-serif;
  border-radius: 8px;
  border: 1px solid #000000;
  & > h1 {
    margin-top: 10px;
    letter-spacing: 2px;
    font-size: 10px;
    color: #000000;
  }
  &:hover {
    cursor: pointer;
    background: #0c0b0b;

    color: #000000;
    border: 1px solid #fff;
  }
  &: hover >h1 {
    cursor: pointer;
    color: #fff;
    transition: 0.2s;
  }
  @media (max-width: 768px) {
    order: 3;
    flex: 0 1 auto;
    align-self: auto;
  }
`;
const SlideButtons = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
  width: 80px;
  @media (max-width: 768px) {
    order: 4;
    flex: 0 1 auto;
    align-self: auto;
    padding:3rem 0;
    height: 120px;
  }
`;
const Button = styled.div`
  border-radius: 50%;
  height: 35px;
  border:1px solid #e5e5e7;
  text-align: center;
  width: 35px;
  & > img {
    height: 35px;
    text-align: center;
    width: 35px;
  }
   &:hover{
            cursor:pointer;
        }
 
`;

/****we will divide into five elements****/

export default function MyCourses(props) {
  const percentage = props.currentCourse.totalPogress;
  return (
    <Container>
      <Flag>
        <img alt="" src={SpainFlag} />
      </Flag>
      <Info>
        <h1>
          {props.currentCourse.name}#{props.currentCourse.number}
        </h1>
        <h2>by {props.currentCourse.Instructor}</h2>
      </Info>
      <ProgressBar>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "butt",
            textSize: "20px",
            pathColor: "#000000",
            textColor: "#0c0b0b",
            trailColor: "#d6d6d6",
          })}
        />
      </ProgressBar>
      <Continue>
        <h1>{props.currentCourse.nextStep}</h1>
      </Continue>
      <SlideButtons>
        <Button>
          {" "}
          <img alt="" src={forward} />
        </Button>
        <Button>
          <img alt="" src={backward} />
        </Button>
      </SlideButtons>
    </Container>
  );
}
