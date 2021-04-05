import React , {Component, useState} from 'react';
import {MenuItems} from "./MenuItem";
import './Navbar.css';
import logo from './template.png';
import {Link} from 'react-router-dom';
/*class Navbar extends Component{
    /*state = {clicked : false}
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    
    render(){
        return(
            <nav className="NavBarItems">
                <Link to="/" className="navbar-logo">
                <img className="navbar-logo" src={logo} alt="logo"/>
                </Link>
                <div className="menuicon" onClick={this.handleClick}>
                    <i className={this.state.clicked?"fas fa-bars": 'fas fa-times'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
                    {MenuItems.map((item,index)=>{
                            return(
                                <li key={index} >
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                    })}   
                </ul>

            </nav>
        )
    }
}*/

function Navbar (){
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click); 
    return(
        <nav className="NavBarItems">
            <Link to="/" className="navbar-logo">
            <img className="navbar-logo" src={logo} alt="logo"/>
            </Link>
            <div className="menuicon" onClick={handleClick}>
                <i className={click?"fas fa-times": 'fas fa-bars'}></i>
            </div>
            <ul className={click? 'nav-menu active': 'nav-menu'}>
                 <li className="nav-item">
                                <Link to="/" className="nav-links">
                                    Home
                                </Link>
                </li>
                <li className="nav-item">
                                <Link to="/work" className="nav-links">
                                    Work
                                </Link>
                </li>
                <li className="nav-item">
                                <Link to="/skills" className="nav-links">
                                    Skills
                                </Link>
                </li>
                
                
            </ul>

        </nav>
    );
}

export default Navbar;