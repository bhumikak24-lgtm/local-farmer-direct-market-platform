# FarmConnect System Architecture

+----------------------+
|      Frontend        |
| React + Tailwind CSS |
+----------+-----------+
           |
           v
+----------------------+
|   Django REST API    |
+----------+-----------+
           |
           v
+----------------------+
|     PostgreSQL       |
|      Database        |
+----------------------+

Users
 |
 +--> Farmers
 |
 +--> Consumers
 |
 +--> Admin