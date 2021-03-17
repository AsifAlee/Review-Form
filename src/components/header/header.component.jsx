import React from 'react';
import './header.style.css';
import {NavLink} from 'react-router-dom';
class Header extends React.Component {
    
    render() {

        return (
            <div className="header">
                <a href="#default" className="logo">CompanyLogo</a>
                <div className="header-right">
                    <a><NavLink exact to="/">Form</NavLink></a>
                    <a><NavLink to="/candidates/">Candidates List</NavLink></a>
                   

                </div>
            </div>
        )

    }
}
export default Header;