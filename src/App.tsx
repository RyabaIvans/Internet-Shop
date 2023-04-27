import React from 'react';
import './scss/components/app.scss';
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import {Route, Routes} from "react-router-dom";
import Cart from "./pages/Cart";


function App() {


    return (

        <div>
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/cart" element={<Cart/>}></Route>
                        <Route path="*" element={<NotFound/>}></Route>
                    </Routes>
                    {/*<Home/>*/}
                    {/*<NotFound/>*/}
                </div>
            </div>
        </div>

    );
}

export default App;
