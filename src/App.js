import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./page/home";
import About from "./page/about";
import ResponsiveAppBar from "./components/Appbar";
import TodoList from "./page/todo_list";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <ResponsiveAppBar />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/todolist" element={<TodoList/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App

function Users() {
    return <h2>Users</h2>;
}
