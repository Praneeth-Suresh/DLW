import axios from 'axios';

function PostData() {
    const request = {
      "User": "Praneeth",
      "Text": "To build Reprose, we need to research our target marekt,"
    }

    console.log("Creating POST to Django")

    axios.post(`http://127.0.0.1:8000/Advisor/input/`, { request } )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

export default PostData;