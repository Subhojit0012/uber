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
  * `email`: Required and must be a valid email format.
  * `fullName.firstname`: Required, must be a string, and at least 3 characters long.
  * `password`: Required and must be at least 6 characters long.

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
-  `on success:`
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
-  `on error:`
  ```json
    {
        "message": "User not found!"
    }
  ```

### Validation Rule: [Login]
**Login Validation:**
 * `email:`  Required and must be a valid email format.
 * `password:`Required and must be at least 6 characters long.



Feel free to modify the content as needed to fit your project's specific requirements!