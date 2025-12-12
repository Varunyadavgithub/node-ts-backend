# 📚 Node.js + Express + TypeScript — Book Management API

A simple REST API built with **Node.js**, **Express**, and **TypeScript**, following the **MVC architecture**.
It includes user authentication, JWT-based authorization, role-based permissions, and CRUD operations for books.

---

## 🚀 Features

* 🔐 **User Authentication (Signup, Login, Logout)**
* 🛂 **JWT-based Authorization**
* 🧑‍💼 **Role-Based Access Control (Admin & Creator)**
* 📚 **Book CRUD Operations**
* 🗂 **MVC Folder Structure**
* 🍪 **Cookie-based token handling**
* 📝 **TypeScript + Express + Mongoose**

---

## 📁 Project Structure (MVC)

```
src/
│── configs/
│     └── db.ts
|
│── controllers/
│     ├── book.controller.ts
│     └── user.controller.ts
|
│── middlewares/
│     └── auth.ts
|
│── models/
│     ├── Book.ts
│     └── User.ts
│
│── routes/
│     ├── auth.routes.ts
│     └── book.routes.ts
│
│── utils/
│     └── role.ts
│
│── index.ts
|
.env
.gitignore
package.json
Readme.md
tsconfig.json
```

---

## 📦 Installation

```sh
git clone https://github.com/Varunyadavgithub/node-ts-backend.git
cd node-ts-backend
npm install
```

---

## 🔧 Environment Variables

Create a `.env` file:

```
PORT = 5000
HOST_URL = your_frontend_url
DB_URL = your_mongodb_connection_string
JWT_SECERET = your_jwt_seceret
```

---

## ▶️ Running the Server

### Development

```sh
npm run dev
```

### Build

```sh
npm run build
```

### Production

```sh
npm start
```

---

# 🛣 API Routes

## 🔑 Authentication Routes (`/api/auth`)

### **POST /signup**

Creates a new user.
Required fields:

```json
{
  "name": "",
  "email": "",
  "phone": "",
  "username": "",
  "password": "",
  "role": "admin | creator | user"
}
```

### **POST /login**

Returns a JWT token in cookies.

### **GET /logout**

Clears authentication cookie.

---

## 📚 Book Routes (`/api/books`)

> **Protected routes — require login**
> Only **admin** or **creator** can add/update/delete books.

### **GET /get-books**

Fetch all books.

### **POST /add-book**

```json
{
  "name": "",
  "author": "",
  "publishYear": "",
  "description": ""
}
```

### **PUT /update-book/:id**

Update book details.

### **DELETE /delete-book/:id**

Delete a book.

---

# 🔐 Authentication & Roles

### Middleware: `verifyToken`

* Extracts JWT from cookies.
* Sets `req.id` and `req.role`.

### Roles Defined in `/utils/role.ts`

```ts
export const ROLES = {
  admin: "admin",
  creator: "creator",
  user: "user"
}
```

### Route Protection Example

```ts
if (![ROLES.admin, ROLES.creator].includes(req.role as string)) {
  return res.status(401).json({
    success: false,
    message: "Sorry, you don’t have the required permissions."
  });
}
```

---

# 🧪 Sample Response Format

```ts
export interface IResponse {
  success: boolean;
  message: string;
  data?: any;
}
```

Example:

```json
{
  "success": true,
  "message": "Book added successfully.",
  "data": { "name": "Example Book" }
}
```

---

# 🤝 Contributing

Pull requests are welcome.
Open an issue for feature requests or bug reports.

---

# ⭐️ Show Your Support

If you like this project, give it a ⭐️ on GitHub!