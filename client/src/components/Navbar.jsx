import { Link } from "react-router-dom";


function Navbar(){
    const token = localStorage.getItem("token");
    return(
        <nav className="bg-emerald-600 text-white shadow-md">
            <div className="flex items-center gap-12 max-w-6xl mx-auto justify-between px-6 py-4">
                <Link 
                to="/"
                className="text-2xl font-bold">
                    🔍FoundIt   
                </Link>
                <div className="flex gap-24 text-lg">
                    <Link to="/">Home</Link>
                    <Link to="/browse">Browse</Link>
                    {token &&(
                        <>
                        <Link to="/report">Report Lost</Link>
                        <Link to="/my-reports">My Reports</Link>
                        </>
                    )}
                    {!token &&(
                        <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
export default Navbar;


/*flex gap-6 text-lg for second div
max-w-6xl mx-auto flex justify-between items-center px-6 py-4 first div
*/