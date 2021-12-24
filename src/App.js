import React from "react";
import UploadFiles from "./components/upload-files.component";

function App() {
  return (
    <div className="container" style={{ width: "600px" }}>
      <div className="my-2">
        <h3>test.com</h3>
        <h4>React upload multiple Files</h4>
      </div>

      <UploadFiles />
    </div>
  );
}

export default App;