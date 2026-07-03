import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home(){
    
    return(
        <>
        <Navbar />
        <main className="h-[calc(100vh-80px)] flex items-center justify-center bg-green-200">
            <section className="max-w-5xl mx-auto text-center py-12 px-6 flex flex-col items-center gap-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">
                    NEVER lose anything on campus
                </h1>
                <h2 className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                    Report lost items, browse found belongings
                </h2>
                <div className="flex justify-center gap-12">
                    <Link 
                    to="/report"
                    className="bg-emerald-700 hover:bg-emerald-800 text-white text-2xl font-bold px-16 py-6 rounded-l shadow-xl transition">
                        Report a lost item
                    </Link>
                    <Link 
                    to="/browse"
                    className="bg-emerald-700 hover:bg-emerald-800 text-white text-2xl font-bold px-16 py-6 rounded-l shadow-xl transition">
                        Browse items
                    </Link>
                </div>
            </section>
        </main>
        </>
    );

}
export default Home;