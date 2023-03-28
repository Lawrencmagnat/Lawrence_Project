import React from "react";



function ModeToggler() {
    let darkModeOn = true;
    let darkMode = <h1>Your Dark Mode is On</h1>
    let lightMode = <h1>Let There be Light</h1>

function handleClicks (){
    darkMode = !darkMode;
    if(darkModeOn === true){
        alert("Dark Mode On");
    }else{
        alert("You are on Light Mode");
    }
}

    return (
        <>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={handleClicks}>Click!!</button>
        </>
    )
}

export default ModeToggler