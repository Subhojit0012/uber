## API ENDPOINTS

# User

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

- `email`: Required and must be a valid email format.
- `fullName.firstname`: Required, must be a string, and at least 3 characters long.
- `password`: Required and must be at least 6 characters long.

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

- `on success:`

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

- `on error:`

```json
{
	"message": "User not found!"
}
```

### Validation Rule: [Login]

**Login Validation:**

- `email:` Required and must be a valid email format.
- `password:`Required and must be at least 6 characters long.

Feel free to modify the content as needed to fit your project's specific requirements!


# Captain
## Register captain:

- endpoint: `/captain/register `

- Request body :
```json
{
    "fullname": {
        "firstname":"Toby",
        "lastname": "Ray"
    },
    "email":"tr@gmail.com",
    "password":"12345678",
    "vehicle":{
        "color":"red",
        "plate":"WB1234-2A",
        "capacity":4,
        "vehicleType":"car"
    }
}
```
- Response body :

```json
{
    "captain": {
        "fullname": {
            "firstname": "Toby",
            "lastname": "Ray"
        },
        "email": "tr@gmail.com",
        "password": "$2b$10$dhBSoNfF/F6OkAGbvKSa/OD15RyOHc.h2s3796vZz7AYFSAfTdl.a",
        "status": "offline",
        "vehicle": {
            "color": "red",
            "plate": "WB1234-2A",
            "capacity": 4,
            "vehicleType": "car"
        },
        "_id": "67a055e29a27cf6e1fa3fb5e",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2EwNTVlMjlhMjdjZjZlMWZhM2ZiNWUiLCJlbWFpbCI6InRyQGdtYWlsLmNvbSIsImZ1bGxuYW1lIjp7ImZpcnN0bmFtZSI6IlRvYnkiLCJsYXN0bmFtZSI6IlJheSJ9LCJ2ZWhpY2xlIjp7ImNvbG9yIjoicmVkIiwicGxhdGUiOiJXQjEyMzQtMkEiLCJjYXBhY2l0eSI6NCwidmVoaWNsZVR5cGUiOiJjYXIifSwiaWF0IjoxNzM4NTYwOTk0LCJleHAiOjE3Mzg1NjQ1OTR9.xaElzLxFJusldx3oyWi8-ainjtXPY_idE0-14usyGpA"
}
```
## Login captain:
 - endpoint : ` captain/login `

- Request body:
```json
 
```

- Response body:

```json

```
## Captain profile:

- edpoint : ` captain\captain-profile `

- Request :
```json

```
- Response :

```json

```