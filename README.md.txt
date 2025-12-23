Fund Transfer System with Audit Log


Project Overview
This project is a simple full-stack fund transfer system built using the MERN stack (MongoDB, Express, React, Node.js).
It allows users to transfer money between accounts while maintaining an audit log of all successful transactions.

Objectives
- Implement a secure fund transfer mechanism
- Maintain an audit log of all transactions
- Demonstrate database consistency during updates
- Build a responsive and user-friendly frontend
- Use AI tools to accelerate development

Tech Stack
Frontend:
- React (Vite)
- Axios
- Inline CSS

Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose

Tools:
- MongoDB Compass
- Postman
- AI Tool: ChatGPT

Project Structure
transaction-audit-system
|
|-- backend
|   |-- models
|   |   |-- User.js
|   |   |-- Transaction.js
|   |-- routes
|   |   |-- transfer.js
|   |-- server.js
|
|-- frontend
    |-- src
        |-- App.jsx

Database Schema
User Collection:
- _id (String)
- name (String)
- balance (Number)

Transaction Collection (Audit Log):
- senderId (String)
- receiverId (String)
- amount (Number)
- status (String)
- timestamp (Date)

API Endpoints
POST /api/transfer
Transfers money from one user to another.

GET /api/users
Fetches all users with their current balances.

Audit Log Implementation
After every successful transfer, the system logs sender ID, receiver ID, amount, timestamp, and success status into a separate MongoDB collection.

Frontend Features
- Center-aligned responsive UI
- Gradient background
- Success and error popups
- Real-time account balance display

AI Tool Usage
AI tools were used to generate backend transaction boilerplate and frontend component structure, reducing development time and improving code quality.

How to Run the Project
Backend:
cd backend
npm install
node server.js

Frontend:
cd frontend
npm install
npm run dev


Developed By
Rucha Sankhe
B.Tech Information Technology
