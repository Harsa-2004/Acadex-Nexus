// import { useState } from "react";
// import "./StudentDashboard.css";

// const StudentDashboard = () => {
//   const [upcomingExams] = useState([
//     { course: "DBMS", date: "Feb 27, 2025", portions: "Tables" },
//     { course: "OOP", date: "March 5, 2025", portions: "Classes & Objects" },
//   ]);

//   return (
//     <div className="student-dashboard">
//       <h1>Student Dashboard</h1>
//       <h2>Upcoming Exams:</h2>
//       <div className="exam-list">
//         {upcomingExams.map((exam, index) => (
//           <div key={index} className="exam-card">
//             <p>
//               <strong>{exam.course}</strong> - {exam.date} - {exam.portions}
//             </p>
//             <button className="attempt-test">Attempt Test</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;


import { useState, useEffect } from "react";
import "./StudentDashboard.css";

const StudentDashboard = () => {
  // Initialize state dynamically (empty at first)
  const [upcomingExams, setUpcomingExams] = useState([]);

  // Dummy initial data (simulating fetching from an API or database)
  useEffect(() => {
    const initialExams = [
      { course: "DBMS", date: "Feb 27, 2025", portions: "Tables" },
      
    ];
    setUpcomingExams(initialExams);
  }, []); // Runs only once when the component mounts

  return (
    <div className="student-dashboard">
      <h1>Student Dashboard</h1>
      <h2>Upcoming Exams:</h2>
      <div className="exam-list">
        {upcomingExams.map((exam, index) => (
          <div key={index} className="exam-card">
            <p>
              <strong>{exam.course}</strong> - {exam.date} - {exam.portions}
            </p>
            <button className="attempt-test">Attempt Test</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
