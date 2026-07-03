import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import ItemCard from "../components/ItemCard";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Browse(){
const [items, setItems] = useState([]);
const [search, setSearch] = useState("");
useEffect(() => {
  axios.get("http://localhost:3001/items")
  .then(response => {
    setItems(response.data);
  });
}, []); 

const filteredItems = items.filter((item) => 
item.title.toLowerCase().includes(search.toLowerCase()));

const markAsFound = async (id) => {
  try{
    const token = localStorage.getItem("token");
    await axios.put(`http://localhost:3001/items/${id}`, {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const response = await axios.get("http://localhost:3001/items");
    setItems(response.data);
  }catch(error){
    console.log(error);
    console.log(error.response?.data);
  }
};

const deleteItem = async (id) => {
    try {
        const token = localStorage.getItem("token");

        await axios.delete(`http://localhost:3001/items/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const response = await axios.get("http://localhost:3001/items");
        setItems(response.data);

    } catch (error) {
        console.log(error);
        console.log(error.response?.data);
    }
};

    return (
        <>
        <Navbar />
        <main className="min-h-screen flex justify-center bg-green-200 px-10 py-12">
          <section className="max-w-6xl mx-auto"> 
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Browse Lost Items
              </h1>

              <Searchbar
                search={search}
                setSearch={setSearch}/>
            </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          </div>
          
          </section>
        </main>
        </>
    )
}
export default Browse;
