# 👜 BagBazaar - Backend

**BagBazaar** is the backend of an online bag shopping platform built with **Node.js**, **Express.js**, and **MongoDB**. It includes user authentication, admin controls, product management, and file upload handling — all organized in a clean MVC architecture.

---

## 🚀 Features

- User registration and login system
- Secure password hashing using **bcrypt**
- Admin creation (for development/testing purposes)
- Product CRUD operations with image uploads
- File handling using **Multer**
- Environment variable setup using `.env`
- Clean project structure with MVC pattern
- EJS templates for basic frontend testing (optional)

---

## 🧰 Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (with Mongoose)  
- **Security:** bcrypt  
- **File Uploads:** multer  
- **Templating:** EJS (optional)  
- **Environment Config:** dotenv

---

## ⚙️ Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/chiragarya67/BagBazaar.git
   ```

2. **Navigate to the project folder:**

   ```bash
   cd BagBazaar
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

4. **Create a `.env` file and add the following:**

   ```ini
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=your_mongodb_connection_string
   ```

---

## ▶️ Running the Server

To start the backend server, run:

```bash
npm start
```

The server will start on:

```
http://localhost:5000
```

---
BagBazaar/
├── config/              # MongoDB connection config
├── controllers/         # Route logic handlers
├── middlewares/         # Auth and file upload middleware
├── models/              # Mongoose schemas
│   ├── userModel.js
│   ├── adminModel.js
│   └── productModel.js
├── routes/              # All API route files
│   ├── usersRouter.js
│   ├── adminRouter.js
│   └── productRouter.js
├── views/               # EJS templates (for testing)
├── uploads/             # Uploaded image files
├── .env                 # Environment variables
├── app.js               # Main application entry
├── package.json         # Dependencies and scripts

---

## 📡 API Endpoints

| Method | Route               | Description                   |
|--------|---------------------|-------------------------------|
| POST   | `/users/register`   | Register a new user           |
| POST   | `/users/login`      | Login for users               |
| POST   | `/admin/create`     | Create admin (dev only)       |
| GET    | `/admin/`           | Admin check/test route        |
| POST   | `/upload`           | Upload file using Multer      |

---

## 🪪 License

This project is licensed under the **MIT License**.

---

## 🙋‍♂️ Developed By

- **Chirag**  
- **Email:** chiragarya5678@gmail.com  
- **GitHub:** [chiragarya67](https://github.com/chiragarya67)
