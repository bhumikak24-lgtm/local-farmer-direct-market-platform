import requests

BASE_URL = "http://localhost:8000/api"

def test_login_api():

    response = requests.post(
        f"{BASE_URL}/auth/login/",
        json={
            "email": "test@gmail.com",
            "password": "password123"
        }
    )

    assert response.status_code in [200, 201]