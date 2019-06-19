import React, { Component } from 'react'
import CourseItem from '../components/CourseItem'

export default class SectionCourses extends Component {
    render() {
        return (
            <div id="course">
                <h3>Courese</h3>
                <div>
                    <CourseItem></CourseItem>
                    <CourseItem></CourseItem>
                    <CourseItem></CourseItem>
                </div>
            </div>
        )
    }
}
