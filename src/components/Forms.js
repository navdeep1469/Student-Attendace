import { useState } from "react";

const Forms = ({ addStudent }) => {
  const style = {
    form: {
      container: {
        padding: "20px",
        border: "1px solid #F0F8FF",
        borderRadius: "15px",
        width: "max-content",
        margin: "auto",
        minWidth: "600px",
        overflow: "hidden",
        boxShadow: " 0 0 20px rgba(0, 0, 0, 0.15)",
      },
      inputs: {
        marginBottom: "10px",
        width: "-webkit-fill-available",
        borderRadius: "5px",
        height: "25px",
        border: "1px solid #ccc",
      },
      submitBtn: {
        marginTop: "10px",
        padding: "10px 15px",
        border: "none",
        backgroundColor: "#009879",
        fontSize: "14px",
        borderRadius: "5px",
        color: "white",
      },
    },
  };

  const initContact = {
    id: null,
    userFirstname: "",
    userLastname: "",
    userRoll: "",
    checkIn: "",
    checkOut: "",
  };

  const [userState, setUserState] = useState(initContact);

  const handleUserChange = (e) => {
    setUserState({
      ...userState,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (
      !userState.userFirstname ||
      !userState.userLastname ||
      !userState.checkIn ||
      !userState.checkOut ||
      !userState.userRoll
    )
      return;

    addStudent(userState);
    setUserState(initContact);
  };

  return (
    <div>
      <form style={style.form.container}>
        <label>First Name</label>
        <br />
        <input
          style={style.form.inputs}
          name="userFirstname"
          type="text"
          value={userState.userFirstname}
          onChange={handleUserChange}
        />
        <br />
        <label>Last Name</label>
        <br />
        <input
          style={style.form.inputs}
          name="userLastname"
          type="text"
          value={userState.userLastname}
          onChange={handleUserChange}
        />
        <br />
        <label>Roll Number</label>
        <br />
        <input
          style={style.form.inputs}
          className="userLastname"
          name="userRoll"
          type="number"
          value={userState.userRoll}
          onChange={handleUserChange}
        />
        <br />
        <label>Check-in Time</label>
        <br />
        <input
          style={style.form.inputs}
          className="userPhone"
          name="checkIn"
          type="time"
          value={userState.checkIn}
          onChange={handleUserChange}
        />
        <br />
        <label>Check-out Time</label>
        <br />
        <input
          style={style.form.inputs}
          className="userPhone"
          name="checkOut"
          type="time"
          value={userState.checkOut}
          onChange={handleUserChange}
        />
        <br />
        <button style={style.form.submitBtn} onClick={handleClick}>
          Add Student
        </button>
      </form>
    </div>
  );
};

export default Forms;
