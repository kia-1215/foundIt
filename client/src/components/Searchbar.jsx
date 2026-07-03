
function Searchbar({search, setSearch}){
    return(
        <div>
            <input
            type="text"
            placeholder="search for lost item"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <button>🔍</button>
            <p>searching for: {search}</p>
        </div>
    );
}
export default Searchbar;