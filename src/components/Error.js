import { useRouteError } from "react-router"

const Error = () => {
    const err = useRouteError()
    console.log(err);
    
    return (
        <div> 
            <h1> Ooops! Something went wrong!!</h1>
            <h3>{err.data}</h3>
        </div>
    )
}

export default Error