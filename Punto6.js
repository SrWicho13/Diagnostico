function filtrarMayoresQue(arreglo, valor) {
    return arreglo.filter(num => num > valor);
  }
  
  console.log(filtrarMayoresQue([1, 2, 3, 4, 5, 6], 3));  // Salida: [4, 5, 6]
  