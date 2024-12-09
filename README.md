
Fitness Tracker-

A simple and user-friendly fitness tracking application built using React, Vite, and MockAPI. This app allows users to log their workouts, track their food intake, and monitor their progress over time.

Features:-

User Authentication: Secure login system where users can sign up, log in, and view their personal dashboard.
Workout Tracking: Track your workouts with information like reps, sets, and rest time.
Food Tracking: Log your daily food intake and calculate your protein intake.
Progress Monitoring: View completed and pending workouts and track your overall fitness progress.
Responsive Design: The app is responsive and works on both desktop and mobile devices.

Technologies Used:-

Frontend: React.js, Vite (for faster development build process)
Backend: MockAPI (for user authentication, workouts, and food data)
State Management: React useState, useEffect
Styling: Tailwind CSS (for styling and responsiveness)
Toast Notifications: React Toastify (for notifications like login success)


Usage :-

Authentication
Login: Users can log in using their credentials (username and password).
Sign Up: If the user is new, they can sign up to create an account.
Redirection After Login: After a successful login, users are redirected to the Home Page (instead of directly to the dashboard). The Home Page will show an overview of their progress and the application features.

Dashboard:-

After navigating from the Home Page, users can visit their Dashboard to see detailed personal information:

Welcome message with their name.
Quick links to navigate to the Dashboard, Workouts, and Food Tracking sections.
An overview of their fitness progress (e.g., protein intake, completed workouts).
Profile Info: Name, date of birth, height, weight, body goals.
Workouts: Track completed and pending workouts.
Food Intake: Monitor daily protein intake and track calories, protein, carbs, and fats.

Workouts-

Users can view details about their workouts (e.g., name, reps, sets, rest time), mark them as completed, and track their progress.

Food and Calories:-

Users can log their food intake and see their total daily protein, calories, carbs, and fats.
The app calculates how much more protein the user needs to consume to meet their daily target.


Future Improvements:-

User Registration: Add the ability for users to register (currently, only mock data is used).
User Progress Graphs: Add graphs to track workout progress over time.
Offline Support: Add offline data storage (e.g., using IndexedDB) for better user experience.
Real Backend: Replace MockAPI with a real backend (e.g., Node.js and MongoDB) for more robust data handling.

commands:-
npm install
npm install -D tailwindcss
npx tailwindcss init
npm run dev


Contributing:-

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and create a pull request. If you encounter any issues, feel free to contact me on alpasshrivastava.javarnd@gmail.com .