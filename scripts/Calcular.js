

export const Soma = (memory, display, setMemory, setDisplay, setOperation) => {
  memory = parseInt(memory)
  display = parseInt(display)
  setMemory(memory + display)
  console.log(memory)
  setDisplay(memory)
  setOperation('+')
  return true;
};

export const Subtracao = (memory, display, setMemory, setDisplay, setOperation) => {
  setMemory(memory+display)
  setDisplay(0)
  setOperation('-')
  return true;
}

export const Multiplicacao = (memory, display, setMemory,setDisplay, setOperation) => {
  setMemory(memory*display)
  setDisplay(0)
  setOperation('x')
  return true;
}

export const Divisao = (memory, display, setMemory,setDisplay, setOperation) => {
  if (display == 0) {
    alert('Impossível dividir por zero');
  } else {
    setMemory(memory / display)
    console.log(memory);
    setDisplay(0)
    setOperation('/')
    return true;
  }
}


export const atualizarDisplay = (display, value, setDisplay) => {
  if(display == 0){
    setDisplay(value)
  } else
    setDisplay(`${display}${value}`)
    console.log(display)
    return true
}

export const reset(setDisplay,setMemory,setOperation){
  setDisplay(0)
  setMemory(0)
  setOperation('')
}

export const mostrarResultado = (display, memory, setMemory, lastOperation, setDisplay, setOperation) => {
  if (lastOperation == '+') {
    setDisplay(display + memory)
    setMemory(0)
  } else if (lastOperation == '-'){
    setDisplay(memory - display)
    setMemory(0)
  } else if (lastOperation == 'x'){
    setDisplay(memory * display)
    setMemory(0)
  } else if (lastOperation == '/'){
    setDisplay(memory / display)
    setMemory(0)
  }
  setOperation('')
  return true
}
