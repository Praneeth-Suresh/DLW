import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetData(input_data) {
    const url = 'http://127.0.0.1:8000/Advisor/';

    const [data, setData] = useState('');

    useEffect(() => {
    axios.get(url,{
        params: {
            URL: input_data
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

    return { data }
};

export default GetData;