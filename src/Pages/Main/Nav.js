import React from "react";
import logo_text from '../../Images/logo_text.png';
import { IoIosSearch } from "react-icons/io";

export class Nav extends React.Component{
    render(){
        return (
            <div className="Nav">
                <nav>
                    <div className="navi">
                    <div className="logo">
                        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png" alt="logo"/>
                        <img src={logo_text} alt=""/>
                    </div>
                    
                    <div className="search">
                        <div className="i">
                            <IoIosSearch size="13" />
                        </div>
            
                        <input type="text" placeholder="검색" />
                    </div>
                                            
                    <div className="right-nav">
                        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt="explore"/>
                        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="heart"/>
                        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" alt="profile"/>
                    </div>
                    </div>      
                </nav>
          
                <div className="searchBox">
                    <ul className="searchList">
                        <p>shine</p>
                        <p>wecode</p>
                        <p>javascript</p>
                        <p>python</p>
                        <p>object</p>
                        <p>apple</p>
                        <p>react</p>
                        <p>django</p>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Nav;