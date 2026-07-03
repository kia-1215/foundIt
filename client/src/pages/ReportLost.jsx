import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";

function ReportLost(){
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category:"Electronics",
        location: "",
        dateLost: "",
    });
    const handleSubmit = async (e) => {
            e.preventDefault();
            console.log("button clicked");
            try{
                const response =await axios.post("http://localhost:3001/items", formData,
                    {
                        headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,},}
                );
                console.log(response.data);
            }catch(error){
                console.log(error);
            }
        }
    return (
        <>
        <Navbar />
        <main>
            <h1>Report Lost Item</h1>
            <form onSubmit ={handleSubmit}>
                <div>
                    <label>Item Name</label>
                    <br />
                    <input
                    type="text"
                    placeholder="Enter item name"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value,})}
                    />
                </div>
                <br />
                <div>
                    <label>Description</label>
                    <br />
                    <textarea
                    placeholder="Describe the item"
                    rows="4"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value,})}
                    ></textarea>
                </div>
                <br />
                <div>
                    <label>Category</label>
                    <br />
                    <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value,})}
                    >
                        <option>Electronics</option>
                        <option>Bags</option>
                        <option>Wallet</option>
                        <option>Keys</option>
                        <option>ID card</option>
                        <option>Clothing</option>
                        <option>Other</option>
                    </select>
                </div>
                <br />
                <div>
                    <label>Location</label>
                    <br />
                    <input
                    type="text"
                    placeholder="Enter location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value,})}
                    />
                </div>
                <br />
                <div>
                    <label>Date Lost</label>
                    <br />
                    <input 
                    type="date"
                    value={formData.dateLost}
                    onChange={(e) => setFormData({ ...formData, dateLost: e.target.value,})}
                    />
                </div>
                <br />
                <button type="submit">
                    Submit Report
                </button>
            </form>
        </main>
        </>
    )
}
export default ReportLost;
