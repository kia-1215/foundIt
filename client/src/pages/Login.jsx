import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";

function Login(){
    const[formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("button clicked");
        try{
            const response = await axios.post("http://localhost:3001/login", formData);
            console.log(response.data);
            localStorage.setItem(
        "token",
        response.data.token
    );
        }catch(error){
            console.log(error);

            if(error.response){
                alert(error.response.data.message);
            }
        }
    }
    return (
        <>
        <Navbar />
        <main>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
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
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value,})}
                        />
                        </div>
                        <br />
                        <div>
                            <button type="submit">Login</button>
                </div>
            </form>
        </main>
        </>
    )
}
export default Login;