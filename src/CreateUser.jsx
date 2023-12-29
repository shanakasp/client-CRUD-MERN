import Axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const Submit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/createUser", { name, email, age })
      .then((result) => {
        console.log("User created successfully:", result.data);
        navigate("/");

        // Optionally, you can navigate to another page or perform other actions upon successful submission.
      })
      .catch((err) => {
        console.error("Error creating user:", err);
        // Optionally, you can display an error message to the user.
      });
  };

  return (
    <div className="d-flex vh-100 bg-dark-subtle justify-content-center align-items-center">
      <div className="w-50 bg-light rounded p-3">
        <form onSubmit={Submit}>
          <h2>Add Users</h2>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              id="name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              placeholder="Enter Age"
              name="age"
              id="age"
              className="form-control"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button type="submit" className="btn bg-warning">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
