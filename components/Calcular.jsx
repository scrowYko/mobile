const Soma = (a, b, atualizarResultado) => {
  let x = a + b;
  atualizarResultado = x
  return atualizarResultado;
}

function Subtracao(a, b,atualizarResultado) {
  let x = a - b;
  atualizarResultado = x
  return atualizarResultado;
}

function Multiplicacao(a, b, atualizarResultado) {
  let x = a * b;
  atualizarResultado = x
  return atualizarResultado;
}

function Divisao(a, b, atualizarResultado) {
  if (b == 0) {
    return `Impossível dividir por zero`;
  } else {
    let x = a / b;
    atualizarResultado = x
    return atualizarResultado;
  }
}

export default Soma