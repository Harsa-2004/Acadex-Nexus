import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";

const mockMentors = [
  { id: "M001", name: "Dr. Rajesh Kumar", specialization: "Machine Learning" },
  { id: "M002", name: "Dr. Priya Sharma", specialization: "Deep Learning" },
  { id: "M003", name: "Dr. Arjun Menon", specialization: "Cybersecurity" },
];

const StudentMentorMatching = () => {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [availableMentors, setAvailableMentors] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState("");

  const handleProjectSubmission = () => {
    // Filter mentors based on selected specialization
    const matchedMentors = mockMentors.filter(
      (mentor) => mentor.specialization === selectedSpecialization
    );
    setAvailableMentors(matchedMentors);
  };

  return (
    <Container maxWidth="md" style={{    
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh", }}>
      <Typography variant="h4" align="center" gutterBottom>
        <SchoolIcon style={{ fontSize: 40, marginRight: 10 }} />
        Student-Mentor Matching
      </Typography>

      {/* Project Submission Section */}
      <Card variant="outlined" style={{ marginBottom: "20px", padding: "20px" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Submit Your Project Details
          </Typography>
          <TextField
            label="Project Title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
          />
          <TextField
            label="Project Description"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={3}
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Select Specialization</InputLabel>
            <Select
              value={selectedSpecialization}
              onChange={(e) => setSelectedSpecialization(e.target.value)}
            >
              <MenuItem value="Machine Learning">Machine Learning</MenuItem>
              <MenuItem value="Deep Learning">Deep Learning</MenuItem>
              <MenuItem value="Cybersecurity">Cybersecurity</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "10px" }}
            onClick={handleProjectSubmission}
          >
            Find Mentors
          </Button>
        </CardContent>
      </Card>

      {/* Available Mentors Section */}
      {availableMentors.length > 0 && (
        <Card variant="outlined" style={{ padding: "20px" }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Available Mentors for {selectedSpecialization}
            </Typography>
            <FormControl fullWidth margin="normal">
              <InputLabel>Select Mentor</InputLabel>
              <Select
                value={selectedMentor}
                onChange={(e) => setSelectedMentor(e.target.value)}
              >
                {availableMentors.map((mentor) => (
                  <MenuItem key={mentor.id} value={mentor.name}>
                    <PersonIcon style={{ marginRight: "10px" }} />
                    {mentor.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              style={{ marginTop: "10px" }}
            >
              Assign Mentor
            </Button>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default StudentMentorMatching;
