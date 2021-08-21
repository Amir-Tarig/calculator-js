function calculator () {
    const perviousText = document.querySelector('.previous')
    const currentText = document.querySelector('.current')
    const Numbuttons = Array.from(document.querySelectorAll('.num'))
    const OperationsButton = Array.from(document.querySelectorAll('.operation'))
    const deleteButton = document.querySelector('.delete')
    const clearButton = document.querySelector('.clear')
    const  equalBtn = document.querySelector('.equals')
    let currentOperand = ''
    let previousOperand = ''
    let operation = undefined


    function handleBtnClick () {
        Numbuttons.map(btn =>{
            btn.addEventListener('click', () => {
            if ( btn.innerText === "." && currentOperand.includes('.')) return
                currentOperand = currentOperand.toString() + btn.innerText.toString() 
                populateDisplay()
            })
        })


        OperationsButton.map(btn =>{
            btn.addEventListener('click', () => {
            // if ( btn.textContent === ' . ' && currentOperand.includes(' . ')) return
                // currentOperand = currentOperand.toString() + " " + btn.textContent.toString()
                operate(btn.innerText)
                populateDisplay()
            })
        })

        equalBtn.addEventListener('click', () => {
            calculateResults()
            populateDisplay()
        })

    }
    

    const add = (x , y) => {  return  x   +   y } 
    const subtract = (x , y) => {  return x   -   y }
    const multiply = (x , y) => {  return x   *  y  } 
    const divide = (x , y) => {  return x   /  y}  

    function operate(oper) {
        if(currentOperand === '') return 
       
        if(previousOperand !== ' ') {
            calculateResults()  
        }
        operation = oper 
        previousOperand = currentOperand
        console.log(currentOperand)
        currentOperand = ''

    }


    function calculateResults() {
        let pre = parseFloat(previousOperand)
        let curr = parseFloat(currentOperand)
        console.log(pre + "pre")
        console.log(curr + "curr")
        let results

        // console.log(operation)
        if(operation === '+') {
            results = add(pre, curr)
            // console.log(results)
        }else {
            console.log('no') ;
        }
    }

    //function update the display 
    function populateDisplay() {
        currentText.innerText = currentOperand
        perviousText.innerText = previousOperand
    }



   
    

    handleBtnClick ()
}
calculator()

