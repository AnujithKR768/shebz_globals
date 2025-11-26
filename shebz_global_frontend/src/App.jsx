import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./pages/home/Home.jsx";
const App = () => {
    return (

        <div className="app">
            <Navbar />
            <Home />
        </div>
    )
}
export default App;