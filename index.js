const perguntas = [
    {
        pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
        respostas: [
            "var",
            "let",
            "const"
        ],
        correta: 1 // "let"
    },
    {
        pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
        respostas: [
            "log()",
            "print()",
            "display()"
        ],
        correta: 0 // "log()"
    },
    {
        pergunta: "Qual símbolo é usado para comentários de uma linha em JavaScript?",
        respostas: [
            "//",
            "/*",
            "#"
        ],
        correta: 0 // "//"
    },
    {
        pergunta: "Qual método é usado para converter uma string em um número inteiro em JavaScript?",
        respostas: [
            "parseInt()",
            "stringToInt()",
            "toInteger()"
        ],
        correta: 0 // "parseInt()"
    },
    {
        pergunta: "Qual operador é usado para comparar igualdade semelhante em valor e tipo em JavaScript?",
        respostas: [
            "===",
            "==",
            "="
        ],
        correta: 0 // "==="
    },
    {
        pergunta: "Qual função é usada para arredondar um número para o inteiro mais próximo em JavaScript?",
        respostas: [
            "Math.round()",
            "Math.ceil()",
            "Math.floor()"
        ],
        correta: 0 // "Math.round()"
    },
    {
        pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "push()",
            "addToEnd()",
            "append()"
        ],
        correta: 0 // "push()"
    },
    {
        pergunta: "Qual palavra-chave é usada para iniciar uma estrutura de controle condicional em JavaScript?",
        respostas: [
            "if",
            "else",
            "switch"
        ],
        correta: 0 // "if"
    },
    {
        pergunta: "Qual método é usado para selecionar um elemento HTML pelo seu ID em JavaScript?",
        respostas: [
            "getElementByTag()",
            "querySelector()",
            "getElementById()"
        ],
        correta: 2 // "getElementById()"
    },
    {
        pergunta: "Qual método é usado para transformar texto em letras maiúsculas em JavaScript?",
        respostas: [
            "toUpperCase()",
            "toUpper()",
            "makeUpperCase()"
        ],
        correta: 0 // "toUpperCase()"
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

   for(let resposta of item.respostas) {
     const dt = quizItem.querySelector('dl dt').cloneNode(true)
     dt.querySelector('span').textContent = resposta
     dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
     dt.querySelector('input').value = item.respostas.indexOf(resposta)
     dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta 
       
       corretas.delete(item)
        if(estaCorreta) {
           corretas.add(item)
        }

        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
     }
  
  quizItem.querySelector('dl').appendChild(dt)
}
  

  quizItem.querySelector('dl dt').remove()


    // Coloca a pergunta na tela
quiz.appendChild(quizItem)
}