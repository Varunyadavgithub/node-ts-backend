# 🚀 TypeScript Node.js API Starter

A clean and minimal starter template for building **REST APIs using TypeScript and Node.js**.
This project provides a solid foundation with a scalable folder structure, type-safety, environment configuration, and ready-to-use Express setup.

---

## 📁 Project Structure

```
src/
 ├── config/         # Environment & configuration files
 ├── controllers/    # Request handlers
 ├── routes/         # API routes
 ├── middlewares/    # Custom middlewares
 ├── services/       # Business logic
 ├── utils/          # Helper functions
 ├── app.ts          # Express app setup
 └── index.ts        # Entry point
```

---

## 🛠️ Tech Stack

* **Node.js**
* **TypeScript**
* **Express.js**
* **Nodemon / ts-node-dev**
* **dotenv**

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repo

```bash
git clone https://github.com/Varunyadavgithub/node-ts-backend.git
cd backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create environment file

Create a `.env` file in the root:

```
PORT=5000
```

### 4️⃣ Run the development server

```bash
npm run dev
```

### 5️⃣ Build for production

```bash
npm run build
```

### 6️⃣ Start production server

```bash
npm start
```

---

## 📌 Available Scripts

| Script          | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Runs server in dev mode with auto-reload |
| `npm run build` | Compiles TypeScript into JavaScript      |
| `npm start`     | Starts the compiled production server    |

---

## 📡 Example Endpoint

### `GET /api/health`

**Response:**

```json
{
  "status": "OK",
  "message": "API is running"
}
```

---

## 🧩 Future Improvements

* Add database integration (MongoDB / PostgreSQL / MySQL)
* Add authentication (JWT)
* Add validation (Zod / Yup / Joi)
* Write unit tests (Jest)

---

## 🤝 Contributing

Pull requests and improvements are always welcome!

---

## 📄 License

This project is licensed under the **MIT License**.