# Absence Manager
Display absence list with filter option of absence type, status and date,

[Live Demo](https://absence-manager.bwg29nov.com)

 ```bash
 This Application worked best in Chrome browser
 ```

## Table of contents

- [Feature's included](#features-included)
- [Dependencies](#dependencies)
- [Project Setup](#project-setup)
- [Run Application](#run-application)
- [Run Application Server](#run-application-server)
- [Build Application](#build-application)
- [Running Unit Tests](#running-unit-tests)

## Feature's included

- [x] List absence list,
- [x] Paginate list with 10 per page,
- [x] Filter by absence type, status and date,
- [x] Download `.ics` file to add in calender,
- [x] Unit test with jest.

## Dependencies:

- ReactJs ,
- Jest,
- Typescript,
- [nodemon](https://nodemon.io/) ( to run react app as server )
- aws-amplify ( for aws deployment )

## Project Setup

- Download and install Node.js (https://nodejs.org/en/) to your computer,
- Open `Node Command Prompt` and run command `npm  –v` to check node version,
- Navigate to project folder,
- Run `npm i` to install all project dependencies.

## Run Application

Run `npm start` to start the app. Then navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Run Application Server

Run `npm run server` to start nodemon server. Then navigate to `http://localhost:3050/`. The app will automatically reload if you change any of the source files.

## Build Application

Run `npm run build` to build the project. The build artifacts will be stored in the `build/` directory.

## Running unit tests

Run `npm test` to execute the unit tests via Jest and (testing-library)[https://testing-library.com/]

