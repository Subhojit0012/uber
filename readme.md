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
```
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
```
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
```
    {
  "errors": [
    {
      "msg": "Email required!",
      "param": "email"
    }
  ]
}
```