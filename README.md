# API de Filmes

Esta é uma API para gerenciamento de filmes.

## Pré-requisitos

- Node.js (versão 16.16.0)
- npm (versão 8.11.0)

## Como executar o projeto

1. Clone o repositório:

https://github.com/tobiascorrea/API_Filmes

2. Instale as dependências:

npm install


4. Execute o projeto:

npm start
npm run dev (Sobe a aplicação em ambiente de desenvolvimento)


5. Acesse a API:

Acesse a API em http://localhost:3000


## Endpoints

### Criar um filme

POST /movies


Cria um novo filme.

Exemplo de corpo da requisição:

```json
{
  "title": "O Poderoso Chefão",
  "director": "Francis Ford Coppola",
  "year": 1972
}

Obter todos os filmes

GET /movies

Retorna uma lista com todos os filmes cadastrados.

Obter um filme pelo ID

GET /movies/:id

Retorna os detalhes de um filme específico com base no ID fornecido.

Atualizar um filme

PUT /movies/:id

Atualiza as informações de um filme específico com base no ID fornecido.

Exemplo de corpo da requisição:

{
  "title": "O Poderoso Chefão",
  "director": "Francis Ford Coppola",
  "year": 1972
}

Excluir um filme

DELETE /movies/:id

Exclui um filme específico com base no ID fornecido.



