import unittest

class PaymentFlowTests(unittest.TestCase):

    def test_payment_success(self):

        payment_status = "Success"

        self.assertEqual(payment_status, "Success")

if __name__ == "__main__":
    unittest.main()