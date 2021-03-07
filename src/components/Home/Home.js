import React, { useState, useEffect } from 'react';
import Friend from '../Friend/Friend';


const Home = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])
    return (
        <div>
            {
                friends.map(friends => <Friend friend={friends}></Friend>)
            }
        </div>
    );
};

export default Home;