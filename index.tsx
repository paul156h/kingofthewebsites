import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import homePage from "./homePage";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    homePage()
)