import React, { Component } from "react";
import { connect } from "react-redux";
import CourseItem from "../components/CourseItem";
import { getListCoursesAction } from "../redux/actions/Courses.action";

export class SectionCourses extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    // * CÁCH 1:
    // this.state = { // quản lý tất cả dữ liệu thay đổi trên giao diện
    //     mangKhoaHoc : []
    // }
  }

  componentDidMount() {
    this.props.getListCourses();
  }

  renderCourses = () => {
    return this.props.ListCourses.map((item, index) => {
      console.log(item);
      return <CourseItem course={item} key={index} />;
    });
  }

  render() {
    return (
      <div id="course">
        <h3>Courses</h3>
        {/* <div>{this.ListCourses.map}</div> */}
        <div className="card-wrapper">
            {this.renderCourses()}
            {this.renderCourses()}
            {this.renderCourses()}
            {this.renderCourses()}
            {this.renderCourses()}
            {this.renderCourses()}
            {this.renderCourses()}
            {this.renderCourses()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ListCourses: state.CoursesStoreReducer.ListCourses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getListCourses: () => {
      dispatch(getListCoursesAction());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SectionCourses);
