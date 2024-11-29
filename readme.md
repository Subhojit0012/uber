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

## ENVIRONMENT VARIABLE
```
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
```

## API ENDPOINTS
# User Registration

 Request body:
```json
    {
        "fullName": {
            "firstname": "John",
            "lastname": "Doe"
         },
        "email": "john.doe@example.com",
        "password": "yourpassword"
    }
```
Response
on success:
```json
    {
  "token": "your_jwt_token",
  "user": {
    "fullName": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```
on error: 
```json
    {
  "errors": [
    {
      "msg": "Email required!",
      "param": "email"
    }
  ]
}
```
### Validation Rule: [Registration]
-**Registration Validation:**
  * email: Required and must be a valid email format.
  * fullName.firstname: Required, must be a string, and at least 3 characters long.
  * password: Required and must be at least 6 characters long.

### User Login

- **Endpoint:** `/auth/v2/user/login`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
  "email": "john.doe@example.com",
  "password": "yourpassword"
  }

  ```

Response:
- * on success:
  ```json
    {
  "token": "your_jwt_token",
  "user": {
    "fullName": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
  }

  ```
- * on error:
```json
  {
  "message": "User not found!"
}
```

### Validation Rule: [Login]
**Login Validation:**
 * email:  Required and must be a valid email format.
 * password: Required and must be at least 6 characters long.



Feel free to modify the content as needed to fit your project's specific requirements!