import React, { Component, createContext } from 'react'
import {CurrentCourse,Allcourses,Options} from "../data";

export const CourseContext = createContext();

class CourseContextProvider extends Component {
    state = { 
        currentCourses: CurrentCourse,
        allCourses : Allcourses,
        optionsAll:Options
     }
    render() { 
        return (
            <CourseContext.Provider
            value ={{...this.state}}
            >
                {this.props.children}
            </CourseContext.Provider>
          );
    }
}
 
export default CourseContextProvider;
