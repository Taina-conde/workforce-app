# WorkForce App

WorkForce é uma aplicação Web que permite que o usuário busque um funcionário no banco de dados de acordo com um dos seguintes critérios: nome, CPF, data de cadastro, UF de nascimento, salário, cargo e status.

A busca retorna os funcionários em um formato de tabela para facilitar a visualização dos dados de cada funcionário.

A aplicação conta com um botão fixo para que o usuário possa adicionar um novo funcionário ao banco de dados, preenchando um formulário com as informações solicitadas em cada campo. Ao enviar o formulário, se um funcionário com o mesmo CPF já existir no banco de dados, este terá seus dados atualizados. Por outro lado, se aquele CPF ainda não constar no cadastro, um novo funcionário será adicionado ao banco de dados.

Por fim, o usuário pode remover o funcionário que desejar. Basta clicar no botão relativo àquele funcionário para removê-lo.

Tecnologias usadas: Material-ui, React, Context-Api, ExpressJs, yup, Formik, Jest.


## Dependências do projeto

### Front-end

O front-end da aplicação foi desenvolvido com `create-react-app`. Para fazer os testes unitários foram usados Jest e Enzyme. Foi preciso instalar um adaptador não oficial para usar o Enzyme com o React v.17. O front-end do projeto possui as seguintes dependências:

- @date-io/date-fns: v1.3.13,
- @material-ui/core: v4.11.4,
- @material-ui/icons: v4.11.2,
- @material-ui/pickers: v3.3.10,
- date-fns: v2.22.1,
- formik: v2.2.9,
- formik-material-ui: v3.0.1,
- formik-material-ui-pickers: v0.0.12,
- yup: v0.32.9
- react: v17.0.2,
- react-dom: v17.0.2,
- react-scripts: v4.0.3,
- babel-jest: v26.6.3,
- @babel/preset-env: v7.14.7,
- @wojtekmaj/enzyme-adapter-react-17: v0.6.2,
- enzyme: v3.11.0,
- jest: v26.6.0

### Back-end

O back-end da aplicação foi desenvolvido usando `express`. Para que o back-end funcione corretamente, é preciso que você já tenha instalado localmente o NodeJs[https://nodejs.org/en/](Node.js). As dependências do servidor são as seguintes:

- body-parser: v1.19.0,
- clone: v2.1.2,
- cors: v2.8.5,
- dotenv: v10.0.0,
- express: v4.17.1
- jest: v27.0.6

## Instruções para iniciar a aplicação

Primeiramente, clone este repositório com `git clone https://github.com/Taina-conde/workforce-app.git`

### Front-end

Para rodar o script do React App:

- a partir da pasta `workforce-app`, navegue para a pasta do React App: `cd client`.
- instale as dependências do projeto: `npm install`.
- inicie o servidor: `npm start`.
- verifique no console ou no browser se o React App está rodando em [http://localhost:3000/](http://localhost:3000/).

### Back-end

Assumindo que o NodeJs[https://nodejs.org/en/](Node.js) já se encontra instalado localmente, para iniciar o servidor:

- a partir da pasta `workforce-app`, navegue para a pasta do servidor: `cd api-server`.
- instale as dependências do servidor: `npm install`.
- inicie o servidor: `node index.js`.
- verifique no console ou no browser se o servidor está rodando em [http://localhost:3001/](http://localhost:3001/).
