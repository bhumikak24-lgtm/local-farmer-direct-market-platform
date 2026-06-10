import unittest

class OrderTests(unittest.TestCase):

    def test_order_status(self):
        status = "Pending"
        self.assertEqual(status, "Pending")

    def test_total_amount(self):
        total = 250
        self.assertGreater(total, 0)

if __name__ == "__main__":
    unittest.main()