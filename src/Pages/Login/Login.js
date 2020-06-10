import React from 'react';
import './Login.css';
import logo_text from '../../Images/logo_text.png';


export class Login extends React.Component{
    render(){
        return (
            <div className="Login">
                <div className="login-container">
                    <img src={logo_text}/>
                    <div className="login-box">
                        <input className="username" type="text" placeholder="전화번호, 사용자 이름 또는 이메일"/>
                        <input className="password" type="password" placeholder="비밀번호"/>
                        <button>로그인</button>
                        <a href="#">비밀번호를 잊으셨나요?</a>
                    </div> 
                </div>
            </div>
        )

    }
}

export default Login;