import React, { useState } from "react";

export default function FormStudent({ onUpdate }) {
  const [name, setName] = useState("");
  const [mssv, setMssv] = useState("");
  const [description, setDescription] = useState("");

  //   const [form, setForm] = useState({});

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeMssv = (e) => {
    setMssv(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    onUpdate({
      name,
      mssv,
      description,
    });
  };
  return (
    <div>
      <div>
        <label htmlFor="name">Name:</label>
        <input value={name} onChange={handleChangeName} id="name" />
      </div>
      <div>
        <label htmlFor="mssv">mssv:</label>
        <input value={mssv} onChange={handleChangeMssv} id="mssv" />
      </div>
      <div>
        <label htmlFor="description">description:</label>
        <input
          value={description}
          onChange={handleChangeDescription}
          id="description"
        />
      </div>
      <select>
        <option value="Man">Man</option>
        <option value="Woman">Woman</option>
      </select>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
