import requests

BASE_URL = "http://localhost:8000/api"

def test_get_products():

    response = requests.get(
        f"{BASE_URL}/products/"
    )

    assert response.status_code == 200