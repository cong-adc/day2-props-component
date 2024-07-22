import React from "react";

export default function InfoStudent({ student }) {
  return (
    <div>
      <div>
        Họ tên: {`${student.firstName || ""} ${student.lastName || ""}`}
      </div>
      <div>Mô tả: {student.description}</div>
      <i>Email: {student.email}</i>
      <br />
      <br />
      <strong>Contact: {student.contact}</strong>
      <div>Gender: {student.gender}</div>
      <div>Subject: {student.subject?.join("- ")}</div>
    </div>
  );
}
