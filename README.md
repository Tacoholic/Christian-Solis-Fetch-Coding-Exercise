# Christian-Solis-Fetch-Coding-Exercise
 
## Description
This repository contains the front-end testing suite for the Fetch Coding Exercise.
This project uses the Cypress testing framework and is written in Javascript/Typescript.
# Instructions
1. Before forking the repo and installing Cypress, make sure you have Node.js installed
```
brew install node@20
```
2. Fork the repository
3. Install Cypress
### Installing Cypress
```
cd /your/project/path
npm install cypress --save-dev
npm i
```
You will also need to install TypeScript into the project
```
npm install typescript --save-dev
```
4. After installing cypress, create a tsconfig.json file inside the Cypress folder and add the following configuration:
```
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["es5", "dom"],
    "types": ["cypress", "node"]
  },
  "include": ["**/*.ts"]
}
```
4. Open the project by running ```npx cypress open```
5. Select the ```E2E Testing``` option by clicking on it
6. Choose a browser
7. Run the test by clicking on the ```spec.cy.ts file```
8. You can also run the test through the CLI by running ```npx cypress run```

## Dependencies
- Prettier
