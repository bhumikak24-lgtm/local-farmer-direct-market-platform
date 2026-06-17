# Authentication API

## Register User

POST /api/auth/register

Request

{
"full_name": "Ramesh",
"email": "ramesh@gmail.com",
"password": "password123",
"role": "farmer"
}

Response

{
"message": "User registered successfully"
}
