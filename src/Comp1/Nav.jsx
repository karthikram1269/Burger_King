import React from "react";
import "../style.css"
class Nav extends React.Component{
    render(){
        return (
            <div id="mn">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                <i className="fa-solid fa-bars bar"></i>
                <p id="bt">BURGER KING</p>
                <i className="fa-solid fa-user us"></i>
                <button id="mbu"><i className="fa-solid fa-bag-shopping"></i> View Cart</button>
            
            </div>
        )
    }
}
export default Nav; 