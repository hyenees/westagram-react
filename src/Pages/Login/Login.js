import React from "react";
import "./Login.scss";
import logo_text from "../../Images/logo_text.png";
import { withRouter } from "react-router-dom";

export class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      password: "",
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  clickHandler = (e) => {
    console.log(this.state.id, this.state.password);
    // this.props.history.push('/main');
    fetch("http://10.58.5.220:8000/user/login", {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => localStorage.setItem("access_token", res.token));
  };

  render() {
    const btnStyle = {
      originalColor: "rgba(0,149,246,.3)",
      activeColor: "rgb(0, 149, 246)",
    };

    return (
      <div className="Login">
        <div className="login-container">
          <img src={logo_text} alt="" />
          <div className="login-box">
            <input
              onChange={this.changeHandler}
              name="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              onChange={this.changeHandler}
              name="password"
              type="password"
              placeholder="비밀번호"
            />

            <button
              onClick={this.clickHandler}
              style={{
                backgroundColor:
                  this.state.id.includes("@") && this.state.password.length > 4
                    ? btnStyle.activeColor
                    : btnStyle.originalColor,
              }}
            >
              로그인
            </button>

            <a href="#!">비밀번호를 잊으셨나요?</a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
