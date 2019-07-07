import * as types from '../constants/Courses.constant';
import * as Config from '../../common/Config'
import axios from 'axios'

const coursesId = Config.groupCoursesId;

export const getListCoursesAction = () => {
    return (dispatch) => {
        axios({
            method:'GET',
            url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${coursesId}`
        }).then((res)=>{
            console.log(res.data);    
            dispatch({
                type: types.GET_LIST_OF_COURSES,
                ListCourses: res.data
            })
        }).catch((err)=>{
            console.log(err);
        })
    }
}

// export const getListCourses = (ArrayCourses) => {
//     return {
//         type: types.GET_LIST_OF_COURSES,
//         //Danh sách lưu trên store
//         ArrayCourses
//     }
// }