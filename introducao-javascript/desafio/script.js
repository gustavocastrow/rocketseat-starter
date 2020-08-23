// Exercícios: Módulo 01

// 1º Exercício -> Crie uma função que dado o objeto a seguir:
var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP",
};

//Retorne o seguinte conteúdo:
//O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
//nº 1293.

function retorna() {
  console.log(
    `O usuário mora em ${endereco.cidade} / ${endereco.uf}, 
    no bairro ${endereco.bairro}, na rua "${endereco.rua}", 
    com ${endereco.numero}`
  );
}
retorna();

// =============================================================================

// 2º Exercício -> Crie uma função que dado um intervalo (entre x e y)
//exiba todos número pares:

function pares(x, y) {
  // código aqui
  for (var i = x; i <= y; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
pares(111, 222);

// =============================================================================

// 3º exercício -> Escreva uma função que verifique se o vetor de habilidades
//passado possui a habilidade "Javascript" e retorna um booleano true/false caso exista ou não.

function temHabilidade(skills) {
  // código aqui
  return skills.indexOf("Javascript") !== -1;
}
var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills)); // true ou false

// =============================================================================

//4º exercício -> Escreva uma função que dado um total de anos de estudo retorna
// o quão experiente o usuário é:

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

// =============================================================================

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

function resultado() {
  console.log(
    `${usuarios[0].nome} possui habilidades: ${usuarios[0].habilidades}`
  );
  console.log(
    `${usuarios[1].nome} possui habilidades: ${usuarios[1].habilidades}`
  );
}

console.log(resultado());
