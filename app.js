function calculator () {
    let perviousText = document.querySelector('.previous')
    let currentText = document.querySelector('.current')
    const Numbuttons = Array.from(document.querySelectorAll('.num'))
    const OperationsButton = Array.from(document.querySelectorAll('.operation'))
    const deleteButton = document.querySelector('.delete')
    const clearButton = document.querySelector('.clear')
    const  equalBtn = document.querySelector('.equals')
    let currentOperand = ''
    let previousOperand = ''
    let operation = undefined

    function clearAll() {
        clearButton.addEventListener('click', () => {
            currentOperand = ''
            previousOperand = ''
            operation = undefined
            upDateDisplay()
        })
    }

    function handleNums() {
        Numbuttons.map(btn => {
            btn.addEventListener('click', () => {
                currentOperand += btn.textContent.toString()
                upDateDisplay()
            })
        })

        OperationsButton.map(btn => {
            btn.addEventListener('click', () => {
                operation = btn.textContent
                // currentOperand += operation
                operate()
                upDateDisplay()
            })
        })

        equalBtn.addEventListener('click', () => {
            calculateResults()
            upDateDisplay()
        })
    }

    function operate() {
        if(currentOperand === ' ') return
        if(previousOperand !== ' ') {
            calculateResults()
        }
        previousOperand = currentOperand
        currentOperand = ' '
    }

    function  calculateResults() {
        const curr = parseFloat(currentOperand)
        const prev = parseFloat(previousOperand)
        let results;

        if( isNaN(prev)||  isNaN(curr) ) return 
          operation === '+' ? results = prev  + curr
        : operation === '-' ? results =  prev - curr
        : operation === '*' ? results = prev * curr
        : operation === '÷' ? results = prev / curr
        : '';
        currentOperand = results
        operation = undefined
        previousOperand = ''
    }

    function upDateDisplay() {
        currentText.textContent = currentOperand
        perviousText.textContent = previousOperand
    }
    clearAll() 
    handleNums()
}
calculator()

