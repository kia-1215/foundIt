import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import ItemCard from "../components/ItemCard";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function MyReport(){
const [items, setItems] = useState([]);
const [search, setSearch] = useState("");
useEffect(() => {
  axios.get("http://localhost:3001/my-items", {
    headers: {
        Authorization: 'Bearer ${localStorage.getItem("token")}', 
    },
  })
  .then(response => {
    setItems(response.data);
  });
}, []); 

const filteredItems = items.filter((item) => 
item.title.toLowerCase().includes(search.toLowerCase()));

const markAsFound = async (id) => {
  try{
    await axios.put(`http://localhost:3001/items/${id}`);

    const response = await axios.get("http://localhost:3001/my-items", {
        headers: {
            Authorization: 'Bearer ${localStorage.getItem("token")}',
        },
    });
    setItems(response.data);
  }catch(error){
    console.log(error);
  }
};

const deleteItem = async (id) => {
    try {
        await axios.delete(`http://localhost:3001/items/${id}`);

        const response = await axios.get("http://localhost:3001/items");
        setItems(response.data);

    } catch (error) {
        console.log(error);
    }
};

    return (
        <>
        <Navbar />
        <main>
          <h1>My Reports</h1>
          <Searchbar 
            search={search}
            setSearch={setSearch}
          />
          <h2>your reported items</h2>
          {filteredItems.map(item => (
            <ItemCard
            key={item._id}
            title={item.title}
            location={item.location}
            status={item.status}
            itemId={item._id}
            onMarkFound={markAsFound}
            onDelete={deleteItem}
            />
          ))}
        </main>
        </>
    )
}
export default MyReport;
