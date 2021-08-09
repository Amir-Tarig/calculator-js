function calculator () {

    const add = (x , y) => {  return  x   +   y } 
    const subtract = (x , y) => {  return x   -   y }
    const multiply = (x , y) => {  return x   *  y  } 
    const divide = (x , y) => {  return x   /  y}  

    function operate(x , y) {
        console.log(divide(x,y))
        console.log(subtract(x,y))
        console.log(multiply(x,y))
        console.log(add(x,y))
    }

    operate(4,2)
}
calculator()

