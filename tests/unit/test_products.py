import unittest

class ProductTests(unittest.TestCase):

    def test_product_name(self):
        product = "Tomatoes"
        self.assertEqual(product, "Tomatoes")

    def test_product_price(self):
        price = 40
        self.assertGreater(price, 0)

    def test_product_stock(self):
        stock = 100
        self.assertGreaterEqual(stock, 0)

if __name__ == "__main__":
    unittest.main()