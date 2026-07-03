function ItemCard(props) {
    console.log(props);
    return(
        <div className="bg-green-200 rounded-2xl shadow-lg p-6 flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-gray-800">{props.title}</h3>
            <p className="text-gray-600">Location:{props.location}</p>
            <p>Status:{props.status}</p>
            <div>
                {props.status === "Lost" ? (
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                        🔴 Lost
                    </span>
                ) : (
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                        🟢 Found
                    </span>
                )}
            </div>

            <div className="flex gap-3 mt-2">

                {props.status === "Lost" && (
                    <button
                        onClick={() => props.onMarkFound(props.itemId)}
                        className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg transition"
                    >
                        Mark Found
                    </button>
                )}

                <button
                    onClick={() => props.onDelete(props.itemId)}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
                >
                    Delete
                </button>

            </div>
        </div>
    );
}
export default ItemCard;
