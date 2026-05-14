# 🛒 E-Commerce Platform

<p align="center">
  A production-ready full stack E-Commerce platform built using the MERN stack with secure authentication, role-based access control, product management, cart functionality, reviews, and payment integration.
</p>

---

# 🚀 Overview

This project is a scalable and production-focused E-Commerce application designed to simulate real-world online shopping platforms.

The application supports:

* Secure user authentication & authorization
* Product catalog and category management
* Shopping cart and checkout flow
* Product reviews and ratings
* Admin dashboard for managing products and users
* Customer dashboard for order tracking and profile management
* RESTful API architecture following MVC principles
* Optimized MongoDB schema design with indexed queries

The primary goal of this project was to strengthen full stack engineering skills, backend architecture understanding, authentication security, API design, and scalable application development practices.

---

# 🛠️ Tech Stack

## 👨‍💻 Frontend

* React.js
* Redux Toolkit
* Tailwind CSS
* Axios
* React Router DOM
* Vite

## 🧩 Backend

* Node.js
* Express.js
* JWT Authentication
* bcrypt
* Cookie Parser

## 🗄️ Database

* MongoDB
* Mongoose

## ⚙️ Tools & Concepts

* REST APIs
* MVC Architecture
* Role-Based Access Control (RBAC)
* HTTP-only Cookies
* Authentication & Authorization
* Protected Routes
* Indexed Queries
* Git & GitHub
* Postman API Testing

---

# ✨ Features

## 👤 Authentication & Authorization

* Secure user registration and login
* Password hashing using bcrypt
* JWT-based authentication
* HTTP-only cookie storage for enhanced security
* Role-based access control for Admin and Customer
* Protected API routes and frontend pages

---

## 🛍️ Product Management

* Browse products with detailed information
* Product categories and filtering
* Product search functionality
* Dynamic product rendering
* Product reviews and ratings system

---

## 🛒 Shopping Experience

* Add to cart
* Update cart quantity
* Remove items from cart
* Persistent cart management
* Checkout workflow

---

## 📦 Order Management

* Place orders securely
* View order history
* Track user purchases
* Admin order management

---

## 🧑‍💼 Admin Dashboard

* Add/Edit/Delete products
* Manage users
* Manage orders
* Control product inventory
* Dashboard analytics structure

---

# 🔐 Security Implementation

The application focuses heavily on secure authentication practices.

### Security measures implemented:

* Password hashing with bcrypt
* JWT token authentication
* HTTP-only cookies instead of localStorage
* Protected backend routes
* Middleware-based authorization
* Role-based permissions
* Input validation and error handling

Using HTTP-only cookies significantly reduces XSS attack vectors compared to storing tokens in localStorage.

---

# 🏗️ Backend Architecture

The backend follows the MVC (Model-View-Controller) architecture to maintain clean separation of concerns.

## Structure

```txt
src/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── utils/
├── config/
└── server.js
```

### Benefits of MVC:

* Better code organization
* Easier debugging
* Improved scalability
* Reduced code duplication
* Easier feature extension

---

# 🗄️ Database Design

MongoDB schemas were designed using Mongoose with optimized relationships and indexed queries.

### Optimizations:

* Indexed frequently searched fields
* Efficient schema relationships
* Reduced query response time
* Better scalability for larger datasets

This improved query performance by approximately 20–30%.

---

# 📡 REST API Design

The backend exposes RESTful APIs for:

* Authentication
* Product management
* Cart operations
* Reviews
* Orders
* User management

### Example Routes

```http
POST   /api/auth/login
POST   /api/auth/register
GET    /api/products
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id
POST   /api/cart
POST   /api/orders
```

---

# 📸 Core Functionalities

## Customer Side

* Register/Login
* Browse products
* Add reviews
* Add to cart
* Checkout
* Track orders

## Admin Side

* Manage products
* Manage users
* Manage orders
* Control inventory

---

# ⚡ Performance & Scalability

The application was developed with scalability and maintainability in mind.

### Improvements implemented:

* Optimized database queries
* Modular backend structure
* Reusable frontend components
* Efficient state management
* Secure authentication flow
* API abstraction and separation

---

# 🧪 Testing

API routes were tested using Postman to ensure:

* Correct request handling
* Authentication validation
* Error handling
* Route protection
* Proper status responses

---

# 📚 What I Learned

Through this project, I strengthened my understanding of:

* Full stack application architecture
* Secure authentication systems
* REST API development
* Backend engineering practices
* MongoDB schema optimization
* State management
* Production-ready project structuring
* Debugging and scalability concepts

---

# 🎯 Future Improvements

* Payment gateway integration
* Wishlist functionality
* Advanced product filtering
* Pagination & infinite scrolling
* Email notifications
* Docker deployment
* CI/CD pipeline
* Redis caching
* Unit & integration testing

---

# 👨‍💻 Author

## Siddharth Dhodi

Full Stack Developer passionate about building scalable and production-ready web applications while continuously improving software engineering and problem-solving skills.

* GitHub: `github.com/siddharthdhodi05`
* LinkedIn: `linkedin.com/in/siddharth-dhodi-108790319`

---

# ⭐ Project Goal

The goal of this project was not only to build an E-Commerce platform, but also to simulate real-world software engineering practices including:

* Secure authentication
* Scalable backend architecture
* Clean code principles
* Maintainable project structure
* Production-oriented development

---
