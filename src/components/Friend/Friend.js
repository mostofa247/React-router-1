import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {name,email,website,id} = props.friend;
    const friendStyle = {
        border: '1px solid red',
        margin:'20px',
        padding: '20px',
        borderRadius:'20px',
        backgroundColor:'gray',
        textAlign:'center',
        color:'white',
    }
    return(
        <div style={friendStyle}>
            <h1>Name:{name}</h1>
            <p>Email:{email}</p>
            <p>WebSite:{website}</p>
            <Link to={`/detail/${id}`}>Detail</Link>
        </div>
    );
};

export default Friend;