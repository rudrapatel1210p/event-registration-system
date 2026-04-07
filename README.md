🎉 Event Registration System

A modern and interactive Event Registration Web App built using HTML, CSS, and JavaScript. This project allows users to select events, register, and view their registrations in a visually appealing UI.


🚀 Features
✨ Stylish and responsive UI design
🧑 User name input validation
📅 Multiple event selection (Hackathon, Cultural Fest, Workshop, Seminar)
✅ Prevent duplicate registrations
📊 Live registration stats:
Total events registered
Next upcoming event
🏷 Registered events displayed as pills
🔄 Real-time UI updates
🌐 Backend API integration (via fetch)
🛠️ Technologies Used
HTML5
CSS3 (Custom styling, animations)
JavaScript (Vanilla JS)
Fetch API (for backend communication)
📁 Project Structure
project-folder/
│
├── index.html   # Main frontend file (UI + JS)
└── README.md    # Project documentation
⚙️ How It Works
User enters their name
Selects an event
Clicks Register Now

Data is sent to backend:

POST http://localhost:3000/register
On success:
Event is added to registered list
Stats update dynamically
🔌 Backend Requirement

This frontend expects a backend server running at:

http://localhost:3000/register
Example Request Body:
{
  "full_name": "Aryan Mehta",
  "event_name": "Hackathon"
}
Example Response:
{
  "message": "Successfully registered!"
}
▶️ How to Run
Step 1: Open Project
Open folder in VS Code
Step 2: Run Frontend
Simply open index.html in browser
OR use Live Server extension
Step 3: Start Backend

Make sure your backend server is running on:

http://localhost:3000
⚠️ Notes
This project won’t store data permanently unless backend + database is connected
Duplicate registrations are blocked in frontend logic
If server is not running → error message will be shown
💡 Future Improvements
🔐 User authentication (Login/Register)
🗄 Database integration (MySQL / MongoDB)
📧 Email confirmation
📱 Mobile optimization enhancements
📊 Admin dashboard for event management
👨‍💻 Author

Rudra
