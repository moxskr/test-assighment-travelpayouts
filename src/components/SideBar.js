import React from 'react';

const SideBar = () => <div className="sidebar">
    <div className="logo d-flex justify-content-center w-100">
        <img src={'./images/Glyph.png'} alt=""/>
    </div>
    <div className="navbar">
        <a href="#">
            <div className="navbar--circle"></div>
        </a>
        <a href="#">
            <div className="navbar--circle"></div>
        </a>
        <a href="#">
            <div className="navbar--circle"></div>
        </a>
        <a href="#">
            <div className="navbar--circle"></div>
        </a>
        <a href="#">
            <div className="navbar--circle"></div>
        </a>
        <a href="#">
            <div className="navbar--circle"></div>
        </a>
        <a href="#">
            <div className="navbar--circle active"></div>
        </a>
        <a href="#">
            <div className="navbar--circle"></div>
        </a>
    </div>
</div>

export default SideBar;
