import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InfoStudent from "./components/InfoStudent";
import FormStudent from "./components/FormStudent";

// function App() {
//   const [student, setStudent] = useState(initStudent);

//   const updateInfo = (newStudent) => {
//     console.log("====================================");
//     console.log("newStudent", {
//       ...student,
//       ...newStudent,
//       year: "2099999",
//     });
//     console.log("====================================");
//     setStudent({
//       ...student,
//       ...newStudent,
//     });
//     console.log("student", student);
//   };

//   return (
//     <>
//       <h1>Thông tin sinh viên</h1>
//       <InfoStudent student={student} />
//       <FormStudent onUpdate={updateInfo} />
//     </>
//   );
// }

const initStudent = {};

const isEmpty = (obj) => {
  console.log("====================================");
  console.log(obj);
  console.log("====================================");
  const clearEmpty = {};

  for (const [name, value] of Object.entries(obj)) {
    if (value != "" && value != null && value != undefined) {
      clearEmpty[name] = value;
    }
  }
  console.log("clearEmpty", clearEmpty);

  return JSON.stringify(clearEmpty) === "{}";
};

function App() {
  const [student, setStudent] = useState(initStudent);

  const handleChange = (event) => {
    // const value = event.target.value;
    // const name = event.target.name;
    const { name, value, type } = event.target;

    if (type === "checkbox") {
      const newSubject = student?.subject ? [...student.subject] : [];

      if (newSubject.includes(value)) {
        const indexDel = newSubject.indexOf(value);
        newSubject.splice(indexDel, 1);
      } else {
        newSubject.push(value);
      }

      setStudent({
        ...student,
        [name]: newSubject,
      });
    } else {
      setStudent({
        ...student,
        [name]: value,
      });
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
      <div className="App">
        <form>
          <h2 className="header">Form in React</h2>
          <div>
            <label>First Name*</label>
            <input
              type="text"
              name="firstName"
              value={student.firstName}
              onChange={handleChange}
              placeholder="Enter first name"
              required
            />
          </div>
          <div>
            <label>Last Name*</label>
            <input
              type="text"
              name="lastName"
              value={student.lastName}
              onChange={handleChange}
              placeholder="Enter last name"
              required
            />
          </div>
          <div>
            <label>Email*</label>
            <input
              type="email"
              value={student.email}
              onChange={handleChange}
              name="email"
              placeholder="Enter email"
              required
            />
          </div>
          <div>
            <label>Contact*</label>
            <input
              type="text"
              name="contact"
              value={student.contact}
              onChange={handleChange}
              placeholder="Enter contact number"
              required
            />
          </div>
          <div>
            <label>Gender*</label>
            <div className="center">
              <input
                type="radio"
                onChange={handleChange}
                name="gender"
                value="male"
                required
                checked={student.gender === "male"}
              />
              Male
              <input
                type="radio"
                onChange={handleChange}
                name="gender"
                checked={student.gender === "female"}
                value="female"
              />
              Female
              <input
                type="radio"
                onChange={handleChange}
                name="gender"
                checked={student.gender === "other"}
                value="other"
              />
              Other
            </div>
          </div>
          <div>
            <label>Your best Subject</label>
            <div className="center">
              <input
                type="checkbox"
                onChange={handleChange}
                name="subject"
                value="English"
                checked={student.subject?.includes("English")}
                required
              />
              English
              <input
                type="checkbox"
                onChange={handleChange}
                name="subject"
                checked={student.subject?.includes("Maths")}
                value="Maths"
              />
              Maths
              <input
                type="checkbox"
                onChange={handleChange}
                name="subject"
                checked={student.subject?.includes("Physics")}
                value="Physics"
              />
              Physics
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <label>Upload Resume*</label>
            <input onChange={handleChange} type="file" name="resume" />
          </div>
          <div>
            <label>Enter URL*</label>
            <input onChange={handleChange} type="url" name="url" required />
          </div>
          <div>
            <label>Select your choice</label>
            <select onChange={handleChange} name="choice">
              <option value="">Select your Ans</option>
              <option value="Option1">Option1</option>
              <option value="Option2">Option2</option>
              <option value="Option3">Option3</option>
            </select>
          </div>
          <div>
            <label>About</label>
            <textarea onChange={handleChange} rows={7} name="about" />
          </div>
          <p>Submit or Reset</p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button type="reset">Reset</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      {isEmpty(student) ? null : <InfoStudent student={student} />}
    </div>
  );
}

export default App;
