import React from "react";
import Nav from './Nav';
import Feed from './Feed';
import Mainright from './Mainright';
import './Main.scss';


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