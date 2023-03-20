let quest = document.getElementById("input");
let history = [];

let calculate = (number) => {
    // quest.value = quest.value+number;OR
    quest.value += number;
}

let result = () => {





    try {
        /* The code below caontain the show history function:
        for the normal code it should be .. quest.value = eval(quest.value)*/
        let input = quest.value;

        let results = eval(quest.value)
        quest.value = results;
        history.push(`${input} = ${results}   ~~LAWRENCEZOE~~`);
    }
    catch (err) {
        alert("~~Enter A Valid Result...Maka iga court ⚠❎..LP71~~")
    }
}

let clr = () => {
    quest.value = "";
}

let del = () => {
    //To Del something you use slice and in the slice it will hav two variable the starting point and the ending point fo eg: (0, -1) 0 for the starting point and -1 for the ending point.













































    quest.value = quest.value.slice(0,-1);

}

let shwHis= () =>{
    let histo = history.join('\n');
    alert(histo);
}

// Praticing Animation:
const calcBtn = d
































































ocument.getElementById('calc-btn');

calcBtn.addEventListener('click', () => {
  // Add the 'dancing' class to the button
  calcBtn.classList.add('dancing');
  
  // Remove the 'dancing' class after 1 second
  setTimeout(() => {
    calcBtn.classList.remove('dancing');
  }, 45000);
});

