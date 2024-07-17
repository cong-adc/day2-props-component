import React from "react";

export default function InfoStudent({ student }) {
  return (
    <div>
      <div>Họ tên: {student.name}</div>
      <div>Mô tả: {student.description}</div>
      <i>MSSV: {student.mssv}</i>
      <br />
      <br />
      <strong>Lớp: {student.className}</strong>
      <div>Khóa: {student.year}</div>
      <span>Avatar:</span>
      <img src={student.avatar} alt="logo" />
    </div>
  );
}
