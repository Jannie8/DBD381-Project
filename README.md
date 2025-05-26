**Prerequisires:**
Make sure the following is installed:
1. Node.js
2. Docker Dektop
3. Postman (optional, for testing)

If using docker run the following in the root folder:
docker compose up -d

**Install Dependencies**
npm install

**Start the Server**
node app.js

**Test these in Postman**
GET /api/products
GET /api/products/:id
POST /api/products
PUT /api/products/:id
DELETE /api/products/:id

Similar routes exist for /api/orders, /api/users, /api/reviews, and /api/inventory.
