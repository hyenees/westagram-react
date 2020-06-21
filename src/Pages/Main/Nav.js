import React from "react";
import logo_text from "../../Images/logo_text.png";
import { IoIosSearch } from "react-icons/io";

export class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      click: false,
      searchlist: [
        "shine",
        "wecode",
        "javascript",
        "python",
        "object",
        "apple",
        "react",
        "django",
      ],
      word: "",
    };
  }

  changeHandler = (e) => {
    this.setState({
      word: e.target.value,
    });
  };

  clickHandler = (e) => {
    this.setState({
      click: true,
    });
  };

  render() {
    const matchedWords = this.state.searchlist.filter((list) => {
      if (this.state.word.length === 0) {
        return "";
      }
      return list.includes(this.state.word);
    });

    return (
      <div className="Nav">
        <nav>
          <div className="navi">
            <div className="nav-logo">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"
                alt="logo"
              />
              <img src={logo_text} alt="" />
            </div>

            <div className="nav-search" onClick={this.clickHandler}>
              <div
                className="i"
                style={{ left: this.state.click ? "10px" : "" }}
              >
                <IoIosSearch size="13" />
              </div>

              <input
                type="text"
                placeholder="검색"
                className={this.state.click ? "change" : ""}
                onChange={this.changeHandler}
              />
            </div>

            <div className="nav-right">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                alt="explore"
              />
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt="heart"
              />
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                alt="profile"
              />
            </div>
          </div>
        </nav>

        <div className="searchBox">
          <ul className="searchList">
            {matchedWords.map((word, i) => {
              return (
                <li key={i}>
                  <a href="#!">{word}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
