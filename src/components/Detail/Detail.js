import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router';

const Detail = () => {
    const {friendId}=useParams();
    const [detail, setDetail ]= useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res=>res.json())
        .then(data =>setDetail(data));
    }, [])
    const detailStyle = {
        border: '1px solid gray',
        margin:'20px',
        padding: '20px',
        borderRadius:'20px',
        backgroundColor:'tomato',
        textAlign:'center',
    }
    return (
        <div style={detailStyle}>
            <h1>Detail</h1>
            <p>{detail.name}</p>
            <p>{detail.email}</p>
            <p>{detail.website}</p>
        </div>
    );
};

export default Detail;