import requests

BASE_URL = "http://localhost:8000/api"

def test_get_orders():

    response = requests.get(
        f"{BASE_URL}/orders/"
    )

    assert response.status_code == 200