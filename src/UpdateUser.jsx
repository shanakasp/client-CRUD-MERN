import React from "react";

function UpdateUser() {
  return (
    <div className="d-flex vh-100 bg-dark-subtle justify-content-center align-items-center">
      <div className="w-50 bg-light rounded p-3">
        <form>
          <h2>Update Users</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              name="Enter name"
              id=""
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="Enter Email"
              placeholder="Enter Email"
              id=""
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input
              type="text"
              placeholder="Enter Age"
              name="Enter Age"
              id=""
              className="form-control"
            />
          </div>
          <button className="btn bg-warning">Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
