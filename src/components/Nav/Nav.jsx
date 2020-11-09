import React, {Component} from 'react';

import './Nav.css'


class Nav extends Component {


    render() {
        return (
            <nav>
                <div className='content-type'>
                    <p className="select-btn">Movies</p>
                    <p className="select-btn">TV shows</p>
                    <p className="select-btn">Documentaries</p>
                </div>
            </nav>
        );
    }
}


export default Nav;