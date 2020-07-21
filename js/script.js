    add = (a,b) => {
    console.log(a+b)
    return a+b
    }
    subtract = (a,b) => {
        console.log(a-b)
        return a-b
    }
    multiply = (a,b) => {
        console.log(a*b)
        return a*b
    }
    divide = (a,b) => {
        console.log(a/b)
        return a/b
    }



    operate = (fnctn,a,b) =>{
        switch(fnctn){
            case 'add':
                add(a,b);
                
                break
            case 'subtract': 
                subtract(a,b);
                break
            case 'divide':
                divide(a,b);
                break
            case 'multiply':
                multiply(a,b);
                break
            default:
                console.log("error check your input") ;
                break
        }

    } 