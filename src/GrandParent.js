import React, {Component} from "react"
import Parent from "./Parent"

class GrandParent extends Component {
    render() {
        console.log("[👴🏼]   [ ]   [ ]   [ ] rendered")
        return (
            <div>
                <p style={{background: 'lightblue'}}>I'm a GrandParent Component</p>
                <Parent />
                <Parent />
            </div>
        )
    }
}

export default GrandParent