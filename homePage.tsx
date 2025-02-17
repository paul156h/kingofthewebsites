import React from "react";

function MyButton({title}: {title: string}) {
    return (
        <button>{title}</button>
    )
}

export default function homePage() {
    return (
        <div>
            <h1>Button needs pressing</h1>
            <MyButton title="Button" />
        </div>
    )
}