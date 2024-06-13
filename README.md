
# Chat Application 

This project is a feature-rich chat application designed to demonstrate various modern technologies and methodologies. It includes user authentication, real-time messaging, image storage, and a global state management system using Context API. The application is built with Firebase for backend services and is optimized for desktop use with a simple and clean design.
## Demo

![Profile manage gif](https://res.cloudinary.com/djwetaeqt/image/upload/v1718239725/github_Images/chatGif.gif)

[🔗 View Site](https://eli-rosenfeld-chat-app.netlify.app/)


## Table of Contents

- About
- Features
- Technologies Used
- Setup Instructions
- State Management



## About

The chat application leverages a variety of interesting technologies to provide a comprehensive real-time messaging experience. It includes:

- User authentication
- Real-time messaging
- Image storage
- Global state management with Context API
- Integration with Firebase for backend services
## Features

- User Authentication: Secure login and signup process.
- User Connection: Real-time user presence status.
- Real-Time Messaging: Instant message delivery and updates.
- Image Storage: Upload and store images within chat.
- Global State Management: Manage application state using Context API.
- Responsive Design: Optimized for desktop use.

## Technologies Used

**Frontend**
- React.js: JavaScript library for building user interfaces.
- Context API: For global state management.
- CSS: For simple and clean design **scss** style.


**Backend**
- Firebase: Backend-as-a-Service (BaaS) for authentication, database, and storage.
- Firebase Authentication: Secure user authentication.
- Firebase Firestore: NoSQL database for real-time data storage and retrieval.
- Firebase Storage: For storing images and other media files.



## Setup Instructions

Clone the repository:

```bash
  git clone https://github.com/Rosenfeld99/Chat-App.git
```
Install dependencies:

```bash
  npm install
```

Create a Firebase project and add your Firebase configuration to the project:

- Go to the Firebase console.
- Create a new project.
- Register your app with Firebase.
- Copy the Firebase configuration and add it to your project.

Create a .env file in the root directory and add your Firebase configuration:

```bash
  REACT_APP_FIREBASE_API_KEY=your_api_key
  REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
  REACT_APP_FIREBASE_PROJECT_ID=your_project_id
  REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
  REACT_APP_FIREBASE_APP_ID=your_app_id

```

Start the development server:

```bash
  npm run dev
```
## State Management

The global state of the application is managed using Context API, which allows for efficient state management and easy access to state across various components.

- Auth Context: Manages user authentication state.
- Chat Context: Manages real-time messaging state.
