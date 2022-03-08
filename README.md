# Como Rodar o Projeto

# Decisões de Projeto
## Gitflow
- Optei por utilizar o gitflow, pois trará algumas vantagens na hora de fazer o desenvolvimento, como um maior controle em cada task em que estarei trabalhando.
- Todo o projeto ficará na branch "main", teremos uma branch de homologação e testes, chamada "hml" e as demais branchs serão as que vou trabalhar em cada task em especifico.
## Configrando ambiente

Optei por instalar as dependencias que eu mais utilizo em meus projetos

- Optei pelo framework "express"

- O "cors" irá auxiliar a fazer a conversação com o frontend

- O "dotenv" me ajudará a utilizar as variaveis de ambientes

- O "nodemon" irá me auxiliar mantendo o servidor de pé

- Inicialmente, optei por utilizar o "pg" (postgees), pois é o banco que está instalado em minha máquina, porém, ao decorrer do projeto, irei fazer a troca de banco

- O "knex" irá me ajudar a fazer a comunicação com o banco de dados

- Optei por utilizar o "uuid", pois as id's de usuarios não serão salvas de maneira ordenada

- O "yup" para fazer testes e validações

- O "bcrypt" pra fazer encriptação de senha de usuario

- O "date-fns" para me auxiliar a manipular datas

- O "jsonwebtoken" para criar tokens de acesso

- O "eslint" para me auxiliar a identificar e gerenciar erros de projeto
## Ferramentas utlizadas
- O editor de código utilizado é o VS Code
- Utilizarei containers docker para poder manter o servidor de banco de dados ativo
- Todos os testes serão feitos com o postman
- Inicialmente, estarei utilizando o DBeaver para rodar o banco de dados postgrees, porém, ao longo do projeto, serão substituidos pelo MySQL e o MySql Workbanch
## Outras Informações
- Estarei utilizando migrations e seeds para criar o banco e popular com informações
