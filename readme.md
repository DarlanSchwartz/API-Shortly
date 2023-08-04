# API Shortly

API Shortly is the backend service that powers the Shortly URL shortener application. This repository contains the source code for the API, which handles URL shortening, user management, and other related functionalities.

## Introduction

API Shortly serves as the backend infrastructure for the Shortly URL shortener application. It is built using [Node.js](https://nodejs.org/) and [Express](https://expressjs.com/), providing a robust and scalable foundation for the frontend application.

## Features

API Shortly offers the following key features:

- URL shortening service: Convert long URLs to short, easy-to-share links.
- User authentication system: Allows users to register, log in, and manage their shortened URLs.
- Analytics tracking: Provides insights into the performance of each shortened URL (clicks).

## Installation

To run API Shortly on your local machine or server, follow these steps:

0. You need to have PostgreSQL installed on your machine, if so you need to create a database called `shortly` and run the dump.sql code "inside" this shortly database

1. Clone this repository: 
```bash
git clone https://github.com/DarlanSchwartz/API-Shortly.git 
```
2. Navigate to the project directory: 
```bash
cd API-Shortly
```
3. Install the required dependencies: 
```bash
npm install
```
4. Configure the environment variables. You can use the provided `.env.example` file as a template.

5. Start the server:

```bash
npm run dev 
```
or


API Shortly should now be up and running on the specified port, and it's ready to serve requests from the Shortly frontend application.

## Usage

API Shortly is designed to be used in conjunction with the Shortly frontend application. It handles API requests related to URL shortening, user authentication, analytics, and more.

Ensure that the Shortly frontend application is correctly configured to communicate with this API. Once both components are set up, users can start using the Shortly application seamlessly.

## You can test the app at https://shortl-y.vercel.app/
[<img width='100%' src="https://github.com/DarlanSchwartz/Shortly/raw/main/screenshots/screenshot.png" align="left"/>](https://shortl-y.vercel.app/)
