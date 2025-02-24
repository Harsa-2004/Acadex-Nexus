// import { useState } from "react";
// import "./TeacherDashboard.css";

// const TeacherDashboard = () => {
//   const [course, setCourse] = useState("");
//   const [examDate, setExamDate] = useState("");
//   const [portions, setPortions] = useState("");
//   const [exams, setExams] = useState([]);

//   const handleAnnounceExam = () => {
//     if (course && examDate && portions) {
//       const newExam = { course, examDate, portions };
//       setExams([...exams, newExam]);
//       setCourse("");
//       setExamDate("");
//       setPortions("");
//     }
//   };

//   return (
//     <div className="teacher-dashboard">
//       <h1>Teacher Dashboard</h1>
//       <div className="exam-form">
//         <input
//           type="text"
//           placeholder="Course Name"
//           value={course}
//           onChange={(e) => setCourse(e.target.value)}
//         />
//         <input
//           type="date"
//           value={examDate}
//           onChange={(e) => setExamDate(e.target.value)}
//         />
//         <textarea
//           placeholder="Exam Portions"
//           value={portions}
//           onChange={(e) => setPortions(e.target.value)}
//         />
//         <button onClick={handleAnnounceExam}>Announce Exam</button>
//       </div>

//       <h2>Announced Exams:</h2>
//       <div className="exam-list">
//         {exams.map((exam, index) => (
//           <div key={index} className="exam-card">
//             <p>
//               <strong>{exam.course}</strong> - {exam.examDate} - {exam.portions}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TeacherDashboard;

import { useState } from "react";
import "./TeacherDashboard.css";

const TeacherDashboard = () => {
 
    
  const [course, setCourse] = useState("");
  const [examDate, setExamDate] = useState("");
  const [portions, setPortions] = useState("");
//   const [exams, setExams] = useState([]);
  const [exams, setExams] = useState([
    { course: "Math", examDate: "2025-02-25", portions: "", showInput: false },
    { course: "Science", examDate: "2025-03-01", portions: "", showInput: false },
  ]);
  const [successMessage, setSuccessMessage] = useState("");


  const handleAnnounceExam = () => {
    if (course && examDate && portions) {
      setExams([...exams, { course, examDate, portions }]);
      setCourse("");
      setExamDate("");
      setPortions("");
    }
  };
  const handleExamClick = (index) => {
    setExams((prevExams) =>
      prevExams.map((exam, i) =>
        i === index ? { ...exam, showInput: !exam.showInput } : exam
      )
    );
  };

  // Update portions input value
  const handleInputChange = (index, value) => {
    setExams((prevExams) =>
      prevExams.map((exam, i) =>
        i === index ? { ...exam, portions: value } : exam
      )
    );
  };

  // Handle Set Questions button
  const handleSetQuestions = (index) => {
    const updatedExam = exams[index];
    console.log("Sending to backend:", updatedExam); // Replace with backend API call

    // Show success message
    setSuccessMessage("Questions set successfully!");
    
    // Clear message after 3 seconds
    setTimeout(() => setSuccessMessage(""), 3000);
  };


  return (
    <div className="teacher-dashboard">
      <div className="dashboard-container">
        <h2>Exam Announcement Page</h2>

        {/* Exam Form */}
        <div className="exam-form">
          <label>Course Name:</label>
          <input
            type="text"
            placeholder="Enter Course Name"
            value={course}
            onChange={(e) => {
              console.log("Typing Course:", e.target.value);
              setCourse(e.target.value);
            }}
          />

          <label>Exam Date:</label>
          <input
            type="date"
            value={examDate}
            onChange={(e) => {
              console.log("Selecting Date:", e.target.value);
              setExamDate(e.target.value);
            }}
          />

          <label>Exam Portions:</label>
          <textarea
            placeholder="Enter Exam Portions"
            value={portions}
            onChange={(e) => {
              console.log("Typing Portions:", e.target.value);
              setPortions(e.target.value);
            }}
          />

          <button onClick={handleAnnounceExam}>Announce Exam</button>
        </div>

        {/* Announced Exams */}
        <h2>Announced Exams</h2>
        <div className="announce">
          {exams.length === 0 ? (
            <p className="no-exams">No exams announced yet.</p>
          ) : (
            exams.map((exam, index) => (
              <div key={index} className="exam-card">
                <p onClick={() => handleExamClick(index)} className="exam-title">
                  <strong>{exam.course}</strong> - {exam.examDate}
                </p>

                {/* Input field appears when clicked */}
                {exam.showInput && (
                  <div className="exam-input">
                    <textarea
                      rows="3"
                      placeholder="Enter portions or questions..."
                      value={exam.portions}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                    <button onClick={() => handleSetQuestions(index)} className="set-questions-btn">
                      Set Questions
                    </button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Success Message */}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>  );
};

export default TeacherDashboard;
