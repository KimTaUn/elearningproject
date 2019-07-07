import * as types from '../constants/Users.constant'
import * as Config from '../../common/Config'
import axios from 'axios';

export const loginAction = (loginInfo) => {
    return (dispatch) =>{
        console.log(loginInfo);
        
        axios({
            method:'POST',
            url:'http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
            data:loginInfo, //thongTinDangNhap: lấy từ state component
        }).then((res) => {
            localStorage.setItem(Config.userLogin, JSON.stringify(res.data));
            localStorage.setItem(Config.token, res.data.accessToken);
            dispatch({
                type: types.LOGIN
            })
        }).catch((err)=>{
            console.log(err);
            
        });
    }
}
// export const dangNhapAction = (thongTinDangNhap) =>{
//     return (dispatch) => {
//         axios({
//             method:'POST',
//             url:'http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
//             data:thongTinDangNhap, //thongTinDangNhap: lấy từ state component
//         }).then((result) => {
//             localStorage.setItem(CauHinh.userLogin,JSON.stringify(result.data));
//             localStorage.setItem(CauHinh.token,result.data.accessToken);
//             dispatch({
//                 type:types.DANG_NHAP
//             })

//         }).catch((error)=>{
//             swal.fire("Thông báo",error.response.data,'error');
//         });

//     }
// }
