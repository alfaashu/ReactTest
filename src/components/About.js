import User from "./User"
import UserClass from "./UserClass"
import React from "react"

class About extends React.Component{
    constructor(props) {
        super(props) 
    }

    componentDidMount(){
        console.log("Child compoenet did mount");
    }

    render() {
        
        return(
            <div>
            <h1>About Class Components</h1>
            <h2>Namaste React web series</h2>
            <UserClass name={"Akshay Saini (Class)"} location={"Dehradun Class"}/>
        </div>
        )
    }
}


export default About