import React, { useState } from "react";
import axios from "axios"; // For making API requests

function App() {
  const [file, setFile] = useState(null); // To store the uploaded file
  const [details, setDetails] = useState(null); // To store extracted details
  const [error, setError] = useState(null); // To handle errors

  // Handle file input change
  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Store the selected file
    setDetails(null); // Reset previous details
    setError(null); // Clear errors
  };

  // Handle file upload and API call
  const handleFileUpload = async () => {
    if (!file) {
      setError("Please select a PDF file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file); // Append the selected file to the FormData

    try {
      // Send the file to the backend
      const response = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setDetails(response.data); // Store the extracted details
      setError(null); // Clear errors
    } catch (err) {
      setError("Failed to process the file. Please try again.");
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>PDF Data Extractor</h1>

      {/* File input */}
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button onClick={handleFileUpload} style={{ marginLeft: "10px" }}>
        Upload and Extract
      </button>

      {/* Error message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Extracted details */}
      {details && (
        <div style={{ marginTop: "20px" }}>
          <h3>Extracted Details:</h3>
          <p><strong>Name:</strong> {details.Name || "N/A"}</p>
          <p><strong>Phone:</strong> {details.Phone || "N/A"}</p>
          <p><strong>Address:</strong> {details.Address || "N/A"}</p>
        </div>
      )}
    </div>
  );
}

export default App;
