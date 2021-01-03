import React from 'react';
import './navigation.styles.css';
import {navOption} from './navigation-data';
import {Link} from 'react-router-dom';

class Navigation extends React.Component{
  state={
    clicked:false
  }

  handleClick=()=>{
    this.setState({clicked:!this.state.clicked})
  }
    render(){
        return (
           <div className='NavbarItems'>
             <div className='navbar-logo'>
               <h1 className='logo'>Abhishek</h1>
             </div>
             <div className='menu-icon' onClick={this.handleClick}>
             <i className={`${this.state.clicked ? 'fas fa-times':''} fas fa-bars`}></i>
             </div>
             <div className={`${this.state.clicked ? 'nav-menu active ': 'nav-menu'}`}>
                  {
                      navOption.map(({id,title,cName,link})=>(
                          
                              <Link to={`${link}`} className={`${cName}`} key={id}>{title}</Link>
                      ))
                  }
             </div>
           </div>
        )
    }
}
export default Navigation;