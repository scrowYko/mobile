 const Soma = (memory, display, setMemory, setDisplay, setOperation) => {
  const memoryInt = parseInt(memory);
  const displayInt = parseInt(display);
  const result = memoryInt + displayInt;
  setMemory(result);
  console.log(displayInt);
  setDisplay(0);
  setOperation("+");
  return true;
};

 const Subtracao = (
  memory,
  display,
  setMemory,
  setDisplay,
  setOperation
) => {
  setMemory(memory + display);
  setDisplay(0);
  setOperation("-");
  return true;
};

 const Multiplicacao = (
  memory,
  display,
  setMemory,
  setDisplay,
  setOperation
) => {
  setMemory(memory * display);
  setDisplay(0);
  setOperation("x");
  return true;
};

 const Divisao = (
  memory,
  display,
  setMemory,
  setDisplay,
  setOperation
) => {
  if (display == 0) {
    alert("Impossível dividir por zero");
  } else {
    setMemory(memory / display);
    console.log(memory);
    setDisplay(0);
    setOperation("/");
    return true;
  }
};

 const atualizarDisplay = (display, value, setDisplay) => {
  if (display == 0) {
    setDisplay(value);
  } else setDisplay(`${display}${value}`);
  console.log(display);
  return true;
};

 const reset = (setDisplay, setMemory, setOperation) => {
  setDisplay(0);
  setMemory(0);
  setOperation("");
};

 const mostrarResultado = (
  display,
  memory,
  setMemory,
  lastOperation,
  setDisplay,
  setOperation
) => {
  if (lastOperation == "+") {
    setDisplay(display + memory);
    setMemory(0);
  } else if (lastOperation == "-") {
    setDisplay(memory - display);
    setMemory(0);
  } else if (lastOperation == "x") {
    setDisplay(memory * display);
    setMemory(0);
  } else if (lastOperation == "/") {
    setDisplay(memory / display);
    setMemory(0);
  }
  setOperation("");
  return true;
};

function aa() {
  let n = [3, 1, 4, 2];
  let i, j, aux;

  for (let i = 0; i < 4; i++) {
    for (j = 0; j < 3; j++) {
      if (n[j] > n[j + 1]) {
        aux = n[j];
        n[j] = n[j + 1];
        n[j + 1] = aux;
      }
    }
  }
  console.log(n)
}


aa()