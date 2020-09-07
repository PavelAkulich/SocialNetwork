import React from 'react';
import c from './../Navbar.module.css';

const Friends = (props) => {
    return (
        <div className={c.friendsBar}>
            <div className={c.friendItem}>
                <img src={props.image}></img>
                <span>{props.name}</span>
            </div>
            <div className={c.friendItem}>
                <img src={props.image}></img>
                <span>{props.name}</span>
            </div>
            <div className={c.friendItem}>
                <img src={props.image}></img>
                <span>{props.name}</span>
            </div>
        </div>
    );
}

export default Friends;