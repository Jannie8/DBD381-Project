**Prerequisires:**
Make sure the following is installed:
1. Node.js
2. Docker Dektop
3. Postman (optional, for testing)

**Install Dependencies**

npm install

**Test these in Postman**

1. GET /api/products
2. GET /api/products/:id
3. POST /api/products
4. PUT /api/products/:id
5. DELETE /api/products/:id

Similar routes exist for /api/orders, /api/users, /api/reviews, and /api/inventory.

**Run MongoDB with Docker //using bash terminal**
-if this is your fist time running MongoDB:
1. docker run -d -p 27017:27017 --name ecommerce-mongo mongo

-If you've created the container before:
1. docker start ecommerce-mongo

-then:
2. docker ps
3. rs.initialize() 
4. rs.status()

Run the Node.js app:
1. node app.js

**Run MongoDB with Docker //using Powershell terminal**
1. docker compose up -d
2. docker ps
3. docker exec -it ecommerce-mongo mongosh
4. rs.initialize() 
5. rs.status()
