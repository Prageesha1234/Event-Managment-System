# Event Management System

## Overview
The Event Management System is a web-based application designed for internal staff of the company to manage events efficiently. The application is built using modern technologies, ensuring a responsive and user-friendly experience.

## User Roles
- **Admin**: Manages user accounts and overall system settings.
- **Event Manager**: Oversees event planning and execution.
- **Event Coordinator**: Coordinates logistics and details for events.
- **Event Team**: Assists in various tasks related to event management.
- **Vendor Coordinator**: Manages relationships and communications with vendors.
- **Finance Manager**: Handles budgeting and financial aspects of events.

## Technology Stack
- **Front-end Framework**: React.js
- **Styling**: Tailwind CSS
- **Back-end Runtime**: Node.js (with Express.js)
- **Database**: MySQL
- **Authentication**: JSON Web Token (JWT) based API access

## Project Structure
The project is organized into two main directories: `client` for the front-end application and `server` for the back-end API.

### Client
- Contains all the React components, pages, and styling configurations.

### Server
- Contains the Node.js application, including routes, controllers, models, and middleware.

## Setup Instructions

### Client Setup
1. Navigate to the `client` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```

### Server Setup
1. Navigate to the `server` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file based on the `.env.example` file and configure your environment variables.
4. Start the server:
   ```
   npm start
   ```

## Database Setup
1. Import the `schema.sql` file into your MySQL database to create the necessary tables.
2. Run the migration scripts located in the `database/migrations` directory to set up the database structure.
3. Optionally, run the seed script in the `database/seeders` directory to populate initial data.

## Usage
After setting up both the client and server, navigate to `http://localhost:3000` in your web browser to access the application. Users can log in based on their roles and start managing events.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.