# 👜 BagBazaar - Backend

**BagBazaar** is a backend system for managing users, admins, and products using the **Node.js**, **Express**, and **MongoDB** stack. It supports user registration and login with secure password hashing and includes admin-only access and schema-based product management.

---

## 📌 Features

- ✅ User Registration & Login  
- 🔒 Password encryption with **bcrypt**  
- 🛡️ Admin creation (available only in development mode)  
- 🗂️ Modular architecture with Models, Routes, Middlewares  
- 🧾 MongoDB Schemas for Users, Admins, and Products  
- 📤 File upload setup with **Multer**  
- 📑 EJS views for testing or prototyping (optional)  

---

## 🛠️ Technologies Used

| Tool / Library | Purpose                    |
|----------------|----------------------------|
| Node.js        | JavaScript runtime         |
| Express.js     | Web framework              |
| MongoDB        | NoSQL database             |
| Mongoose       | MongoDB ORM                |
| bcrypt         | Password hashing           |
| dotenv         | Environment configuration  |
| multer         | File upload middleware     |
| EJS            | Template engine (optional) |

---

## 📁 Project Structure

BagBazaar/
├── config/ # MongoDB connection
├── controllers/ # Logic handlers (optional)
├── middlewares/ # Multer, Auth
├── models/ # Mongoose schemas
│ ├── userModel.js
│ ├── adminModel.js
│ └── productModel.js
├── routes/ # API routes
│ ├── usersRouter.js
│ ├── adminRouter.js
│ └── productRouter.js
├── views/ # EJS views for testing
├── .env # Environment variables
├── app.js # Main server file
└── package.json # Dependencies

yaml
Copy
Edit

---

## 🌐 API Endpoints

| Method | Endpoint             | Function                         |
|--------|----------------------|----------------------------------|
| POST   | `/users/register`    | Register a new user              |
| POST   | `/users/login`       | Log in an existing user          |
| POST   | `/admin/create`      | Create an admin (dev only)       |
| GET    | `/admin/`            | Admin test route                 |
| POST   | `/upload`            | (Future) File upload via Multer  |

---

## 🧪 Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/chiragarya67/BagBazaar.git
cd BagBazaar
npm install
2. Add Environment Variables
Create a .env file in the root directory and add:

ini
Copy
Edit
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
3. Start the Server
bash
Copy
Edit
npm start
🖼️ Preview
⚠️ You can upload your backend screenshots (folder structure, schema, etc.) and replace the links below with actual paths.

Folder Structure

User Schema

GitHub View

👨‍💻 Developed by
Chirag Arya
🔗 GitHub: @chiragarya67

📄 License
This project is licensed under the MIT License.
