import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetData() {
    const url = 'http://127.0.0.1:8000/Advisor/';

    const [data, setData] = useState('');

    useEffect(() => {
    axios.get(url,{
        params: {
            User: "Praneeth"
        }
    }) // Django
        .then(response => {
            setData(response.data.message);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

    console.log("Here is what I got : " + data);

    return (
        <p>Btw look what I fetched: {data}</p>
    )
}

export default GetData;