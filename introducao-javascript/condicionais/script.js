function retornaSexo(sexo) {
  // M, F
  // Masculino, Feminino

  if (sexo === "M") {
    return "Masculino";
  } else if (sexo === "F") {
    return "Feminino";
  } else {
    return "Outro";
  }
}

function retornaSexo2(sexo) {
  switch (sexo) {
    case "m":
      return "masc";
    case "f":
      return "femi";
    default:
      return "outro";
  }
}

var resultado = retornaSexo("F");
console.log(resultado);

var resultado2 = retornaSexo2("m");
console.log(resultado2);
