import React, {Component} from "react"

class GrandChild extends Component {
    render() {
        console.log("[ ]   [ ]   [ ]   [👶🏻] rendered")
        return (
            <div>
                <p style={{background: "Beige"}}>I'm a GrandChild Component</p>
            </div>
        )
    }
}

export default GrandChild