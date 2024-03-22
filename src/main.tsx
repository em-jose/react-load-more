import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { LoadMoreApp } from "@/LoadMoreApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <LoadMoreApp />
        </BrowserRouter>
    </React.StrictMode>
);
