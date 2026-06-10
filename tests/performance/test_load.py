import time

def test_response_time():

    start = time.time()

    # Simulated API call
    time.sleep(0.1)

    end = time.time()

    response_time = end - start

    assert response_time < 1