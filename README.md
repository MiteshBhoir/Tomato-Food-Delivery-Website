# 🍅 Tomato - Full Stack Food Delivery Platform

Tomato is a modern full-stack food delivery application that allows users to browse food items, manage carts, place orders, and make secure online payments. The platform includes a dedicated admin dashboard for managing food inventory, tracking orders, and updating delivery statuses.

## 🌐 Live Demo

🔗 Customer App: https://tomato-frontend-delta.vercel.app/ 
---

## 🚀 Features

### 👤 Customer Features

* User Registration & Login
* JWT Authentication
* Browse Food Categories
* Explore Menu Items
* Add Items to Cart
* Remove Items from Cart
* Dynamic Cart Updates
* Place Orders Online
* Stripe Payment Integration
* Order Verification
* View Order History
* Responsive Design

### 🛠️ Admin Features

* Admin Dashboard
* Add Food Items
* Upload Food Images
* View Food Inventory
* Delete Food Items
* Manage Customer Orders
* Update Delivery Status
* Track Active Orders

### 💳 Payment Features

* Stripe Checkout Integration
* Secure Online Payments
* Payment Verification
* Automatic Order Status Updates

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Context API
* Axios
* CSS3

### Admin Panel

* React.js
* Vite
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Authentication

* JWT Authentication
* Bcrypt Password Hashing

### Payment Gateway

* Stripe API

### File Uploads

* Multer

### Database

* MongoDB Atlas

--- 
## 📂 Project Structure

```bash
Tomato/
│
├── admin/
│   ├── public/
│   │   └── vite.svg
│   │
│   ├── src/
│   │   ├── assets/
│   │   │   ├── add_icon.png
│   │   │   ├── assets.js
│   │   │   ├── logo.png
│   │   │   ├── order_icon.png
│   │   │   ├── parcel_icon.png
│   │   │   ├── profile_image.png
│   │   │   └── upload_area.png
│   │   │
│   │   ├── components/
│   │   │   ├── Navbar/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── Navbar.css
│   │   │   │
│   │   │   └── Sidebar/
│   │   │       ├── Sidebar.jsx
│   │   │       └── Sidebar.css
│   │   │
│   │   ├── pages/
│   │   │   ├── Add/
│   │   │   │   ├── Add.jsx
│   │   │   │   └── Add.css
│   │   │   │
│   │   │   ├── List/
│   │   │   │   ├── List.jsx
│   │   │   │   └── List.css
│   │   │   │
│   │   │   └── Orders/
│   │   │       ├── Orders.jsx
│   │   │       └── Orders.css
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── vercel.json
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── cartController.js
│   │   ├── foodController.js
│   │   ├── orderController.js
│   │   └── userController.js
│   │
│   ├── middlewares/
│   │   ├── auth.js
│   │   └── multer.js
│   │
│   ├── models/
│   │   ├── foodModel.js
│   │   ├── orderModel.js
│   │   └── userModel.js
│   │
│   ├── routes/
│   │   ├── cartRoute.js
│   │   ├── foodRoute.js
│   │   ├── orderRoute.js
│   │   └── userRoute.js
│   │
│   ├── uploads/
│   │   └── food-images
│   │
│   ├── server.js
│   ├── package.json
│   └── vercel.json
│
├── frontend/
│   ├── public/
│   │   └── header_img.png
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── AppDownload/
│   │   │   ├── ExploreMenu/
│   │   │   ├── FoodDisplay/
│   │   │   ├── FoodItem/
│   │   │   ├── Footer/
│   │   │   ├── Header/
│   │   │   ├── LoginPopup/
│   │   │   └── Navbar/
│   │   │
│   │   ├── context/
│   │   │   └── StoreContext.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   ├── Cart/
│   │   │   ├── PlaceOrder/
│   │   │   ├── MyOrders/
│   │   │   └── Verify/
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── vercel.json
│
├── README.md
└── .gitignore
```

### Architecture Overview

* **Frontend** → Customer-facing food ordering application built with React and Vite.
* **Admin Panel** → Separate dashboard for managing food items and customer orders.
* **Backend API** → Express.js REST API handling authentication, cart management, orders, payments, and database operations.
* **Database** → MongoDB storing users, food items, carts, and orders.
* **Payments** → Stripe Checkout integration for secure online transactions.
* **Authentication** → JWT-based user authentication and authorization.


---

## 📌 Core Functionalities

### Authentication System

* User Registration
* User Login
* JWT Token Generation
* Password Hashing with Bcrypt
* Protected Routes

### Cart Management

* Add Products to Cart
* Remove Products from Cart
* Retrieve User Cart Data
* Quantity Management

### Food Management

* Add Food Items
* Upload Images
* View Food Inventory
* Delete Food Items

### Order Management

* Create Orders
* Track Order Status
* View User Orders
* Manage Orders via Admin Dashboard
* Update Delivery Status

### Payment Processing

* Stripe Checkout Integration
* Payment Verification
* Order Confirmation
* Automatic Cart Reset After Successful Payment

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/MiteshBhoir/Tomato-Food-Delivery-Website.git
cd tomato
```

### Backend Setup

```bash
cd backend
npm install
```

Create `.env`

```env
PORT=4000

MONGODB_URI=

JWT_SECRET=

STRIPE_SECRET_KEY=
```

Run Backend

```bash
npm run server
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

### Admin Dashboard Setup

```bash
cd admin
npm install
npm run dev
```

---

## 🔌 API Endpoints

### User APIs

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/user/register | Register User |
| POST   | /api/user/login    | Login User    |

### Cart APIs

| Method | Endpoint         | Description           |
| ------ | ---------------- | --------------------- |
| POST   | /api/cart/add    | Add Item to Cart      |
| POST   | /api/cart/remove | Remove Item from Cart |
| POST   | /api/cart/get    | Get Cart Data         |

### Food APIs

| Method | Endpoint         | Description      |
| ------ | ---------------- | ---------------- |
| POST   | /api/food/add    | Add Food Item    |
| GET    | /api/food/list   | Get Food List    |
| POST   | /api/food/remove | Delete Food Item |

### Order APIs

| Method | Endpoint              | Description         |
| ------ | --------------------- | ------------------- |
| POST   | /api/order/place      | Place Order         |
| POST   | /api/order/verify     | Verify Payment      |
| POST   | /api/order/userorders | User Orders         |
| GET    | /api/order/list       | List All Orders     |
| POST   | /api/order/status     | Update Order Status |

---

## 🔒 Security Features

* JWT Authentication
* Password Hashing using Bcrypt
* Protected APIs
* Stripe Secure Payments
* Input Validation
* Environment Variable Protection

---

## 📸 Screenshots

Add screenshots of:

* Home Page
* Food Menu
* Cart Page
* Checkout Page
* Order History
* Admin Dashboard
* Order Management Panel

---

## 🌟 Future Enhancements

* Google Authentication
* Wishlist Feature
* Real-Time Order Tracking
* Email Notifications
* Razorpay Integration
* Restaurant Partner Portal
* Coupons & Discounts
* Reviews & Ratings
* AI-Based Food Recommendations

---

## 👨‍💻 Author

**Mitesh Bhoir**

Full Stack Developer | AI/ML Engineer

---

## 📄 License

This project is licensed under the MIT License.
