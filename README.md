# Starter NodeJS Template with following features -
- ESLint Support for Safety
- Typescript Support for Typechecking and Scalability
- Express Support from the get go
- To start with database, prisma is already configured, just run 
```npx prisma init --datasource-provider mongodb``` (replace mongodb with db of your choice)
- Vercel Support for serverless hosting (you might have issue with deploying from the website, so use the vercel cli tool for that by running ```npx vercel```)
- Shortcut commands -
    - ```npm build``` - Typescript compile and run with node for production use
    - ```npm run dev``` - Typescript compile and run with nodemon
    - ```npm lint``` - to lint your code with eslint
    - ```npm start``` - if there are no changes in code and already compiled, direct start