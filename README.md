# Mini Messageboard

A simple message board built with **Express.js**, **EJS**, and **PostgreSQL**.

## 🚀 Features
- View all messages
- Add new messages
- View message details
- PostgreSQL database integration

## 🛠️ Setup Instructions

1. Clone this repository  
   git clone <repo-url>  
   cd my-messageboard  

2. Install dependencies  
   npm install  

3. Configure PostgreSQL in `db.js`  
   const pool = new Pool({  
     user: "postgres",  
     host: "localhost",  
     database: "messageboard",  
     password: "postgres", // change to your password  
     port: 5432,  
   });  

4. Initialize the database  
   node initdb.js  

5. Start the server  
   node app.js  

6. Open in browser  
   http://localhost:3000
