import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios"
export function Update(){
//   const [data, setData] = useState([]);
  const {id} = useParams();
  const navigate = useNavigate()
  const [values, setValues] = useState({
    name: "",
    email:"",
    phone: ""
     })

    useEffect(() =>{
        axios.get('https://datajson-wuf7.onrender.com/users/' + id)
        .then(res =>setValues(res.data))
        .catch(err => console.log(err))
       }, [])

     const handleUpdate = (event) =>{
      event.preventDefault();
      axios.put('https://datajson-wuf7.onrender.com/users/' + id, values)
      .then(res =>{
        setValues(res.data)
        navigate("/")
    })
      .catch(err => console.log(err))
     }
     
    return(
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
    <div className="w-50 border bg-white shadow px-5 pb-5 rounded">
      <h1>Update User</h1>  
       <form onSubmit={handleUpdate}>
         <div className="mb-2">
                <label htmlFor="name">Name:</label>
                <input 
                type="text" 
                name="name" className="form-control" placeholder="Enter Name"
                value={values.name} onChange={e =>setValues({...values, name: e.target.value})}/>
         </div>
         <div className="mb-2">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" className="form-control" placeholder="Enter Email.."
                value={values.email} onChange={e =>setValues({...values, email: e.target.value})}/>
         </div>
         <div className="mb-2">
                <label htmlFor="phone">Phone:</label>
                <input type="text" name="phone" className="form-control" placeholder="Enter Phone"
                value={values.phone}
                onChange={e =>setValues({...values, phone: e.target.value})}/>
         </div>
         <button className="btn btn-success">Update</button>
         <Link to="/" className="btn btn-primary ms-3">Back</Link>
       </form>
    </div>
   </div>
    );
}