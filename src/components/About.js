import User from "./User"
import UserClass from "./UserClass"
import React from "react"
import UserContext from "../utils/UserContext"

class About extends React.Component{
    constructor(props) {
        super(props) 
    }

    componentDidMount(){
        // console.log("Child compoenet did mount");
    }

    render() {
        
        return(
            <div>
            <h1>About Class Components</h1>
            <div>
                Logged-in User
                <UserContext.Consumer>
                    {({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            <h2>Namaste React web series</h2>
            <UserClass name={"Akshay Saini (Class)"} location={"Dehradun Class"}/>
        </div>
        )
    }
}


export default About