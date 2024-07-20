# nodejsRestFullApi
 
```markdown
# Person Management System - RESTful API

A comprehensive RESTful API for managing persons, built with Node.js, Express, and MongoDB. This project is designed for those who want to study and understand the structure and implementation of a RESTful API.

## Features

- **Display All Persons**: Fetch and display all registered persons.
- **Register Person**: Create a new person with fields such as name, email, address, and password.
- **Update Person**: Update the details of an existing person.
- **Delete Person**: Remove a person from the database.
- **Login**: Authenticate a person using their email and password.
- **Logout**: Invalidate the current session token.

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing person data.
- **Mongoose**: ODM library for MongoDB.
- **bcryptjs**: Library for hashing passwords.
- **jsonwebtoken**: Library for handling JSON Web Tokens (JWT).
- **dotenv**: Module for loading environment variables.
- **Helmet**: Middleware for securing Express apps by setting various HTTP headers.

## Project Structure

```plaintext
├── controllers
│   └── PersonController.js   # Controller logic for person-related operations
├── middleware
│   └── userAuth.js           # Middleware for user authentication
    └── errorMiddleware.js           # Middleware for error handling
├── models
│   └── PersonModel.js        # Mongoose schema and model for Person
├── routes
│   └── personRoutes.js       # Route definitions for person-related endpoints
├── util
│   └── jwt.js                # Utility functions for JWT handling
├── config
│   └── db.js                 # Database connection setup
├── .env                      # Environment variables
├── app.js                    # Main application file
├── package.json              # Project metadata and dependencies
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/saurabhdhumane/nodejsRestFullApi
   ```

2. Navigate to the project directory:
   ```bash
   cd nodejsRestFullApi
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file and add your environment variables:
   ```
   PORT=8080
   DB_CONNECT=your_mongodb_connection_string
   JWT_SECRET_KEY=your_jwt_secret_key
   ```

5. Start the server:
   ```bash
   npm start
   ```

## Usage

- **GET /**: Display all persons.
- **POST /register**: Register a new person.
- **PATCH /update**: Update an existing person.
- **DELETE /delete**: Delete a person.
- **POST /login**: Login a person.
- **POST /logout**: Logout a person.

## Learning Objectives

- Understand the structure of a RESTful API project.
- Learn how to implement CRUD operations with Express and MongoDB.
- Study user authentication using JWT.
- Learn to handle errors and secure your API with middleware.

## Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.
```

Feel free to replace `https://github.com/saurabhdhumane/nodejsRestFullApi` with the actual URL of your GitHub repository. Adjust any other parts as necessary to better fit your specific project details.
