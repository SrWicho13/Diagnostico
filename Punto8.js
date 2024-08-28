function buscarNombre(nombres, nombreBuscado) {
    return nombres.includes(nombreBuscado) ? "Nombre encontrado" : "Nombre no encontrado";
  }
  
  console.log(buscarNombre(["Juan", "Ana", "Luis"], "Ana"));  // Salida: "Nombre encontrado"

  