import React from "react";
import topImage from "../Assets/p1.webp";
class Cont extends React.Component{

    render(){
        return(
            <div id="cd1">
                    <div id="cd2">
                            <h1>Start your BK<span><sup>®</sup> </span>order.</h1>
                            <button id="b2"><i className="fa-solid fa-bag-shopping"></i> Order Pickup</button>
                            <button id="b3"><i className="fa-solid fa-motorcycle"></i> Order Delivery</button>
                    </div>
                    <div id="cd3">
                            <img src={topImage} alt="top" />
                    </div>
            </div>
        )
    }
}
export default Cont;