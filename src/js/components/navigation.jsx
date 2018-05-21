import React from 'react';
import {NavLink as Link} from 'react-router-dom';

class Navigation extends React.Component{
    render(){
        return <nav className={'page-navigation'}>
            <ul>
                <li><Link exact to='/' activeClassName={'nav-active'}>Home</Link></li>
                <li><Link to='/random' activeClassName={'nav-active'}>Random</Link></li>
                <li><Link to='/towatch' activeClassName={'nav-active'}>To&nbsp;Watch</Link></li>
                <li><Link to='/watched' activeClassName={'nav-active'}>Watched</Link></li>
                <li><Link to='/community' activeClassName={'nav-active'}>Community</Link></li>
            </ul>
        </nav>
    }
}

export {Navigation}