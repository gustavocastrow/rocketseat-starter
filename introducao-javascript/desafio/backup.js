// 2:

function pares(x, y) {
  // código aqui
  for (var i = x; i <= y; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
pares(111, 222);

// 3:

function temHabilidade(skills) {
  // código aqui
  return skills.indexOf("Javascript") !== -1;
}
var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills)); // true ou false

// 4:

function experiencia(anos) {
  if (anos <= 1) {
    console.log("Iniciante");
  } else if (anos <= 3) {
    console.log("Intermediário");
  } else if (anos <= 6) {
    console.log("Avançado");
  } else {
    console.log("Jedi Master");
  }
}
var anosEstudo = 1;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master

// 5:

// 5º exercício -> Dado o seguinte vetor de objetos:

var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"],
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"],
  },
];

// Escreva uma função que produza o seguinte resultado:
// O Diego possui as habilidades: Javascript, ReactJS, Redux
// O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
