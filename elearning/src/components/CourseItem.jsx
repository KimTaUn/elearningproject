import React, { Component } from "react";

export default class CourseItem extends Component {
  render() {
    let { course } = this.props;

    return (
        <div className="card">
          <div className="card_img">
            {/* <img src={course.hinhAnh} alt=""/> */}
            <img
              src="http://dummyimage.com/320x180/f4f4f4/cbcbcb.png"
              alt="course"
            />
          </div>
          <div className="card_detail">
            <strong className="detail_name">{course.tenKhoaHoc}</strong>
            <div className="detail_desc">{course.moTa}</div>
            <div className="detail_name">
              Giảng Viên: {course.nguoiTao.hoTen}
            </div>
            <div className="detail_rating">
              <span className="star-rating--static a11 text-medium-grey">
                <span className="star-rating_star" />
              </span>
              <span>(648)</span>
            </div>
            <div className="detail_price">
              <span className="price">$19</span>
              <span className="price--old">$199</span>
            </div>
            <div className="detail_view">Lượt xem: {course.luotXem}</div>
            <div className="detail_student">
              Học Viên: {course.soLuongHocVien}
            </div>
          </div>
        </div>
    );
  }
}
