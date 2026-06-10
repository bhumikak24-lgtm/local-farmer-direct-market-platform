# Database Design

## Users Table

| Field | Type |
|---------|---------|
| id | Integer |
| full_name | String |
| email | String |
| password | String |
| role | String |

## Products Table

| Field | Type |
|---------|---------|
| id | Integer |
| farmer_id | Integer |
| name | String |
| price | Decimal |
| quantity | Integer |

## Orders Table

| Field | Type |
|---------|---------|
| id | Integer |
| consumer_id | Integer |
| total_amount | Decimal |
| status | String |

## Reviews Table

| Field | Type |
|---------|---------|
| id | Integer |
| product_id | Integer |
| rating | Integer |
| comment | Text |

## Relationships

Users → Products

Products → Orders

Products → Reviews