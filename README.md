# WorkForce App

WorkForce is a web application that allows the user to search for an employee in the database according to one of the following criteria: name, CPF, date of registration, UF of birth, salary, position and status.

The search returns the employees in a table format to facilitate the visualization of the data of each employee.

The application has a fixed button so that the user can add a new employee to the database by filling out a form with the information requested in each field. When submitting the form, if an employee with the same CPF already exists in the database, his/her data will be updated. On the other hand, if that CPF is not yet in the register, a new employee will be added to the database.

Finally, the user can remove an employees from the database by clicking on an employee's delete button.

Tech Stack: Material-ui, React, Context-Api, ExpressJs, yup, Formik, Jest.


## Project's dependencies

### Front-end

The app's front-end was implemented with `create-react-app`. Jest e Enzyme were used to implement Unit Tests. An unofficial adapter was installed to use Enzyme with React v.17. Dependencies:

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

`express` was used to implement the back-end of the application. To properly run the back-end, you need to have already installed NodeJs locally [https://nodejs.org/en/](Node.js). Dependencies:

- body-parser: v1.19.0,
- clone: v2.1.2,
- cors: v2.8.5,
- dotenv: v10.0.0,
- express: v4.17.1
- jest: v27.0.6

## Instructions to run the app

First, clone this repository with the command `git clone https://github.com/Taina-conde/workforce-app.git`

### Front-end

To run the React App:

- from the `workforce-app` folder, go to the front-end folder: `cd client`.
- install the project's dependencies: `npm install`.
- start the server: `npm start`.
- verify if the React App is running on [http://localhost:3000/](http://localhost:3000/).

### Back-end

Supposing the Node.js[https://nodejs.org/en/](Node.js) is already installed, to run the server:

- from the `workforce-app` folder, fo to the back-end folder: `cd api-server`.
- install the dependencies: `npm install`.
- start the server: `node index.js`.
- verify if the server is running on [http://localhost:3001/](http://localhost:3001/).
