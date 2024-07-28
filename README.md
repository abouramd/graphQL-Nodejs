
#### Node js app with express, GraphQL, mongodb in database and docker for deploy

# Usage

1. Clone repo

```bash
git clone https://github.com/abouramd/graphQL-Nodejs.git

cd graphQL-Nodejs

cp src/.env_example src/.env
```

2. Set env variables in src/.env

3. Run the app

- run using docker

  ```bash
  docker compose up
  ```

- run use node js without docker

  ```bash
  cd src/

  npm install --force

  npm start
  ```

# **WHAT I USED TO BUILD THIS PROJECT**

## **GraphQL**

- GraphQL is a query language for APIs (Application Programming Interfaces) and a runtime for fulfilling those queries with existing data. It provides a complete and understandable description of the data in an API, allowing clients to ask for exactly what they need and nothing more. GraphQL makes it easier to evolve APIs over time and enables powerful developer tools. It is not tied to any specific database or storage engine and is instead backed by existing code and data.

## **Node.js**

- Node.js is an open-source, cross-platform JavaScript runtime environment and library that allows developers to run JavaScript code outside of a web browser. can be used to build server-side web applications, handling server-side rendering, data processing, and serving dynamic content to clients. Node.js is commonly used for building APIs (Application Programming Interfaces) due to its lightweight and efficient nature. It allows developers to create scalable and performant APIs that can handle a large number of concurrent requests.

## **Express.js**

- Express is a popular and widely used web application framework for Node.js. It is designed to simplify the process of building web applications and APIs by providing a set of robust features and tools.

## Mongoose

- Mongoose is an Object Data Modeling (ODM) library for MongoDB, designed to work with Node.js. It provides a schema-based solution for modeling application data and simplifies the interaction with MongoDB.

## **Docker**

- Docker is a software platform that enables developers to build, package, and deploy applications quickly and efficiently using containers. Containers are lightweight, portable, and self-sufficient units that encapsulate an application and its dependencies, including libraries, runtime, and system tools. Docker provides a standardized way to package, distribute, and run software, ensuring onsistency across different computing environments.
