import React, {Component} from 'react';


class Aside extends Component {
    state = {}
    render() {
        return (
            <aside className="aside">
                <div className="genres">
                    <p className="select-btn">Action</p>
                    <p className="select-btn">Drama</p>
                    <p className="select-btn">Comedy</p>
                    <p className="select-btn">Triler</p>
                    <p className="select-btn">Animation</p>
                </div>


            </aside>

        );
    }
}

export default Aside;