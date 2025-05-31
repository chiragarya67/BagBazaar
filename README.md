
# 👜 BagBazaar - Backend

BagBazaar is a backend project for an online bag shopping platform, developed using Node.js, Express.js, and MongoDB. It provides secure user authentication, admin access, and product management with proper folder structure and middleware.

---

## 🚀 Features

- User registration and login  
- Password encryption using **bcrypt**  
- Admin creation (for development purposes)  
- Product schema with MongoDB  
- File upload setup using **Multer**  
- Well-structured MVC architecture  
- Environment configuration via `.env`  

---

## 🧰 Technologies Used

- Node.js  
- Express.js  
- MongoDB + Mongoose  
- bcrypt  
- multer  
- dotenv  
- EJS (for testing templates)

---

## 📦 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB (local or Atlas)

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

## 🗂️ Project Structure

```bash
BagBazaar/
├── config/              # MongoDB connection
├── controllers/         # (Optional) route logic
├── middlewares/         # Auth & Multer middleware
├── models/              # Mongoose schemas
│   ├── userModel.js
│   ├── adminModel.js
│   └── productModel.js
├── routes/              # API routes
│   ├── usersRouter.js
│   ├── adminRouter.js
│   └── productRouter.js
├── views/               # EJS templates (optional)
├── .env                 # Environment variables
├── app.js               # Main app entry
├── package.json         # Project metadata
```

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

- **Chirag Arya**  
- **Email:** chiragarya5678@gmail.com  
- **GitHub:** [chiragarya67](https://github.com/chiragarya67)
