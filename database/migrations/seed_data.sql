INSERT INTO users
(full_name,email,phone,password_hash,role)
VALUES
('Ramesh Kumar','ramesh@gmail.com','9876543210','hashed_password','farmer'),
('Anitha Rao','anitha@gmail.com','9876543211','hashed_password','consumer');

INSERT INTO products
(farmer_id,name,category,description,price,stock_quantity,location)
VALUES
(1,'Organic Tomatoes','Vegetables','Fresh farm tomatoes',40.00,100,'Hyderabad'),
(1,'Chilles','Vegetables','Spicy and fresh green chilles',70.00,80,'Hyderabad');

INSERT INTO orders
(consumer_id,total_amount,order_status)
VALUES
(2,200.00,'Pending');

INSERT INTO order_items
(order_id,product_id,quantity,item_price)
VALUES
(1,1,5,40.00);

INSERT INTO reviews
(product_id,consumer_id,rating,comment)
VALUES
(1,2,5,'Excellent quality vegetables');
