import React, {Component} from "react"
import GrandChild from "./GrandChild"

class Child extends Component {
    render() {
        console.log("[ ]   [ ]   [🧒🏻]   [ ] rendered")
        return (
            <div>
                <p style={{background: 'aquamarine'}}>I'm a Child Component</p>
                <GrandChild />
                <GrandChild />
            </div>
        )
    }
}

export default Child