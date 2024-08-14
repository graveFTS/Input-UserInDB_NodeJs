# User Data Management API

This project is a simple RESTful API that allows users to perform CRUD (Create, Read, Update, Delete) operations on user data. The API is built using Node.js, Express.js, and MongoDB as the database. Users can interact with the API using Postman or any other HTTP client.

## Features

- **Create User (POST):** Add new user data to the MongoDB database.
- **Read User (GET):** Retrieve user data from the MongoDB database.
- **Update User (PUT/PATCH):** Update existing user data in the MongoDB database.
- **Delete User (DELETE):** Remove user data from the MongoDB database.

## Technologies Used

- **Node.js:** JavaScript runtime for building the server-side of the application.
- **Express.js:** Web framework for Node.js used to handle routing and middleware.
- **MongoDB:** NoSQL database used to store user data.
- **Mongoose:** ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Postman:** Tool for testing the API endpoints.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v12.x or later)
- [MongoDB](https://www.mongodb.com/) (local instance or MongoDB Atlas)
- [Postman](https://www.postman.com/) or any other HTTP client

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/user-data-management-api.git
    cd user-data-management-api
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

3. **Set up the environment variables:**

   Create a `.env` file in the root directory and add the following environment variables:

    ```env
    PORT=8000
    MONGO_URI=mongodb://localhost:27017/
    ```

    Replace `MONGO_URI` with your MongoDB connection string if you're using a remote MongoDB instance (e.g., MongoDB Atlas).

4. **Start the server:**

    ```bash
    npm start
    ```

    The server will start on the port specified in the `.env` file (default is `3000`).

## API Endpoints

### 1. Create a User

- **Method:** `POST`
- **Endpoint:** `/api/users`
- **Description:** Add a new user to the database.
- **Request Body:**
  
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "age": 30
  }
