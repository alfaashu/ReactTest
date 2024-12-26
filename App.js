import React from "react"
import ReactDOM, { createRoot } from "react-dom/client"

const elem = <span> Element</span>

const title = (
    <h1 className="head" tabIndex={5}> {elem} Namaste React using JSX🚀</h1>)


const HeadingComponent1 = () => (
    <div id="container">
        <h1 className="heading"> {title} Namaste React functional component</h1>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent1/>)