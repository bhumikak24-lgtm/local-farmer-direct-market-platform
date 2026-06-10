import unittest

class UserTests(unittest.TestCase):

    def test_farmer_role(self):
        role = "farmer"
        self.assertEqual(role, "farmer")

    def test_consumer_role(self):
        role = "consumer"
        self.assertEqual(role, "consumer")

    def test_email_validation(self):
        email = "user@gmail.com"
        self.assertIn("@", email)

if __name__ == "__main__":
    unittest.main()