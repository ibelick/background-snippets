<div align="center">

# 🔐 [ THE ENCLAVE // MERN VAULT ]
**A full-stack cryptographic ledger built for absolute data integrity.**

[![Stack: MERN](https://img.shields.io/badge/Stack-MERN-38B259?style=for-the-badge&logo=mongodb&logoColor=white)](#)
[![Architecture: RESTful](https://img.shields.io/badge/Architecture-RESTful-black?style=for-the-badge)](#)

*“Security isn't a feature you add at the end. It is the foundation you build upon.”*

<br>

`[SYSTEM] Initializing secure connection...`
`[SERVER] Handshake established on port 5000.`
`[ENCLAVE] Vault access granted.`

</div>

---

## 🗄️ The Ledger (Table of Contents)
1. [Clearance Level 1 (The Vision)](#1-clearance-level-1)
2. [The Infrastructure (Tech Stack)](#2-the-infrastructure)
3. [System Architecture (Engineering Deep Dive)](#3-system-architecture)
4. [Vault Capabilities (Core Features)](#4-vault-capabilities)
5. [Server Initialization (Installation)](#5-server-initialization)

---

<h2 id="1-clearance-level-1"> 👁️ 1. Clearance Level 1 (The Vision) </h2>

Transitioning from building front-end interfaces to full-stack applications requires a fundamental shift in thinking. You are no longer just managing pixels; you are managing data flows, server requests, and most importantly, security.

I built this application to master the **MERN stack (MongoDB, Express, React, Node.js)**. Building a password manager forces a developer to confront the realities of RESTful API design, database schemas, asynchronous backend operations, and the secure transmission of sensitive user data across the network.

<h2 id="2-the-infrastructure"> ⚙️ 2. The Infrastructure (Tech Stack) </h2>

*   **MongoDB & Mongoose:** The NoSQL database used to store the encrypted data payloads. Mongoose schemas are utilized to strictly enforce data validation before anything is written to the database.
*   **Express.js & Node.js:** The backend engine. Handles routing, middleware execution, and secure API endpoints to serve the client.
*   **React.js:** The client-side interface. Utilizes modern hooks for state management and provides a seamless, single-page application (SPA) experience without page reloads.

<h2 id="3-system-architecture"> 🏗️ 3. System Architecture (Engineering Deep Dive) </h2>

Here is a look at the architectural decisions made to ensure the application is both robust and scalable:

### RESTful API Design & Routing
The backend is structured around standard REST conventions. Instead of lumping all logic into a single file, the server architecture is modular. Controllers handle the business logic, models define the database structure, and routes map the HTTP methods (`GET`, `POST`, `PUT`, `DELETE`) to their specific endpoints. This decoupling makes the backend scalable and easy to test.

### CORS & Middleware Implementation
To protect the backend from unauthorized cross-origin requests, CORS (Cross-Origin Resource Sharing) middleware is configured to strictly define which clients are allowed to communicate with the server. Additionally, custom Express middleware is utilized to parse incoming JSON payloads seamlessly before they hit the controller logic.

### Component-Driven React State
On the frontend, the UI is broken down into modular, reusable React components. By lifting state up to the necessary parent components and passing data down via props, the UI stays in perfect synchronization with the backend database. When a new entry is added via a `POST` request, the React state updates dynamically, re-rendering the vault without requiring a hard browser refresh.

<h2 id="4-vault-capabilities"> ⚡ 4. Vault Capabilities (Core Features) </h2>

<details>
<summary><b> 🛡️ Full-Stack CRUD Operations (Click to expand) </b></summary>
<br>
End-to-end integration allowing users to Create, Read, Update, and Delete credentials. Every frontend action is securely mapped to a corresponding backend database operation.
</details>

<details>
<summary><b> 🔍 Real-Time Search & Filtering (Click to expand) </b></summary>
<br>
Client-side filtering logic allows users to instantly search through their vault without pinging the database on every keystroke, optimizing server load.
</details>

<details>
<summary><b> 📱 Responsive Dashboard (Click to expand) </b></summary>
<br>
A clean, modern interface designed to present complex tabular data in an easy-to-read format across both desktop and mobile viewports.
</details>

---

<h2 id="5-server-initialization"> 💻 5. Server Initialization (How to Run) </h2>

Because this is a full-stack application, you will need to initialize both the server and the client, as well as provide your own MongoDB connection string.

```bash
# 1. Clone the repository
git clone [https://github.com/Anhad75/Password_manager_MERN.git](https://github.com/Anhad75/Password_manager_MERN.git)

# 2. Setup the Backend Server
cd Password_manager_MERN/backend
npm install

# Create a .env file in the backend directory and add your MongoDB URI:
# MONGO_URI=your_mongodb_connection_string_here

# Start the backend server
npm start

# 3. Setup the Frontend Client (Open a new terminal window)
cd ../frontend
npm install

# Start the React development server
npm start
