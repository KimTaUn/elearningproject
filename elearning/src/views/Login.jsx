import React, { Component } from 'react'
import { loginAction } from '../redux/actions/Users.action'
import { connect } from 'react-redux';

export class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            user:'',
            password:''
        }
    }

    login = (event) =>{
        event.preventDefault();
        console.log(this.state);
        
        // Call login method Redux
        this.props.login(this.state)
    }

    updateInfoForm = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    renderLogin = ()=>{
        return (
            <div className="container">
                <div className="w-50 mx-auto">
                    <form onSubmit={this.login}>
                        <h3>Đăng nhập</h3>
                        <div className="form-group" >
                            <span>Tài khoản</span>
                            <input className="form-control" name="user" onChange={this.updateInfoForm} required />
                        </div>
                        <div className="form-group" >
                            <span>Mật khẩu</span>
                            <input type="password" className="form-control" name="password" onChange={this.updateInfoForm} required />
                        </div>
                        <div className="form-group" >
                            <button type="submit" className="btn btn-success">Đăng nhập</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderLogin()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.UsersStoreReducer.isLogin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (userInfo) => {
            console.log(userInfo);            
            dispatch(loginAction(userInfo));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)