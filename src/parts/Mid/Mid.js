import React,{useContext} from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import CoursesSection from "../../components/CoursesSection/CoursesSection";
import MyCourses from "../../components/MyCourses/MyCourses";
import {CourseContext} from '../../contexts/CourseContext';

const Container = styled.div`
  flex: 1 1 40%; /*  No stretching: */
  // border-radius: 1px solid red;
  margin:0 20px;
  padding:30px 30px;
   @media (max-width: 768px) {
     display:flex;
     flex-direction:column;
     height:700px;
     margin-top:-400px;
     padding-bottom:400px;
  }
`;
const Inner = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    display: grid;
    place-items:center;
    width:100%;
  }
`;


function Mid() {
  const {currentCourses,allCourses,optionsAll} = useContext(CourseContext);
  return (

      <Container>
        <Inner>
          <Header />
          <MyCourses currentCourse={currentCourses}/>
          <CoursesSection allCourses={allCourses} options={optionsAll} />
        </Inner>
      </Container>
  );
}

export default Mid;
