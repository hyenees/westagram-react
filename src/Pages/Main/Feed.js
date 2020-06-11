import React from "react";

export class Feed extends React.Component{
    constructor(){
        super();
        this.state={
            comment : "",
            comments : [],
        }    
    }

    changeHandler = (e) => {
        this.setState({
            comment : e.target.value
        })
    }

    enter = (e) => {
        if(e.keyCode === 13){
            let comments = this.state.comments
            comments = comments.concat(this.state.comment)
            this.setState({
                comments : comments,
                comment : ""
            })
        }
    }
    
    clickHandler = () => {
        let comments = this.state.comments
        comments = comments.concat(this.state.comment)
        this.setState({
            comments : comments,
            comment : ""
        })
    }

   

    render(){
        const writing = this.state.comments.map((comment, i)=>{
            return (
                <li key = {i}>
                    <span className="id">canon_mj</span>
                    <p>{comment}</p>                 
                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                </li>
            )
        });
        return (
            <div className="Feed">
                    <div className="feeds">
                        <article>
                            <div className="user">
                                <img className="profile" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/10597488_355569771263224_300593915_a.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=PZWAY4_TYsYAX9Wv7zL&oh=84a6b8485fbc3ec4ab33b3d936c87a3a&oe=5EFE0307"/>
                                <span className="id">canon_mj</span>
                                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png" />
                            </div>
                            <div className="feedImg">
                                <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/101337090_2986174311475179_382611940267311495_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=8bTmCZj3wTUAX-u7oTW&oh=ced21b69b66ef7042d57bf7e0d0f3418&oe=5EFC3098" />
                            </div>
                            <div className="icons">
                                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png" />
                                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png" />
                                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png" /> 
                            </div>
                
                            <div className="text">
                                <p className="like">
                                    <img className="profile" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/68838428_1658603864276148_4116536178222563328_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=uTUDDL5XutkAX-_ht4-&oh=57ca17ba44ffaef5e3dd7b87c2bb2ec9&oe=5EFCB4EF" />
                                    <span className="bold">aineworld</span>님&nbsp;<span className="bold">여러 명</span>이 좋아합니다
                                </p>
                                <p><span className="id">canon_mj</span>위워크에서 진행한 베이킹 클래스...<span className="view">더 보기</span></p>
                                <ul className="comments">
                                    <li>
                                        <span className="id">neceosecius</span>
                                        <p>거봐 좋았잖아~~~~</p>                 
                                        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                                    </li>
                                    {writing}
                                </ul>
                                <p>42분 전</p>
                            </div>
                    
                            <div className="comment-box">
                                <input onChange={this.changeHandler} onKeyUp={this.enter} className="comment" type="text" placeholder="댓글 달기..."
                                value =  {this.state.comment} />
                                <button onClick={this.clickHandler} className="loadBtn">게시</button>
                            </div>
                        </article>
                    </div>
            </div>
            
        )
    }
}

export default Feed;