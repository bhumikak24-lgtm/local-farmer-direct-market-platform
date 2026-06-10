# Database Spec

## Tables

### users
- id
- name
- role (farmer/buyer)
- location

### products
- id
- farmer_id
- name
- price
- quantity

### orders
- id
- buyer_id
- product_id
- status