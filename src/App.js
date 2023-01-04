import "./App.css";
import Navbar from "./components/navbar";
import Form from "./components/Forms";
import Table from "./components/Table";
import { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    student.id = students.length + 1;
    setStudents([...students, student]);
  };

  return (
    <div className="App">
      <Navbar total={students.length} />
      <Form addStudent={addStudent} />
      <Table students={students} />
    </div>
  );
}

export default App;
