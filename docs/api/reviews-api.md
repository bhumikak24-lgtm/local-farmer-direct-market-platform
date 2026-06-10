# Reviews API

## Add Review

POST /api/reviews

Request

{
  "product_id": 1,
  "rating": 5,
  "comment": "Fresh vegetables"
}

Response

{
  "message": "Review submitted"
}