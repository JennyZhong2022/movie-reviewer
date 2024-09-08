# MovieReviewer

MovieReviewer is a MERN (MongoDB, Express.js, React, Node.js) full stack app that allows users to sign in, log in, browse movies, search movies, add movies to their favorite list, and write reviews for movies. It integrates with the TMDB (The Movie Database) API to fetch movie data dynamically.

## Demo

- [Find Your Favorite Movie](https://movie-reviewer-client.onrender.com) - Browse and find your favorite movie from TMDB.

  ![Demo](./Client/src/assets/Gif/demo.gif)

## Table of Contents

- [Purpose](#purpose)
- [Requirements](#requirements)
- [Build Setup](#build-setup)
- [Design Goals](#design-goals)
- [Features](#features)
- [Challenges](#challenges)
- [Known Issues](#known-issues)
- [Future Goals](#future-goals)

## Purpose

The **Find Your Favorite Movie** project aims to build an MVP for a dynamic movie platform where users can browse, search movies, add movies to their favorite list, and write comments. Only logged-in users can add movies to their favorite list and write reviews, ensuring a personalized and interactive experience.

The purpose of this project includes:

- **Learning Goal**: To practice the MERN stack (MongoDB, Express, React, Node.js) and work with external APIs (TMDB).
- **Product Goal**: To deliver a fully functional and responsive movie platform where users can discover, save, and review their favorite movies.
- **Authentication and Authorization**: Implement dynamic user authentication to control access to certain features like adding to a favorite list or writing reviews.

---

## Requirements

### Minimum Viable Product (MVP)

- **Home Page** Displays a grid of movie cards fetched from the TMDB API, with a "Load More" button to view additional movies.
- **Search Bar** Allows users to search for movies by title.
- **Favorite List**: Logged-in users can add movies to their favorite list and remove them as needed.
- **Movie Details Page**: Provides additional information about each movie.

---

## Build Setup

### Frontend:

1. **Vite Setup**:
   ```bash
   npm create vite@latest
   cd project-name
   npm install
   npm run dev
   ```
2. **React**: Install necessary dependencies for React:
   ```bash
   npm install react react-dom
   ```
3. **Development Server**: Run the development server::
   ```bash
   npm run dev
   ```

### API Key:

1. Register for a TMDB API key at [TMDB API](https://www.themoviedb.org/documentation/api).
2. Configure the API key in your frontend by storing it in an environment variable and using it to fetch movie data in your application.
   For example, you can store the API key in a `.env` file:
   ```bash
   TMDB_API_KEY=your_api_key_here
   ```

### Backend (MongoDB, Express.js, Node.js)

### MongoDB Setup:

1. Create an account and set up a MongoDB database:
   [MongoDB Account](https://account.mongodb.com/account/login).

### Express Setup:

1. Initialize a new Node.js project and install the required dependencies for Express and Mongoose:
   ```bash
   npm init -y
   npm install express mongoose
   ```

## Design Goals

- **Frontend**: Use React to build a dynamic and interactive user interface.
- **Backend**: Use Express and MongoDB to handle user data, authentication, and movie reviews.
- **API Integration**: Fetch movie data from the TMDB API to populate the platform dynamically.
- **Form Handling**: Use React Hook Form to manage user sign-up and login forms.
- **Responsive**: Ensure that the platform works well on all screen sizes and devices.

<img src="/Client/src/assets/Img/responsive.jpg" alt="responsive image" width="200"/>

---

## Features

- **User Authentication & Authorization**: Users must sign in to add movies to their favorite list and write reviews. The platform uses JSON Web Tokens (JWT) to manage user sessions.

- **Search Functionality**: Users can search for movies by title.

- **Favorite List**: Logged-in users can add movies to a personal favorite list and remove them as needed.

- **Write Reviews**: Users can write and manage reviews for movies.

- **Load More Button**: Fetch more movie results dynamically as users scroll or click the "Load More" button.

- **Responsive Design**: The app is fully responsive, ensuring a seamless experience across mobile, tablet, and desktop devices.

---

## Challenges

- **User Authentication and Authorization**:Ensuring only authenticated users can access features like writing reviews and adding movies to their favorite list. ContextAPI was used to manage user tokens, which are removed from local storage upon sign-out.

- **Token Management**: Handling the storage and invalidation of tokens, ensuring that users are logged out securely and can’t access protected routes after signing out.

---

## Future Goals

1. **User Profiles**: Associate comments with users, displaying the user's name alongside their review.
2. **Improved Authentication**: Add more robust token validation and error handling for expired tokens.
3. **Unit Testing**: Implement unit testing across the frontend and backend.

---

## Conclusion

MovieReviewer provides a solid foundation for a dynamic, user-centric movie browsing platform. While several challenges remain, especially in terms of user authentication and token management, the project successfully demonstrates the integration of the MERN stack with a third-party API (TMDB) to deliver real-time movie data and user interaction. Future iterations will focus on enhancing user authentication, refining the user experience, and improving backend functionality with testing and security enhancements.
