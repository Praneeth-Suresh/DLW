import axios from 'axios';

function PostData( url ) {

    console.log("Post: ", url);

    const request = {
      "User": "Praneeth",
      "URL": url,
    }

    console.log("Creating POST to Django")

    axios.post(`http://127.0.0.1:8000/Advisor/input/`, { request } )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

export default PostData;