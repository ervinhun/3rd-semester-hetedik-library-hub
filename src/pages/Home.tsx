import {Outlet, useNavigate} from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();


    return (
        <>
            <div className="home-background">
                <div className="header">
                    <h1 className="header-text">📖 LibraryHub</h1>
                    <div className="nav-links">
                        <button onClick={() => navigate("activities")}>Activities</button>
                        <button onClick={() => navigate("authors")}>Authors</button>
                        <button onClick={() => navigate("books")}>Books</button>
                    </div>
                </div>

                <div className="main-section">
                    {<Outlet/>}
                </div>
            </div>
        </>
    )
}