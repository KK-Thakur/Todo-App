import React from 'react'
import todoIcon from "../assets/todoIcon.png"
const Header = () => {
    return (
        <div>
            <div id="header">
                <img src={todoIcon} alt="logo" className="logo" />
                <h1 id="app-title">TODO LIST</h1>
            </div>
        </div >
    )
}

export default Header