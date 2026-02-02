import React from 'react'
import './Header.css' 
import headerImg from "../../assets/header_img.png";

const Header = () => {
    return (
        <div className='header' style={{ backgroundImage: `url(${headerImg})` }} >
            <div className="header-contents">
                <h2> Order your favourite food here</h2>
                <p>Choose form a diverse menu featuring a delectable array fo dishes crafted with the finest ingredients and culinary expertise.Our mission is to satisy your cravings and elevate your dining experince ,one delicious meal at a time. </p>
                <button onClick={() => {
                    const element = document.getElementById('explore-menu');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}>view menu</button>
            </div>
        </div>
    )
}

export default Header