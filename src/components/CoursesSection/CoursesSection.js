import React from 'react'
import {useContext} from 'react'
import styled from "styled-components";
import { default as fire } from "../../assets/fire.svg";
import { default as clock } from "../../assets/clock.svg";



const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin: 0 1rem;
  
`;
const Container1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 0;
  align-items: center;
  width: 300px;
  height: 75px;
  margin-top: 20px;
  & > h2 {
    font-weight: 800;
    font-size: 30px;
  }
  @media (max-width: 768px) {
    height: 100px;
  }
`;
const Container2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem 0;
  align-items: center;
  width: 100%;
  height: 55px;
  margin-top: 20px;
  & > h3 {
    font-weight: 800;
  }
  @media (max-width: 768px) {
    height: 80px;
    margin:0 -20px;
    width:100%;
  }
`;
const Option = styled.div`
  width: 20%;
  height: 30%;
  margin:0 5px;
  & > h1 {
    color: #000000;
    font-size: 16px;
    opacity: 0.3;
  }
  &:nth-child(2) > h1 {
    opacity: 1;
    color: #0c0b0b;
  }
   &:hover{
            cursor:pointer;
        }
`;
const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 30px;
  white-space: nowrap;
  & > h1 {
    font-size: 15px;
    font-weight: 800;
    @media (max-width: 768px) {
      font-size: 11px;
    }
  }
  & > h2 {
    font-size: 10px;
    @media (max-width: 768px) {
      font-size: 9px;
    }
  }
  @media (max-width: 768px) {
    font-size: 10px;
    padding:0 1.4rem;
  }
`;
const CoursePlan = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 1rem;
  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 12px !important;
  }
`;
const Icon = styled.div`
  width: 20px;
  height: 20px;
  & > img {
    width: 20px;
    height: 20px;
  }
  
`;
const Duration = styled.div`
  display: flex;
  width: 40px;
  height: 20px;
  padding: 0 20px;
  & > img {
    width: 15px;
    height: 15px;
    padding: 5px;
  }
  & > p {
    width: 15px;
    height: 15px;
    padding: 5px;
    white-space: nowrap;
    font-size: 12px;
    font-family: "Roboto", sans-serif;
  }
  @media (max-width: 768px) {
    display:flex;
    flex-direction:column;
    width:30px;
    margin-left:25px;
  }
`;
const Likes = styled.div`
  display: flex;
  width: 20px;
  padding:0 10px;
  height: 20px;
  & > img {
    width: 15px;
    height: 15px;
    padding: 5px;
  }
  & > p {
    width: 15px;
    height: 15px;
    padding: 5px;
    font-size: 12px;
    font-family: "Roboto", sans-serif;
  }
`;
const ViewButton = styled.div`
  width: 100px;
  height: 40px;
  background-color: #e5e5e7;
  text-align: center;
  font-family: "Roboto", sans-serif;
  border-radius: 8px;
  border: 1px solid #000000;
  & > p {
    margin-top: 10px;
    letter-spacing: 2px;
    font-size: 10px;
    color: #000000;
    @media (max-width: 768px) {
      font-size: 10px;
      font-weight:800;
    }
  }

  &:hover {
    cursor: pointer;
    background: #0c0b0b;

    color: #000000;
    border: 1px solid #fff;
  }
  &: hover >p {
    cursor: pointer;
    color: #fff;
    transition: 0.2s;
  }
  @media (max-width: 768px) {
    width: 70px;
    height: 40px;
    margin-left:20px;
  }
`;
function Course(props){
    return (
      <CoursePlan>
        <Icon>
          <img alt="" src={props.Image} />
        </Icon>
        <AboutSection>
          <h1>{props.name}</h1>
          <h2>by {props.instructor}</h2>
        </AboutSection>
        <Duration>
          <img alt="" src={clock} />
          <p> {props.duration}</p>
        </Duration>
        <Likes>
          <img alt="" src={fire} />
          <p>{props.likes}</p>
        </Likes>
        <ViewButton>
          <p>View Course</p>
        </ViewButton>
      </CoursePlan>
    );
}

function CoursesSection(props) {
    return (
      <MainContainer>
        <Container1>
          <h2>Courses</h2>
          {props.options.map((option, index) => (
            <Option key={index}>
              <h1>{option}</h1>
            </Option>
          ))}
        </Container1>
        <Container2>
          {props.allCourses.map((course, index) => (
            <Course
            key={index} 
            name={course.name}
            instructor={course.Instructor}
            duration={course.duration}
            likes={course.likes}
            Image={course.imgsrc}
            />
          ))}
        </Container2>
      </MainContainer>
    );
    
}


export default CoursesSection

