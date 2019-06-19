import React, { Component, Fragment } from 'react'
import SectionBanner from './SectionBanner';
import SectionCourses from './SectionCourses';

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <SectionBanner/>
                <SectionCourses/>
            </Fragment>
        )
    }
}
