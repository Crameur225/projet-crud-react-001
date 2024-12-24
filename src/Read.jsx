import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import { Link } from "react-router-dom";

export function Read(){
  const [data, setData] = useState([]);
  const {id} = useParams();
    useEffect(() =>{
        axios.get('https://datajson-wuf7.onrender.com/users/' + id)
        .then(res =>setData(res.data))
        .catch(err => console.log(err))
       }, [])

    return(
        <div className="d-flex w-100 vh-100 justify-content-center items-center bg-light">
            <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
             <h3>Detail of User</h3>   
                <div className="mb-2">
                    <div><strong>Name:</strong> {data.name}</div>
                </div>
                <div className="mb-2">
                <div><strong>Email:</strong> {data.email}</div>
                </div>
                <div className="mb-2">
                <div><strong>Phone:</strong> {data.phone}</div>
                </div>
                <Link to={`/update/${id}`} className="btn btn-success">Edit</Link>
                <Link to="/" className="btn btn-primary ms-3">Back</Link>
            </div>
        </div>
    );
}