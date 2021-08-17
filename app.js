function calculator () {
    const perviousText = document.querySelector('.previous')
    const currentText = document.querySelector('.current')
    const Numbuttons = Array.from(document.querySelectorAll('.num'))
    const OperationsButton = Array.from(document.querySelectorAll('.operation'))
    const deleteButton = document.querySelector('.delete')
    const clearButton = document.querySelector('.clear')
    let currentOperand = ''
    let previousOperand = ''

    const add = (x , y) => {  return  x   +   y } 
    const subtract = (x , y) => {  return x   -   y }
    const multiply = (x , y) => {  return x   *  y  } 
    const divide = (x , y) => {  return x   /  y}  

    // function operate(operator) {
    //     previousOperand = currentOperand
    //     currentOperand = " "
    // }

    //function update the display 
    function populateDisplay() {
        currentText.innerText = currentOperand
        perviousText.innerText = previousOperand
    }

   
    function handleBtnClick () {
            Numbuttons.map(btn =>{
                btn.addEventListener('click', () => {
                if ( btn.textContent === "." && currentOperand.includes('.')) return
                    currentOperand = currentOperand.toString() + btn.textContent.toString()
                    populateDisplay()
                })
            })


            OperationsButton.map(btn =>{
                btn.addEventListener('click', () => {
                if ( btn.textContent === "." && currentOperand.includes('.')) return
                    currentOperand = currentOperand.toString() + btn.textContent.toString()
                    populateDisplay()
                })
            })
        }

    handleBtnClick ()
}
calculator()

