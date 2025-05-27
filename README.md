**Prerequisires:**
Make sure the following is installed:
1. Node.js
2. Docker Dektop
3. Postman (optional, for testing)

**Install Dependencies**

npm install

**Start the Server**

node app.js

**Test these in Postman**

1. GET /api/products
2. GET /api/products/:id
3. POST /api/products
4. PUT /api/products/:id
5. DELETE /api/products/:id

Similar routes exist for /api/orders, /api/users, /api/reviews, and /api/inventory.

**If using docker run the following in the root folder:**

1. docker compose up –d 
2. docker ps 
3. docker exec –it mongo-replica mongosh 
4. rs.initialize() 
5. rs.status() 

