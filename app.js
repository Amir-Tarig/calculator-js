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

    function handleButtons() {
        Numbuttons.map(btn => {
            btn.addEventListener('click', () => {
                if(currentOperand.includes('.')) return
                currentOperand === "Choose a higher number bitch" ? currentOperand = '' : ''
                currentOperand += btn.textContent.toString()
                upDateDisplay()
            })
        })

        OperationsButton.map(btn => {
            btn.addEventListener('click', () => {
                operation = btn.textContent
                operate()
                upDateDisplay()
            })
        })

        deleteButton.addEventListener('click', () => {
            currentOperand = currentOperand.slice(0, -1)
            upDateDisplay()
        })

        equalBtn.addEventListener('click', () => {
            calculateResults()
            upDateDisplay()
        })

        clearButton.addEventListener('click', () => {
            currentOperand = ''
            previousOperand = ''
            operation = undefined
            upDateDisplay()
        })

        //adding a keyboard support
        window.addEventListener('keyup' , (e) => {
            Numbuttons.map(btn => {
                if(e.key === btn.textContent)  {
                    if(currentOperand.includes('.')) return
                    currentOperand += btn.textContent.toString()
                    upDateDisplay()
                } 
            })

            OperationsButton.map(btn => {
                if(e.key === btn.textContent)  {
                     operation = btn.textContent
                      operate()
                     upDateDisplay()
                } 
            })

            if(e.key === equalBtn.textContent) {
                   calculateResults()
                   upDateDisplay()
            }
        })
    }

    function operate() {
        if(currentOperand === ' ') return
        if(previousOperand !== ' ') {
            calculateResults()
        }
        previousOperand = `${currentOperand} ${operation}`
        currentOperand = ' '
    }


    function  calculateResults() {
        const curr = parseFloat(currentOperand)
        const prev = parseFloat(previousOperand)
        let results;

        if( isNaN(prev)  ||  isNaN(curr) ) return 
          operation === '+' ? results = prev  + curr
        : operation === '-' ? results =  prev - curr
        : operation === '*' ? results = prev * curr
        : operation === '÷' && curr === 0 ? results = "Choose a higher number bitch"
        : operation === '÷' ? results = prev / curr 
        : '';
        //Math.round((results + Number.EPSILON) * 100) / 100;
        currentOperand = results
        operation = undefined
        previousOperand = ''
    }

    function upDateDisplay() {
        currentText.textContent = currentOperand
        perviousText.textContent = previousOperand
    }






  
    handleButtons()
}
calculator()

