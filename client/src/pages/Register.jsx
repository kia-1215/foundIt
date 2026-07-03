import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";


function Register(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("button clicked");
        try{
            const response =await axios.post("http://localhost:3001/register", formData);
            console.log(response.data);
        }catch(error){
            console.log(error);
        }
    }
    return (
        <>
        <Navbar />
        <main>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <br />
                    <input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value,})}
                    />
                </div>
                <br />
                <div>
                    <label>Email</label>
                    <br />
                    <input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value,})}
                    />
                </div>
                <br />
                <div>
                    <label>Password</label>
                    <br />
                    <input 
                     type="password"
                     placeholder="enter your password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value,})}
                     />
                </div>
                <br />
                <div>
                    <label>Confirm Password</label>
                    <br />
                    <input
                    type="password"
                    placeholder="confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value,})}
                    />
                </div>
                <br />
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </main>
        </>
    )
}
export default Register;
