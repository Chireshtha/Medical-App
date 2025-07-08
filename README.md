# 🩺 MediCare Companion

A responsive React-based application that helps patients stay on track with their medications and allows caretakers to monitor adherence and progress. This app aims to improve medication compliance through intuitive UI and role-based views.

## 🔗 Live Demo

🌐 [meds-check.netlify.app](https://meds-check.netlify.app)

## 💻 Tech Stack 

- **React JS**
- **React Router DOM**
- **Bootstrap 5**
- **React Icons**
- **React Calendar**
- **Netlify (for deployment)**

## 📁 Project Structure

Medical-App/
├── public/
├── src/
│ ├── components/
│ ├── layout/ # Navbar, Footer (if used)
│ ├── pages/ # All page components
│ ├── routes/ # Route configuration
│ ├── styles/ # CSS files for components
│ └── App.js / index.js

## ✨ Features Implemented

### ✅ Common
- Responsive layout using Bootstrap
- Routing with role-switching between Patient and Caretaker
- UI structure for dashboards and reports

### 👤 Patient View
- View today’s medication and schedule
- Upload proof photo (mocked)
- Medication calendar with color-coded indicators
- Mark medication as taken (pending backend)

### 🧑‍⚕️ Caretaker View
- Monitor patient medication status
- Quick action UI for reminders, calendar
- Monthly progress bar
- Tabs for Overview, Activity, Calendar View, Notifications

## 🚧 Features in Progress
- 📨 Email Reminder Functionality
- 🔐 Authentication (using Supabase or Firebase)
- 📊 Real-time medication data tracking
- 🧪 Backend database for storing user and medication data

## 🛠️ Installation & Setup

```bash
# Clone the repo
git clone https://github.com/Chireshtha/Medical-App.git
cd Medical-App

# Install dependencies
npm install

# Run the app
npm start
