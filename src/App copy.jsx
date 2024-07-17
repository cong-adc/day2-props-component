import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InfoStudent from "./components/InfoStudent";

function App() {
  const student = {
    name: "Nguyễn Văn 234",
    desription: "Sinh viên ABC 222 .",
    mssv: "AAA",
    className: "React - Next",
    avatar: viteLogo,
    year: "2024",
  };

  return (
    <>
      <h1>Thông tin sinh viên</h1>
      <InfoStudent student={student} />
      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" />
      </div>
      <select>
        <option value="Man">Man</option>
        <option value="Woman">Woman</option>
      </select>
      <br />
      <button>Submit</button>
    </>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <h2 className="header">Form in React</h2>
//         <div>
//           <label>First Name*</label>
//           <input
//             type="text"
//             name="firstName"
//             placeholder="Enter first name"
//             required
//           />
//         </div>
//         <div>
//           <label>Last Name*</label>
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Enter last name"
//             required
//           />
//         </div>
//         <div>
//           <label>Email*</label>
//           <input type="email" name="email" placeholder="Enter email" required />
//         </div>
//         <div>
//           <label>Contact*</label>
//           <input
//             type="text"
//             name="contact"
//             placeholder="Enter contact number"
//             required
//           />
//         </div>
//         <div>
//           <label>Gender*</label>
//           <div className="center">
//             <input type="radio" name="gender" value="Male" required />
//             Male
//             <input type="radio" name="gender" value="Female" />
//             Female
//             <input type="radio" name="gender" value="Other" />
//             Other
//           </div>
//         </div>
//         <div>
//           <label>Your best Subject</label>
//           <div className="center">
//             <input type="checkbox" name="subject" value="English" required />
//             English
//             <input type="checkbox" name="subject" value="Maths" />
//             Maths
//             <input type="checkbox" name="subject" value="Physics" />
//             Physics
//           </div>
//         </div>
//         <div style={{ width: "100%" }}>
//           <label>Upload Resume*</label>
//           <input type="file" name="resume" />
//         </div>
//         <div>
//           <label>Enter URL*</label>
//           <input type="url" name="url" required />
//         </div>
//         <div>
//           <label>Select your choice</label>
//           <select name="choice">
//             <option value="">Select your Ans</option>
//             <option value="Option1">Option1</option>
//             <option value="Option2">Option2</option>
//             <option value="Option3">Option3</option>
//           </select>
//         </div>
//         <div>
//           <label>About</label>
//           <textarea rows={7} name="about" onChange={handleChange} />
//         </div>
//         <p>Submit or Reset</p>
//         <div style={{ display: "flex", justifyContent: "space-around" }}>
//           <button type="reset">Reset</button>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }

export default App;
