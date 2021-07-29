// 1. Step 1: Soo jiido react

import React from "react"

// Step 2: Function-ka samee

function Hello(props) {

    console.log(props)
    // JSX waa in ay hal 'PARENT ELEMENT' leedahay, hadii kale ma shaqeynayso

    return (
        <div>
            <h2>HELLO {props.names[0]}</h2>
            <h2>HELLO {props.names[1]}</h2>
            <h2>HELLO {props.names[2]}</h2>
        </div>
    )
}

// step 3: Waa inaa dirto (Export) component-ga

export default Hello;