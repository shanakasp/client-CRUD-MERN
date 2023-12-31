import React from "react";

function Searchbar() {
  return (
    <div>
      {" "}
      {/* Search Bar */}
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
