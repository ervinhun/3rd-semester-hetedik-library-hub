import {Outlet, useNavigate} from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();


    return (
            <div className="flex flex-wrap bg-blue-400 w-4/5 m-auto padding-4 rounded-lg shadow-lg">
                <div className="flex bg-blue-500 justify-between items-center p-4 w-full rounded-lg">
                    <h1 className="font-bold text-4xl">📖 LibraryHub</h1>
                    <div className="nav-links">
                        <button className="btn btn-ghost" onClick={() => navigate("activities")}>Activities</button>
                        <button className="btn btn-ghost" onClick={() => navigate("authors")}>Authors</button>
                        <button className="btn btn-ghost" onClick={() => navigate("books")}>Books</button>
                    </div>
                </div>

                <div className="flex flex-wrap w-5/6 bg-blue-800 m-auto rounded-lg mt-8 shadow-lg p-4 content-center">
                    {<Outlet/>}
                </div>
            </div>
    )
}