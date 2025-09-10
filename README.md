# Mini Messageboard

A simple message board built with **Express.js**, **EJS**, and **PostgreSQL**.

## 🚀 Features
- View all messages
- Add new messages
- View message details
- PostgreSQL database integration

## 🛠️ Setup Instructions

### 1. Clone this repository
```bash
git clone https://github.com/realiyams/odin-mini-message-board.git
cd my-messageboard
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure PostgreSQL in `db.js`
```js
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "messageboard",
  password: "postgres", // change to your password
  port: 5432,
});
```

### 4. Initialize the database
```bash
node initdb.js
```

### 5. Start the server
```bash
node app.js
```

### 6. Open in browser
```text
http://localhost:3000
```
