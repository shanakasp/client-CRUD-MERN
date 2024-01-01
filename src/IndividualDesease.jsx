import React, { useState } from "react";

function IndividualDesease() {
  const [isDistracted, setIsDistracted] = useState(false);
  const [bloodPressure, setBloodPressure] = useState("");
  const [heartRate, setHeartRate] = useState("");
  const [temperature, setTemperature] = useState("");

  const handleToggle = () => {
    setIsDistracted(!isDistracted);
  };

  return (
    <div>
      <div className="mb-2">
        <label htmlFor="name">Age</label>
        <input
          type="text"
          placeholder="Enter age"
          name="age"
          id="age"
          className="form-control"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="gender">Gender</label>
        <select id="gender" name="gender" className="form-control">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <div className="mb-2">
          <label htmlFor="age">Is patient in distract</label>
          <div className="form-check form-switch">
            <input
              type="checkbox"
              className="form-check-input"
              id="distractedSwitch"
              checked={isDistracted}
              onChange={handleToggle}
            />
            <label className="form-check-label" htmlFor="distractedSwitch">
              {isDistracted ? "Yes" : "No"}
            </label>
          </div>
        </div>

        {isDistracted && (
          <div>
            <div>
              <div className="mb-2">
                <label htmlFor="bloodPressure">Blood Pressure</label>
                <select
                  className="form-select"
                  id="bloodPressure"
                  value={bloodPressure}
                  onChange={(e) => setBloodPressure(e.target.value)}
                >
                  <option value="">Select Blood Pressure Range</option>
                  <option value="50-100">50-100</option>
                  <option value="100-200">100-200</option>
                  <option value="200-400">200-400</option>
                  <option value="Over 400">Over 400</option>
                </select>
              </div>
            </div>

            <div className="mb-2">
              <label htmlFor="heartRate">Heart Rate</label>
              <select
                className="form-select"
                id="heartRate"
                value={heartRate}
                onChange={(e) => setHeartRate(e.target.value)}
              >
                <option value="">Select Heart Rate Range</option>
                <option value="50-100">50-100</option>
                <option value="100-200">100-200</option>
                <option value="200-400">200-400</option>
                <option value="Over 400">Over 400</option>
              </select>
            </div>

            <div className="mb-2">
              <label htmlFor="temperature">Temperature</label>
              <select
                className="form-select"
                id="temperature"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
              >
                <option value="">Select Temparature Range</option>
                <option value="50-100">50-100</option>

                <option value="Over 100">Over 400</option>
              </select>
            </div>
          </div>
        )}
      </div>
      <button type="submit" className="btn bg-warning">
        Next
      </button>
    </div>
  );
}

export default IndividualDesease
