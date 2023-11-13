import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import students from "./students"; // file with all student info
import Student from './components/Student';

function App() {
  const [studentData, setStudentData] = useState(students);
 
  return (
    <>
      <div>
        <Student students={studentData}/>
      </div>
    </>
  )

}

export default App;
