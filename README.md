# Configurando Ambiente
## Docker e Conexão com o banco
- Com o Docker Desktop rodando, abra o powershell como administrador e faça o pull da imagem: docker pull mysql
- Rode o comando no terminal do projeto "docker:run"
- Abra o Dbeaver
- Adicione uma conexão com o DB MySQL.
- Na tela Connect to a DataBase, escreva na caixa de Server Host localhost, em DataBase coloque mysql e em password coloque a senha "123456".
- Selecione Test Connection, baixe o driver JDBC (caso necessário) e, por fim, o banco de dados está criado
## Possiveis Problemas
- Em alguns casos é necessário habilitar a public key retrival, basta apenas ir no "Driver properties" e mudar a chave "allowPublicKeyRetrieval" de false para TRUE
## Iniciando o projeto
- Abra o projeto com o seu editor de preferencia, abra o terminal e instale as extensões (Eu utilizo o comando "yarn")
- Rode o comando "yarn docker:run" para subir o conteiner docker
- Este projeto está configurado para utilizar o banco de dados padrão do dbeaver, chamado "sys", caso necessário só fazer a troca do banco no .env
- Rode o comando "yarn migration:run" para rodar as migrations
- Rode o comando "yarn seed:run" para inserir o adm e qualquer outra informação que seja necessária e padrão dentro do sistema
- Rode o comando "yarn dev" para startar o servidor
## Observações Importantes
- As requisições para a api com datas deve estar no padrão AAAA-DD-MM-HR-MI-SS (ano, dia, mês, horas, minutos e segundos), sendo horas, minutos e segundos opcionais
# Decisões de Projeto
## Gitflow
- Optei por utilizar o gitflow, pois trará algumas vantagens na hora de fazer o desenvolvimento, como um maior controle em cada task em que estarei trabalhando.
- Todo o projeto ficará na branch "main", teremos uma branch de homologação e testes, chamada "hml" e as demais branchs serão as que vou trabalhar em cada task em especifico.
## API's de suporte

Optei por instalar as dependencias que eu mais utilizo em meus projetos

- Optei pelo framework "express"
- O "cors" irá auxiliar a fazer a conversação com o frontend, caso necessário
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
