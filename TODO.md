# Desafio para backend em NodeJS

Bem-vindo ao desafio técnico para backend em NodeJS da Ubistart!! :raised_hands:

![](./docs/celebration.gif)

## :man_technologist: &nbsp;O desafio&nbsp; :woman_technologist:

Para a resolução deste desafio, esperamos que você desenvolva uma API Rest que contemple as estórias de usuário abaixo. Nenhuma interface de usuário deve ser desenvolvida.

* Como um usuário eu quero criar uma conta então poderei gerenciar meus itens de TODO
  - Dado que estou criando minha conta, quero informar e-mail e senha

* Como um usuário eu quero poder entrar na plataforma

* Como um usuário eu quero inserir um item de TODO, assim poderei adicionar um TODO a minha lista de tarefas

  - A aplicação deve armazenar a data e hora da inserção
  - Informar descrição e prazo da tarefa

* Como um usuário eu quero finalizar um TODO, então poderei colocar a tarefa como feita

  - A aplicação deve armazenar a data e hora de quando a tarefa foi finalizada

* Como um usuário eu quero editar um TODO, então poderei atualizar minha lista
 
  - A aplicação deve armazenar a data e hora de quando a tarefa foi editada
  - Posso atualizar descrição e prazo
  - Um TODO concluído não pode ser atualizado

* Como um usuário eu quero listar todos os meus itens de TODO, assim poderei realizá-los

  - Eu quero listar apenas os **MEUS** itens
  - Se o TODO está atrasado, então a aplicação deve retornar que o TODO está atrasado

* Como um administrador eu quero poder entrar na plataforma

  - A aplicação deve fornecer um usuario administrador por padrão

* Como um administrador eu quero listar todos os itens de TODO, assim poderei ver todas as tarefas criadas

  - A lista deve ser paginada
  - A lista deve conter o email do usuário, descrição e prazo do TODO

* Como um administrador eu quero filtrar a lista de itens de TODO por tarefas atrasadas

  - A lista deve ser paginada
  - A lista deve conter o email do usuário, descrição e prazo do TODO

## :wrench: &nbsp;Requisitos técnicos

![](./docs/requisitos.gif)
### Obrigatórios

* Disponibilizar documentação o suficiente para a execução do projeto no README
* Utilizar banco de dados MySQL
* Tratar erros
* Autenticação e autorização via JWT

### Opcionais

* Escrever testes de unidade e integração
* Documentar decisões tomadas durante o desafio técnico
* Disponibilizar diagrama da API
* Utilizar docker

### Observação

Você pode usar qualquer framework de backend para a resolução do problema.

(Exemplo de frameworks: Express, AdonisJS, NestJS)

## :eyes: &nbsp;Avaliação 

![](./docs/avaliacao.gif)

O objetivo principal deste desafio é avaliar as capacidades do candidato em:

* Uso correto e apropriado das camadas da arquitetura do projeto
* Escrever código limpo
* Estruturar e armazenar dados de forma performática


### Observações
 
* Ao terminar o desafio, encaminhe o link do repositório para o email `rh@ubistart.com`
* Caso você não conclua o desafio no tempo combinado, encaminhe a sua solução para nós com uma seção de `dificuldades` no projeto. O importante é vermos o que você conseguiu construir :v: :grin: 
