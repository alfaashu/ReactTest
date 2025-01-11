import React from "react"
import ReactDOM, { createRoot } from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, RouterProvider } from "react-router"
import About from "./components/About"

const elem = <span> Element</span>



const AppLayout = () => {
    return (
        <div className="app">
            <Header/> 
            <Body/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
    },
    {
        path: "/About",
        element: <About/>,
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)


