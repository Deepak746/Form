# MERN Application

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)


## Introduction

This project is a full-stack MERN application that resembles a google-registration form.

https://sparkling-kulfi-6f3f70.netlify.app/

##Features
## Features

- **File Upload**: Supports uploading and managing files, such as profile images and documents.
- **Dynamic Form Handling**: Implements dynamic form fields and validation to handle various user inputs.
- **Pagination**
- **Responsive Design**: Fully responsive design ensuring a seamless experience on both desktop and mobile devices.


## Technologies Used

- **MongoDB**: Database
- **Express.js**: Web framework for Node.js
- **React**: Front-end library
- **Node.js**: JavaScript runtime environment

## Installation

To get this project up and running locally, follow these steps:

### Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)

### Clone the repository

git clone https://github.com/Deepak746/Form.git
cd Form

##Install dependencies
  ###Backend
    cd server
    npm install

  ###Frontend
    cd ../frontend
    npm install

  ###Environment Variables
      Create a .env file in the server directory and add the following environment variables:
      MONGO_URI=your_mongodb_connection_string
      PORT=your_preferred_port
##Usage
    ###Running the server
      In the server directory, start the backend server:
        node index.js

  ###Running the client
      In the frontend directory, start the React development server:
      npm start
      
#The application should now be running at http://localhost:3000

#Deployment

  I've used netfliy to deploy frontend and on-render to deploy the backend


  


