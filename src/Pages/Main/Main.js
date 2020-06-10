import React from "react";
import Nav from './Nav';
import Feed from './Feed';
import Mainright from './Mainright';
import './Main.css';
import '../../Styles/reset.css'

export class Main extends React.Component{
    render(){
        return (
        <>
          <Nav />
          <div className="main">
            <Feed />
            <Mainright />
          </div>
        </>
        )
    }
}

export default Main;