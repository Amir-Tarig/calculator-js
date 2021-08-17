function calculator () {
    const perviousText = document.querySelector('.previous')
    const currentText = document.querySelector('.current')
    const Numbuttons = Array.from(document.querySelectorAll('.num'))
    const OperationsButton = Array.from(document.querySelectorAll('.operation'))
    const deleteButton = document.querySelector('.delete')
    const clearButton = document.querySelector('.clear')
    let currentOperand = ''
    let previousOperand = ''

    // console.log(perviousText)
    // console.log(currentText)
    // console.log(Numbuttons)
    // console.log(OperationsButton)
    // console.log(deleteButton)
    // console.log(clearButton)

    const add = (x , y) => {  return  x   +   y } 
    const subtract = (x , y) => {  return x   -   y }
    const multiply = (x , y) => {  return x   *  y  } 
    const divide = (x , y) => {  return x   /  y}  

    function operate(operator, x, y) {
        
    }

    //function to populate the display when the user click the numbers buttons
    function populateDisplay() {
        Numbuttons.map(btn =>{
            btn.addEventListener('click', () => {
               if ( btn.textContent === "." && currentOperand.includes('.')) return
                currentOperand = currentOperand.toString() + btn.textContent.toString()
                currentText.innerText = currentOperand
                perviousText.innerText = previousOperand
            })
        })


        OperationsButton.map(btn =>{
            btn.addEventListener('click', () => {
               if ( btn.textContent === "." && currentOperand.includes('.')) return
                currentOperand = currentOperand.toString() + btn.textContent.toString()
                currentText.innerText = currentOperand
                perviousText.innerText = previousOperand
            })
        })
    }

   

    populateDisplay()
}
calculator()

