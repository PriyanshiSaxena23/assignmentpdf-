const express = require("express");
const multer = require("multer");
const pdfParse = require("pdf-parse");

const app = express();
const upload = multer(); // For handling file uploads

// API endpoint to handle file uploads
app.post("/upload", upload.single("file"), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded." });
    }

    try {
        const pdfBuffer = req.file.buffer; // Get the uploaded PDF file buffer
        const data = await pdfParse(pdfBuffer); // Extract text from the PDF

        // Extract specific details (Name, Phone, Address)
        const extractedDetails = extractDetails(data.text);

        res.json(extractedDetails); // Send the extracted details as JSON
    } catch (error) {
        console.error("Error processing PDF:", error);
        res.status(500).json({ error: "Failed to process the file." });
    }
});

// Function to extract details from PDF text
function extractDetails(text) {
    const details = {
        Name: text.match(/Name\s*:\s*(.+)/i)?.[1] || "Not Found",
        Phone: text.match(/Phone\s*:\s*(.+)/i)?.[1] || "Not Found",
        Address: text.match(/Address\s*:\s*(.+)/i)?.[1] || "Not Found",
    };

    return details;
}

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
