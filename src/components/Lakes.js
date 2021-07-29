import React from 'react'

function Lakes(props) {

   
    return (
        <div>
            <h2>Largest Lakes</h2>
            {props.magacaPropka.map(function(item) {
                return <p>{item}</p>
            })}
        </div>
    )
}

export default Lakes