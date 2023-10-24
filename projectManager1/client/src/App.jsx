import "./App.css";
import Main from "./views/Main";
import ViewOneProduct from "./components/viewOne";
import Update from "./components/Update";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main/>} default />
                    <Route path="/product/:id" element={<ViewOneProduct/>}/> 
                    <Route path="/product/edit/:id" element={<Update/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;