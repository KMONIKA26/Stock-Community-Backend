# Stock Community Platform - Backend

This is the backend of a community platform for discussing stocks, built using the MERN stack (MongoDB, Express.js, Node.js).

## Features

- **User Authentication** (JWT-based) - Register, login, and manage profiles.
- **Stock Posts** - Create, filter, and sort posts related to stocks.
- **Comments** - Add and delete comments on posts.
- **Likes** - Like/unlike posts.
- **Bonus**: Pagination & real-time updates with Socket.io (optional).

## Installation

1. Clone the repo and install dependencies:

   ```bash
   git clone https://github.com/yourusername/stock-community-backend.git
   cd stock-community-backend
   npm install
   ```

2. Add a `.env` file with:

   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

3. Start the server:

   ```bash
   npm start
   ```

## API Endpoints

- **User**:  
  `POST /api/auth/register` – Register  
  `POST /api/auth/login` – Login  
  `GET /api/user/profile/:userId` – Get profile  
  `PUT /api/user/profile` – Update profile

- **Posts**:  
  `POST /api/posts` – Create post  
  `GET /api/posts` – Get all posts  
  `GET /api/posts/:postId` – Get single post  
  `DELETE /api/posts/:postId` – Delete post

- **Comments & Likes**:  
  `POST /api/posts/:postId/comments` – Add comment  
  `POST /api/posts/:postId/like` – Like post

## License

MIT License
