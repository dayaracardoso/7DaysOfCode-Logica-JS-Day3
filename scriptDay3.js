var conteudo = document.getElementById("conteudo");
var mensagem = document.getElementById("mensagemTecnologias");
var area;
var tecnologias = [];

function detectaArea() {
  var areaFront = document.getElementById("inputAreaFront").checked;
  var areaBack = document.getElementById("inputAreaBack").checked;

  if(areaFront == true) {
    area = "Front-end";
    console.log("Escolheu Front");
    conteudo.innerHTML = ` <p>Que legal que você quer seguir a área de Front-End! Dentre os frameworks React e Vue, qual você prefere aprender?</p>
        <input type="radio" name="radioArea" id="inputFrontReact"><label for="inputFrontReact">React</label><br>
        <input type="radio" name="radioArea" id="inputFrontVue"><label for="inputFrontVue">Vue</label><br><br>
        <button onclick="escolhaAreaFront();">Continuar</button>`; // conteudo que aparece caso escolha Front
  } else if(areaBack == true) {
    area = "Back-end";
    console.log("Escolheu Back");
    conteudo.innerHTML = ` <p>Que legal que você quer seguir a área de Back-End! C# e Java, qual linguagem você prefere aprender?</p>
        <input type="radio" name="radioArea" id="inputBackCSharp"><label for="inputBackCSharp">C#</label><br>
        <input type="radio" name="radioArea" id="inputBackJava"><label for="inputBackJava">Java</label><br><br>
        <button onclick="escolhaAreaBack()">Continuar</button>`; // conteudo que aparece caso escolha Back
  } else {
    console.log("escolha inválida.");
    return false;
  }
}

function escolhaAreaFront() {
  var frontReact = document.getElementById("inputFrontReact").checked;
  var frontVue = document.getElementById("inputFrontVue").checked;

  if(frontReact == true) {
    console.log("Escolheu React");
    conteudo.innerHTML = `<p>Que legal! React é um framework muito forte no mercado!</p> <p>Você quer seguir se especializando em Front-end ou seguir se desenvolvendo para se tornar Fullstack?</p>
        <input type="radio" name="radioArea" id="inputSeguirArea"><label for="inputSeguirArea">Seguir em Front-end</label><br>
        <input type="radio" name="radioArea" id="inputTornarFullstack"><label for="inputTornarFullstack">Se tornar Fullstack</label><br><br>
        <button onclick="especializaOuFullstack();">Continuar</button>`; // conteudo que aparece caso escolha React
  } else if(frontVue == true) {
    console.log("Escolheu Vue");
    conteudo.innerHTML = `<p>Que legal! Vue é um framework muito forte no mercado!</p> <p>Você quer seguir se especializando em Front-end ou seguir se desenvolvendo para se tornar Fullstack?</p>
        <input type="radio" name="radioArea" id="inputSeguirArea"><label for="inputSeguirArea">Seguir em Front-end</label><br>
        <input type="radio" name="radioArea" id="inputTornarFullstack"><label for="inputTornarFullstack">Se tornar Fullstack</label><br><br>
        <button onclick="especializaOuFullstack();">Continuar</button>`; // conteudo que aparece caso escolha Vue
  } else {
    console.log("escolha inválida.");
    return false;
  }
}

function escolhaAreaBack() {
  var backCSharp = document.getElementById("inputBackCSharp").checked;
  var backJava = document.getElementById("inputBackJava").checked;

  if(backCSharp == true) {
    console.log("Escolheu C#");
    conteudo.innerHTML = `<p>Que legal! C# é uma linguagem tradicional e muito bem aceita no mercado!</p><p>Você quer seguir se especializando em Back-end ou seguir se desenvolvendo para se tornar Fullstack?</p>
        <input type="radio" name="radioArea" id="inputSeguirArea"><label for="inputSeguirArea">Seguir em Back-end</label><br>
        <input type="radio" name="radioArea" id="inputTornarFullstack"><label for="inputTornarFullstack">Se tornar Fullstack</label><br><br>
        <button onclick="especializaOuFullstack();">Continuar</button>`; // conteudo que aparece caso escolha C#
  } else if(backJava == true) {
    console.log("Escolheu Java");
    conteudo.innerHTML = `<p>Que legal! Java é uma linguagem tradicional e muito bem aceita no mercado!</p><p>Você quer seguir se especializando em Back-end ou seguir se desenvolvendo para se tornar Fullstack?</p>
        <input type="radio" name="radioArea" id="inputSeguirArea"><label for="inputSeguirArea">Seguir em Back-end</label><br>
        <input type="radio" name="radioArea" id="inputTornarFullstack"><label for="inputTornarFullstack">Se tornar Fullstack</label><br><br>
        <button onclick="especializaOuFullstack();">Continuar</button>`; // conteudo que aparece caso escolha Java
  } else {
    console.log("escolha inválida.");
    return false;
  }
}

function especializaOuFullstack() {
  var seguirArea = document.getElementById("inputSeguirArea").checked;
  var tornarFullstack = document.getElementById("inputTornarFullstack").checked;

  if(seguirArea == true) {
    console.log(`Escolheu seguir ${area}.`);
    conteudo.innerHTML = `<p>Que legal, é muito bom se especializar em algo! Continue se aprofundando em ${area}!</p><p>Tem mais alguma tecnologia que você gostaria de aprender?</p>
        Digite o nome da tecnologia:<br>
        <input type="text" id="digitaTecnologias"><br>
        <button onclick="outrasTecnologias();">Quero aprender!</button>
        <br><br>
        <button onclick="clicouSair();">Finalizar</button>`; // conteudo que aparece caso escolha seguir área
  } else if(tornarFullstack == true) {
    console.log("Escolheu se tornar Fullstack");
    conteudo.innerHTML = `<p>Se desenvolver e aprender os dois lados é muito bom para ter uma visão mais ampla do negócio. Continue comprometido com seus estudos!</p><p>Tem mais alguma tecnologia que você gostaria de aprender?</p>
        Digite o nome da tecnologia:<br>
        <input type="text" id="digitaTecnologias"><br>
        <button onclick="outrasTecnologias();">Quero aprender!</button>
        <br><br>
        <button onclick="clicouSair();">Finalizar</button>`; // conteudo que aparece caso escolha se tornar Fullstack
  } else {
    console.log("escolha inválida.");
    return false;
  }
}

function outrasTecnologias() {
  var maisTecnologias = document.getElementById("digitaTecnologias").value;
  
  if(maisTecnologias == "") {
    alert("Você deve preencher o campo antes de adicionar uma nova tecnologia");
    console.log("Campo em branco");
} else if(maisTecnologias.length > 0) {
    if(tecnologias.indexOf(maisTecnologias) >=0) {
    alert("Já existe uma tecnologia com esse nome na lista!");
    console.log("Já existe uma tecnologia com esse nome na lista!")
    //conteudo.innerHTML = ``; // conteudo que aparece caso exista a mesma tecnologia
    limpaInput()
    } else {
       tecnologias.push(maisTecnologias);
    limpaInput();
    //conteudo.innerHTML = `<p>${tecnologias}</p>`; // imprimindo a lista com as tecnologias digitadas
    }
  } else {
    console.log("escolha inválida.");
    return false;
  }
  exibeLista();
  console.log(tecnologias);
}

function exibeLista() {
  mensagem.innerHTML = `<p>Você digitou essas tecnologias: ${tecnologias}</p>`;
}

function clicouSair() {
  console.log("Clicou em Finalizar");
  if(tecnologias.length > 0) {
    conteudo.innerHTML = `<p>Você estuda ${area} e quer aprender essas tecnologias: ${tecnologias}.</p>`;
    mensagem.innerHTML = "";
    console.log("Digitou tecnologias e clicou em sair");
  } else if(tecnologias.length == 0) {
     conteudo.innerHTML = `<p>Você estuda ${area} e não quer aprender mais tecnologias.</p>`;
    mensagem.innerHTML = "";
    console.log("Não digitou tecnologias e clicou em sair");
  }
}

function limpaInput() {
  document.getElementById("digitaTecnologias").value = "";
}

// SOLUÇÃO COM PROMPT

//var area;
//var tecnologias = [];
//var tecnologiaAprender;
//var printTecnologias = document.getElementById("mostra-tecnologias");

//function comecar() {
//  printTecnologias.innerHTML = "";
//  area = parseInt(prompt("Olá! Que legal que você começou a estudar programação! Você gostaria de seguir para a área de Front-end ou para a área de Back-end? Digite 1 para Front ou 2 para Back."));
//  areaEstudo();
//}

//function areaFront() {
//  const front = parseInt(prompt("Que legal que você quer seguir a área de Front-End! Dentre os frameworks React e Vue, qual você prefere aprender? Digite 1 para React ou 2 para Vue."));
//  if (front == 1) {
//    alert("Que legal! React é um framework muito forte no mercado!");
//    areaOuFull();
//  } else if (front == 2) {
//   alert("Que legal! Vue é um framework muito forte no mercado!");
//    areaOuFull();
//  } else {
//    alert(`Epa! Você digitou algo diferente! Clique novamente em "Começar"!`);
//    return false;
//  } 
//}

//function areaBack() {
//  const back = parseInt(prompt("Que legal que você quer seguir a área de Back-End! C# e Java, qual linguagem você prefere aprender? Digite 1 para C# ou 2 para Java."));
//  if (front == 1) {
//    alert("Que legal! C# é uma linguagem tradicional e muito bem aceita no mercado!");
//    areaOuFull();
//  } else if (front == 2) {
//    alert("Que legal! Java é uma linguagem tradicional e muito bem aceita no mercado!");
//    areaOuFull();
//  } else {
//    alert(`Epa! Você digitou algo diferente! Clique novamente em "Começar"!`);
//    return false;
//  }
//}

//function areaEstudo() {
//  if (area == 1) {
//    area = "Front-end"; 
//    areaFront();
//  } else if (area == 2) {
//    area = "Back-end";
//    areaBack();
//} else {
//      alert(`Epa! Você digitou algo diferente! Clique novamente em "Começar"!`);
//    return false;
//  }
//}

//function areaOuFull() {
//   var oneOrFullStack = parseInt(prompt(`Você quer seguir se especializando em ${area} ou seguir se desenvolvendo para se tornar Fullstack? Digite 1 se deseja se especializar em ${area} ou 2 caso deseje se tornar um Fullstack.`));

//  if (oneOrFullStack == 1) {
//    alert(`Que legal, é muito bom se especializar em algo! Continue se aprofundando em ${area}!`);
//  } else if (oneOrFullStack == 2) {
//    alert("Se desenvolver e aprender os dois lados é muito bom para ter uma visão mais ampla do negócio. Continue comprometido com seus estudos!");
//  } else {
//    alert("Opa! Digite uma opção válida.");
//    return false;
//  }
//  maisTecnologias();
//}

//function maisTecnologias() {
//  var outrasTecnologias = parseInt(prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 1 para Sim ou 2 para Não"));
//  while (outrasTecnologias == 1) {
//    tecnologiaAprender = prompt("Escreva o nome da tecnologia que gostaria de aprender.");
//    tecnologias.push(tecnologiaAprender);
//    alert(`${tecnologiaAprender} é mesmo fascinante!!`)
//    outrasTecnologias = parseInt(prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 1 para Sim ou 2 para Não"));
//  }
  
//  if (outrasTecnologias == 2) {
//  alert("ok, continue estudando!");
//    if (tecnologias.length === 0) {
//      printTecnologias.innerHTML = `Você estuda ${area} e não pretende aprender novas tecnologias no momento.`;
//    } else {
//      printTecnologias.innerHTML = `Você estuda ${area} e quer aprender essas tecnologias: ${tecnologias}.`;
//    }
//  } else {
//    alert("Ops! Digite uma opção válida.");
//    return false;
//  }
 
//  console.log(tecnologias);
//}
