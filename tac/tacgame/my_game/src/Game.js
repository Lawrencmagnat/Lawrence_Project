import React from 'react'
function Game(props) {

    // Learning Inline Styling:
    const InlinStyle = {
        background: "linear-gradient(blue, black, gray, white,orange,lime)",
        width: "cal(30%-10%)",
        marginLeft: "10px",
        fontSize: "20px",
        fontFamily: "sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
    return (
        <inlin
            style={InlinStyle}>
            <h2>Listen fallas, {props.name}, {props.color}, {props.players}</h2>
        </inlin>
    )

}


export default Game