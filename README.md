<h1 align="center">Mess Management System - Winter Project 2024</h1> 

The Mess Management System is a comprehensive solution designed to streamline various activities within the mess facilities of educational institutions. This application handles user attendance, complaint submissions, menu views, and ratings while allowing different access levels and management features for students, mess committee members, and admin.

<h1 align="center">Project Structure and Schema</h1> 

## The system includes the following main components ✨

- User: 
        
        Profiles for students, mess committee members, and admins.
        Attributes: name, email, password, userId, gender, mobileNo, hostel, roomNo, profilePic, idCardPic.
- Complaint: 

        Allows users to file complaints and track their status.
        Attributes: title, userId, date, time, image (optional), description, count (tracks complaint frequency), status (e.g., pending, in progress, resolved).
        Notifications: Email notifications for updates on complaint status.

- Menu: 
        
        Weekly menu with daily meals, editable by mess committee members.
        Structure:

        json

        {
          "day": "Sunday",
          "meals": {
            "breakfast": [{"name": "Item 1"}, ...],
            "lunch": [{"name": "Item 1"}, ...],
            "dinner": [{"name": "Item 1"}, ...]
          }
        }

- Menu Rating: 
    
      Item-wise rating schema to gather feedback on individual dishes.
        Attributes: name (item name), rating (average rating), total (total ratings given).

- Attendance: 
    
      QR code-based attendance marking for each meal.
        Meal slots: Breakfast, Lunch, Dinner, with time restrictions to ensure valid attendance marking.
        Users can rate meals only after marking attendance.

- Vacation: 
    
      Tracks students’ planned absence to adjust attendance records.
        Attributes: userName, startDate, endDate, noOfDays.

## ⚙️ Functionalities

- User Registration and Authentication:
  
  - /signup, /login, /logout
  - OTP-based email verification, and secured access through JWT.

- User Dashboard:
  - Accessible options vary by role:
    - Students: Menu, Complaints, Attendance, View Attendance
    - Admin: Menu, View Attendance, Complaints
    - Mess Members: Menu, Update Menu, Complaints

- Profile Management:
  - /profile: View and update profile details.
  - Password reset and change options available.

- Complaint Management:
  - Submit and view complaints, track status updates, and receive email notifications for complaint resolutions.

- Menu Management:
  - View the daily menu or for specific days.
  - Update the menu by mess committee members only.

- Ratings:
  - Submit ratings for menu items after each meal; rating range from 0-5.
  - Only accessible after marking attendance.

- Attendance Tracking:
  - QR code-based attendance marking with meal-wise status display.
  - Admins can view recent attendance records and search by student name or ID.

## 📜 API Endpoints

    1. User API:
        /api/user (GET, POST, PUT)
        Manages user data and handles profile updates.

    2. Complaint API:
        /api/complaint (GET, POST, PUT, DELETE)
        Allows complaint submission, updates, and deletions with admin approval.

    3. Menu API:
        /api/menu (GET, POST, DELETE, PUT)
        Fetch and update daily or weekly menu data.

    4. Attendance API:
        /api/attendance
        QR code generation and attendance marking.

## 🖥️ Tech Stack

    1. Frontend: React.js, Redux, TypeScript, Tailwind CSS
    2. Backend: Node.js, Express.js
    3. Database: MongoDB
    4. Authentication: JSON Web Tokens (JWT)

## 🎛️ Access Control and Permissions

    1. Admin: Access to view complaints, ratings, attendance, and filter by hostel or date.
    2. Mess Committee: Can view complaints, update complaint statuses, manage the menu, and view ratings and attendance.
    3. User: Can file complaints, rate menu items, view menus, mark attendance, and check attendance history.

## 📈 Functional Flow and UI Overview

    1. Homepage Navigation: Includes options to view menu, mark attendance, submit complaints, and view attendance records.
    2. Complaint UI: Allows users to submit, view, and track complaints in a streamlined interface.
    3. Menu and Rating UI:
        i. Menu: Organized by day and meal type, with easy navigation.
        ii. Ratings: Users can input ratings for dishes with a 0-5 rating scale.
    4. Attendance View: Displays present/absent status, along with a search feature for admin.

## 🚀 Getting Started

  Clone the repository:

    git clone <repository-url>

Install dependencies:

    npm install

Run the development server:

    npm start
