import React, { useEffect } from "react";
import "../style/Table.css";

const Table = (props) => {
  const students = props.students.sort((a, b) => a.userRoll.localeCompare(b.userRoll));

  const display =
    students.length > 0 ? (
      students.map((user, index) => (
        <tr key={index}>
          <td>{user.userRoll}</td>
          <td>{user.userFirstname}</td>
          <td>{user.userLastname}</td>
          <td>{user.checkIn}</td>
          <td>{user.checkOut}</td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={3}></td>
      </tr>
    );

  return (
    <div>
      <div>
        <table className="content-table">
          <thead>
            <tr>
              <th>Roll Number</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Check-in Time</th>
              <th>Check-out Time</th>
            </tr>
          </thead>
          <tbody>{display}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
