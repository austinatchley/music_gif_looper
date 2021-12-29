import React from "react";
import ImageThumb from "./image-thumb.component";
import { convert } from "../convert";

function FileUpload() {
    const outputFile = "out.mp4";

    const [gifFile, setGifFile] = React.useState("");
    const [audioFile, setAudioFile] = React.useState("");
    //const [count, setCount] = React.useState(0);

    function handleGifUpload(event) {
        console.log(event);
        setGifFile(event.target.files[0]);
    }

    function handleAudioUpload(event) {
        console.log(event);
        setAudioFile(event.target.files[0]);
    }

    async function handleConvertButtonPress(event) {
        console.log(event);
        if (!gifFile || !audioFile) {
            console.error("missing a file");
        }

        await convert(gifFile, audioFile, outputFile);
    }

    return [
        (
            <div id="gif-upload-box">
                <a>GIF</a>
                <br></br>
                <input type="file" onChange={handleGifUpload} />
                <p>Filename: {gifFile.name}</p>
                <p>File type: {gifFile.type}</p>
                <p>File size: {gifFile.size} bytes</p>
                {gifFile && <ImageThumb image={gifFile} />}
            </div>
        ),
        (
            <div id="audio-upload-box">
                <a>AUDIO</a>
                <br></br>
                <input type="file" onChange={handleAudioUpload} />
                <p>Filename: {audioFile.name}</p>
                <p>File type: {audioFile.type}</p>
                <p>File size: {audioFile.size} bytes</p>
            </div>
        ),
        (
            <div id="convert-button-press">
                <button onClick={handleConvertButtonPress}>
                    Convert
                </button>
            </div>
        )
    ];
}

export default FileUpload;