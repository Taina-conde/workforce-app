# WorkForce App

 WorkForce é uma aplicação Web que permite que o usuário busque um funcionário no banco de dados de acordo com um dos seguintes critérios: nome, CPF, data de cadastro, UF de nascimento, salário, cargo e status.

 A busca retorna os funcionários em um formato de tabela para facilitar a visualização dos dados de cada funcionário. 

 A aplicação conta com um botão fixo para que o usuário possa adicionar um novo funcionário ao banco de dados, preenchando um formulário com as informações solicitadas em cada campo. Ao enviar o formulário, se um funcionário com o mesmo CPF já existir no banco de dados, este terá seus dados atualizados. Por outro lado, se aquele CPF ainda não constar no cadastro, um novo funcionário será adicionado ao banco de dados. 

 Por fim, o usuário pode remover o funcionário que desejar. Basta clicar no botão relativo àquele funcionário para removê-lo.

 ## Instruções para iniciar a aplicação

 Primeiramente, clone este repositório com `git clone xxxxxxx`

 ### Front-end
O front-end da aplicação foi desenvolvida com `create-react-app`. Para rodar o script:
* navegue para a pasta do React App: `cd client`.
* instale as dependências do projeto: `npm install`.
* inicie o servidor: `npm start`.
* verifique no console ou no browser se o React App está rodando em [http://localhost:3000/](http://localhost:3000/).

 ### Back-end

 O back-end da aplicação foi desenvolvido usando `express`. Para que o back-end funcione corretamente, é preciso que você já tenha instalado localmente o [https://nodejs.org/en/](Node.js). Para iniciar o servidor:

 * a partir da pasta `my-employees`, navegue para a pasta do servidor: `cd api-server`.
 * instale as dependências do servidor: `npm install`.
 * inicie o servidor:  `node index.js`.
 * verifique no console ou no browser se o servidor está rodando em [http://localhost:3001/](http://localhost:3001/).



