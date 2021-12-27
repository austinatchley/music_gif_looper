import React from "react";
import ImageThumb from "./image-thumb.component";

/**
 * Component to handle file upload. Works for image
 * uploads, but can be edited to work for any file.
 */
function FileUpload() {
    // State to store uploaded file
    const [file, setFile] = React.useState("");

    // Handles file upload event and updates state
    function handleUpload(event) {
        setFile(event.target.files[0]);

        // TODO: Do something else
    }

    return (
        <div id="upload-box">
            <input type="file" onChange={handleUpload} />
            <p>Filename: {file.name}</p>
            <p>File type: {file.type}</p>
            <p>File size: {file.size} bytes</p>
            {file && <ImageThumb image={file} />}
        </div>
    );
}

export default FileUpload;