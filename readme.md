# Uber Clone API

This project is a simple API for user registration and authentication, inspired by the Uber platform. It is built using Node.js, Express, and MongoDB with Mongoose for data modeling.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [License](#license)

## Installation

1. Clone the repository:

```bash
   git clone https://github.com/yourusername/uber-clone-api.git

   cd uber-clone-api

    npm install
```

## ENVIRONMENT VARIABLE

```
    MONGODB_URI= your_mongodb_uri
    JWT_SECRET= your_jwt_secret
```

## Middlewares:

### **Authentication Middleware:**

- auth.middleware

_Function review_

`Retrieves the JWT token:`It checks for the token in both cookies and the Authorization header.

`Validates the token:`It verifies the token using the secret key stored in the environment variable JWT_SECRET.

`Fetches the user or captain:`It uses the decoded token ID to find the corresponding user in the database.

`Attaches the user or captain object:`If the user is found, it attaches the user object to the request object for further use.

`Handles errors:`It catches any errors that occur during the process and sends an appropriate error response.
