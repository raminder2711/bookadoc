## Project Overview

**Book A Doc** is a web application designed to manage and monitor doctors and their appointments. It has two user roles: **Admin** and **Doctor**. Admins can manage doctor profiles, view appointments, and oversee the overall dashboard, while doctors can manage their own profiles, view their appointments, and update their availability and fees.

In addition to Admin and Doctor functionalities, the application allows **users** to create an account, browse available doctors, and book appointments with them. This makes it easy for individuals to schedule medical appointments online, streamlining the process for both patients and medical professionals. The application is designed for easy use by medical organizations, clinics, hospitals, and anyone looking to schedule appointments with qualified doctors.


## Features

- **Admin Role**:
  - Admin login with email and password authentication.
  - View and manage doctors' profiles.
  - Add, edit, or remove doctors.
  - View all appointments.
  - Mark doctors as available or unavailable for appointments.
  
- **Doctor Role**:
  - Doctor login with email and password authentication.
  - View and update personal profile information (including appointment fees, address, and availability).
  - View and manage appointments.
  - Mark themselves as available or unavailable for appointments.

- **User Role**:
  - Users can create an account and log in to the system.
  - Users can browse available doctors and book appointments.
  - View upcoming and past appointments.

- **Authentication**:
  - JWT-based authentication for both admins and doctors.
  
- **Appointment Management**:
  - Admins can view all appointments, while doctors can see their own appointments. Doctors can also cancel and mark an appointment as completed.
  
- **Profile Management**:
  - Doctors can edit their profiles, including name, degree, specialty, fees, and availability.

## Installation Instructions

To set up the project locally, follow these steps:

### Prerequisites

1. **Node.js**: Ensure that Node.js is installed on your machine.
   - You can download it from [nodejs.org](https://nodejs.org/).
   
2. **MongoDB**: The project uses MongoDB as its database.
   - Install MongoDB or use a cloud-based solution such as [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

3. **Backend API**: Make sure your backend server (Node.js/Express) is set up and running.

### Steps to Set Up Locally

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <project-directory>

2. **Install Backend Dependencies:**:
   
   Navigate to the backend folder:
   
   ```bash
   cd backend

    Install the dependencies:

    ```bash
   npm install

3. **Set up Environment Variables:**:

    Create a .env file in the backend folder and add the following:

    ```bash
        MONGO_URI=<your-mongo-db-uri>
        JWT_SECRET=<your-jwt-secret>
        BACKEND_URL=<your-backend-url>


4. **Start the Backend:**:

    ```bash
    npm start

5. **Install Frontend Dependencies:**:

        Navigate to the frontend folder:

        ```bash
            cd frontend

    Install the dependencies:

    ```bash
   npm install

6. **Start the Frontend:**:

         ```bash
   npm run dev

7. **Open the Application**


## Usage
# Login as Admin or Doctor:

When accessing the application, you will be prompted to log in as either an Admin or a Doctor.
For Admin: Use the admin credentials to manage doctors and view appointments.
For Doctor: Use the doctor's credentials to manage personal profiles and appointments.

# Manage Doctor Profiles (Admin):

Admin users can add, edit, or delete doctors.
Admins can also view and manage all appointments.
Admins can also change the availability of doctors.

# Update Doctor Profile (Doctor):

Doctors can update their profiles with their address, fees, and availability.
Doctors can view and manage their own appointments.
Doctors can also change the availability.

# Create an Account:

Visit the frontend login page to register an account to book appointments with a doctor. As a User, you can log in, view available Doctors, and book appointments through the system.


## Technologies Used

# Frontend:
React: Frontend library for building user interfaces.
React Router: For handling routing in the frontend.
Axios: For making HTTP requests.
React Toastify: For displaying toast notifications.

# Backend:

Node.js: JavaScript runtime for building the backend server.
Express.js: Framework for building the API server.
MongoDB: NoSQL database for storing user and appointment data.
Mongoose: ORM for interacting with MongoDB.
JWT: For user authentication and generating tokens.

# Others:

Bcrypt.js: For password hashing and validation.
Cors: For enabling cross-origin requests.
dotenv: For managing environment variables.

## Future Improvements

1. User Role Enhancements:

Adding more roles, such as Admin Assistant or Receptionist, to further segment responsibilities.

2. Appointment Notification System:

Implement email or SMS notifications for upcoming appointments or changes in availability.

3. Doctor Analytics:

Provide doctors with analytics on their appointments, fees, and patient satisfaction.

4. Enhanced UI/UX:

Improve the UI with a more polished and user-friendly design.
Implement responsive design for better mobile compatibility.

5. Security Improvements:

Implement OAuth or third-party authentication methods (Google, Facebook).
Use HTTPS for secure communication.

"# bookadoc" 
"# bookadoc" 
