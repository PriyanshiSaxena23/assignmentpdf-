PDF Data Extractor
This project is a full-stack application that extracts specific details (Name, Phone Number, Address) from an uploaded PDF file. The backend processes the PDF to extract the data, and the frontend displays it in a user-friendly interface.

Features
Upload a PDF file through the frontend.
Automatically extract text from the PDF using the backend.
Identify and display fields like:
Name
Phone Number
Address
Built with:
React for the frontend.
Node.js with Express for the backend.
Multer for file uploads.
pdf-parse for PDF text extraction.
Technologies Used
Frontend:
React
Axios (for API communication)
Backend:
Node.js
Express.js
Multer (for handling file uploads)
pdf-parse (for extracting text from PDFs)
Project Structure
bash
Copy
Edit
project/
├── backend/
│   ├── index.js                # Backend server file
│   ├── package.json            # Backend dependencies
│   └── node_modules/           # Installed backend modules
├── frontend/
│   ├── src/
│   │   ├── App.js              # Main React component
│   │   ├── App.css             # Frontend styling
│   │   ├── index.js            # React entry point
│   │   └── components/         # (Optional) Custom React components
│   ├── package.json            # Frontend dependencies
│   └── node_modules/           # Installed frontend modules
Installation and Setup
Backend Setup
Navigate to the backend folder:
bash
Copy
Edit
cd backend
Install dependencies:
bash
Copy
Edit
npm install
Start the server:
bash
Copy
Edit
node index.js
The backend server will run at http://localhost:5000.
Frontend Setup
Navigate to the frontend folder:
bash
Copy
Edit
cd frontend
Install dependencies:
bash
Copy
Edit
npm install
Start the development server:
bash
Copy
Edit
npm start
The React app will open in your browser at http://localhost:3000.
How to Use
Open the frontend at http://localhost:3000.
Upload a PDF file using the provided file upload button.
The backend processes the file and extracts details like:
Name
Phone Number
Address
The extracted details are displayed on the screen.
Endpoints
Backend Endpoint
POST /upload:
Accepts a PDF file and returns extracted details as JSON.
Request:
File: file (multipart/form-data)
Response:
json
Copy
Edit
{
    "Name": "John Doe",
    "Phone": "+1 (620) 130-7224",
    "Address": "447 Sutter St 3rd Floor, San Francisco, CA 94108, United States"
}
Example Input and Output
Input:
A PDF containing:
makefile
Copy
Edit
Name: John Doe
Phone: +1 (620) 130-7224
Address: 447 Sutter St 3rd Floor, San Francisco, CA 94108, United States
Output:
json
Copy
Edit
{
    "Name": "John Doe",
    "Phone": "+1 (620) 130-7224",
    "Address": "447 Sutter St 3rd Floor, San Francisco, CA 94108, United States"
}
Troubleshooting
Error: Module Not Found:
Run npm install to install missing dependencies.
Server Not Starting:
Check if the backend is running on http://localhost:5000.
Frontend Not Starting:
Ensure npm start is run inside the frontend folder.
Future Improvements
Support for other document formats (e.g., DOCX, TXT).
Improved field recognition using advanced NLP techniques (e.g., Hugging Face Transformers).
Deployment to cloud platforms like AWS, Heroku, or Vercel.
