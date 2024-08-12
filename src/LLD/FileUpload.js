import React, { useState } from "react";
import axios from "axios";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [noFileSelected, setNoFileSelected] = useState(false);

  const onChangeHandler = (event) => {
    console.log(event.target.value);
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
  };

  const onClickHandler = () => {
    console.log("onClick");
    if (!file) {
      setNoFileSelected(true);
      return;
    }

    const formdata = new FormData();
    formdata.append("file", file);

    axios.post("http://httpbin.org/post", formdata, {
      onUploadProgress: (progressEvent) => {
        console.log("Progress");
        console.log(progressEvent.progress * 100);
        setProgress(progressEvent.progress * 100);
      },
    });
  };
  return (
    <div>
      <h1>FileUpload</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input type="file" onChange={onChangeHandler}></input>
        <button onClick={onClickHandler}>Upload</button>
        {noFileSelected && <h3>No File Selected!</h3>}
        <progress value={progress} max={100}></progress>
        <h3> {Math.round(progress)}%</h3>
        {progress === 100 ? <h3>File Uploaded</h3> : ""}
      </div>
    </div>
  );
}

export default FileUpload;
