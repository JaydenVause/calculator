
const userButtons = document.querySelectorAll(".num");
const userOutput = document.querySelector('#outputOp')
const userInput = document.querySelector('#outputIn');
const commandBtn = document.querySelector('#commandBtn');
const additionBtn = document.querySelector('#addBtn');
const subtractBtn = document.querySelector('#subBtn');
const multiplyBtn = document.querySelector('#mltpBtn');
const divideBtn = document.querySelector('#divBtn');

//storing input strings
let a = "";
let b = "";
let input = "";

//controling strings
let atoggleb = "a"; 
let fnctn = "";

add = (a, b) => {
    
    userInput.textContent = a+b;
    a = "";
    b = "";
    return 
}
subtract = (a, b) => {
    
    userInput.textContent = a-b;
    a = "";
    b = "";
    return a - b
}
multiply = (a, b) => {
    
    userInput.textContent = a*b;
    a = "";
    b = "";
    return a * b
}
divide = (a, b) => {
    
    userInput.textContent = a/b;
    a = "";
    b = "";
    return a / b
}



operate = (fnctn, a, b) => {
    a = Number(a);
    b =  Number(b);
    
    switch (fnctn) {
        case 'add':
            add(a, b);

            break
        case 'subtract':
            subtract(a, b);
            break
        case 'divide':
            divide(a, b);
            break
        case 'multiply':
            multiply(a, b);
            break
        default:
            console.log("error check your input");
            break
    }

}

stringStore = (a,b) => {
    
}



//user input into strings
logging = (number) => {
    if ( userInput.textContent.length < 12) {
        input = input.concat(number);
        
        userInput.textContent = input;
    } else {
       
    }
}


//equals button


 userCommand = () => {    
    if (atoggleb == 'a'){
        a = userInput.textContent;
        input = "";
        userInput.textContent = "";
        atoggleb = "b";
        console.log("a or b : "+atoggleb);
        
    return   
    }else if(atoggleb == 'b'){
        b = userInput.textContent;
       
        input = "";
        operate(fnctn,a,b);
        atoggleb = "a";
        return
    }
}

//event listener for numbers
userButtons.forEach(button => {
    button.addEventListener('click', () => {
    logging(button.textContent);
    });
});
    
//event listener for ( button operations )  input
commandBtn.addEventListener('click', () => {
    userCommand();
    operate(fnctn, a, b);
    
    
});

subtractBtn.addEventListener('click', () => {
    fnctn = 'subtract';
    userCommand();
    
});
multiplyBtn.addEventListener('click', () => { 
    fnctn = 'multiply';
    userCommand();
    
});
divideBtn.addEventListener('click', () => { 
    fnctn = 'divide';
    userCommand();
    
});

additionBtn.addEventListener('click', () => {
    fnctn = 'add';
    console.log(fnctn)
    userCommand();
    
    
});