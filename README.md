# micro-service
Welcome to the micro-service project developed as a part of the "Dev init #2" course. This project involves building three microservices within the same repository using NestJS and TypeScript.

## Project Overview
1. **user-service:**
* Provides CRUD (Create, Read, Update, Delete) operations for managing users.
* Running on `PORT:3001`

2. **product-service:**
* Offers CRUD operations for managing products.
* Running on `PORT:3002`

3. **order-service:**
* Manages orders with CRUD functionalities.
* Running on `PORT:3003`

4. **gateway:**
* The client application for interacting with the microservices.
* Running on `localhost:3000`

## Prerequisites
Ensure Node.js and npm are installed on your machine.

## Setup Instructions
1. **Clone Repository:**
```
git clone https://github.com/Awassanan/micro-service.git
cd micro-service
```

2. **Install Dependencies:**
```
npm install
```

## Running the Services
1. Start `user-service`:
```
cd users
nest start
```

2. Start `product-service`:
```
cd products
nest start
```

3. Start `order-service`:
```
cd orders
nest start
```

4. Start `gateway`:
```
cd gateway
nest start
```

## Accessing the Services
Use the gateway service to access the microservices:
* Users: http://localhost:3000/users
* Products: http://localhost:3000/products
* Orders: http://localhost:3000/orders
* Specific user, product, or order by ID: Append /id to the respective URL for PUT or DELETE operations.

## Example Requests
1. **user-service**
* Get All Users:
```
GET http://localhost:3000/users
```

* Get User By ID:
```
GET http://localhost:3000/users/1
```

* Post new user:
```
POST http://localhost:3000/users
Body: {
    "id": "1",
    "firstName": "Miab",
    "lastName": "The Alien Dog",
    "dateOfBirth": "09-10-2012",
    "address": "123 test street",
    "email": "miab@mail.com",
    "phone": "080-000-0000"
}
```

* Put user detail:
```
PUT http://localhost:3000/users/1
Body: {
    "id": "1",
    "firstName": "MiabZaza",
    "lastName": "The Alien Dog 55",
    "dateOfBirth": "09-10-2012",
    "address": "123 test2 street",
    "email": "miabzaza@mail.com",
    "phone": "080-000-0000"
}
```

* Delete user:
```
DELETE http://localhost:3000/users/1
```

---

2. **product-service**
* Get All Products:
```
GET http://localhost:3000/products
```

* Get Product By ID:
```
GET http://localhost:3000/products/1
```

* Post new product:
```
POST http://localhost:3000/products
Body: {
    "id": "1",
    "name": "iPad",
    "detail": "Air3 2019",
    "price": 30000.25,
    "stock": 20,
    "category": "Tablet"
}
```

* Put product detail:
```
PUT http://localhost:3000/products/1
Body: {
    "id": "1",
    "name": "On Sale Now! iPad",
    "detail": "Air3 2019 10.5 inch",
    "price": 30000.25,
    "stock": 15,
    "category": "Tablet, Electronics"
}
```

* Delete product:
```
DELETE http://localhost:3000/products/1
```

---

3. **order-service**
* Get All Orders:
```
GET http://localhost:3000/orders
```

* Get Order By ID:
```
GET http://localhost:3000/orders/1
```

* Post new order:
```
POST http://localhost:3000/orders
Body: {
    "id": "1",
    "orderId": "1",
    "userId": "1",
    "productId": "1",
    "quantity": 2,
    "orderDate": "05-05-2024",
    "discount": 0.1,
    "paymentChannel": "credit card",
    "destinationAddress": "456 Test street"
}
```

* Put product detail:
```
PUT http://localhost:3000/products/1
Body: {
    "id": "1",
    "orderId": "1",
    "userId": "1",
    "productId": "1",
    "quantity": 3,
    "orderDate": "05-05-2024",
    "discount": 0.2,
    "paymentChannel": "mobile banking",
    "destinationAddress": "456 Test street"
}
```

* Delete product:
```
DELETE http://localhost:3000/orders/1
```
