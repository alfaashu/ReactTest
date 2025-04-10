import React, {lazy, Suspense, useEffect, useState} from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import Shimmer from "./components/Shimmer"
import UserContext from "./utils/UserContext"
import User from "./components/User"


const Grocery = lazy(()=>import("./components/Grocery"))
const About = lazy(()=>import("./components/About"))


const AppLayout = () => {

    const [userName, setUserName] = useState()

    // Authentication

    useEffect(()=> {
        const data = {
            name: "Ashish Sinsinwar"
        }
        setUserName(data.name)
    }, [])

    return (
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div className="app">
            <Header/> 
            <Outlet/>
        </div>
        </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <Suspense><About/></Suspense>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>,
            }
        ],
        errorElement: <Error/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)


