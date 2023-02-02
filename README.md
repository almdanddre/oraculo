# Oráculo "What If..."

Prova de conceito desenvolvido durante o mestrado na UFCG

## Sobre

O oráculo foi desenvolvido com o objetivo de possibilitar a interação do alunos, através de testes de entrada e saída, com soluções de referência de exercícios de programação. A ideia é que o aluno envie a entrada do problema e a saída que julga como correta para a entrada fornecida. Ambos os argumentos são enviados para a solução de referência e são verificados, retornando um feedback de "correto" ou "incorreto".

## Estrutura do projeto

- /controllers: comporta os comandos necessários para realizar login, logout e cadastro na plataforma.
- /exercicios: guarda as soluções de referência para cada exercício incluído na plataforma.
- /public: reúne informações de estilização; e o script para capturar as informações digitadas pelo usuário e realizar a operação de POST.
- /routes: apresenta as rotas para acessar cada página, bem como a rota específica que trata da execução de código Python (linguagem utilizada na solução de referência) com as informações digitadas pelo usuário.
- /views: apresenta as handlebars para interação do usuário.
- app.js: inicialização do servidor.

